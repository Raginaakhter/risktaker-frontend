#!/usr/bin/env node
/**
 * Uploads every file under public/videos/ (and optional public/slides/) to
 * Cloudinary and prints a JSON map of local path → secure Cloudinary URL.
 *
 * Usage:
 *   npm run upload:cloudinary
 *   npm run upload:cloudinary -- --dir public/slides   (upload images instead)
 *
 * Requires .env.local with CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY,
 * CLOUDINARY_API_SECRET.
 */

import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import { readdir, stat } from 'node:fs/promises';
import { extname, join, posix, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config({ path: '.env.local' });

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET || CLOUDINARY_API_SECRET.startsWith('PASTE_')) {
  console.error('✗  Cloudinary credentials missing or placeholder in .env.local');
  console.error('   Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET');
  process.exit(1);
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true
});

const VIDEO_EXT = new Set(['.mp4', '.mov', '.webm', '.m4v']);
const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);

const scriptDir = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = resolve(scriptDir, '..');

const args = process.argv.slice(2);
const dirArg = args.indexOf('--dir');
const targetDir = dirArg >= 0 ? args[dirArg + 1] : 'public/videos';

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

function resourceTypeFor(ext) {
  if (VIDEO_EXT.has(ext)) return 'video';
  if (IMAGE_EXT.has(ext)) return 'image';
  return null;
}

async function main() {
  const absDir = resolve(projectRoot, targetDir);
  try {
    await stat(absDir);
  } catch {
    console.error(`✗  Directory not found: ${absDir}`);
    process.exit(1);
  }

  console.log(`→  Scanning ${targetDir}\n`);
  const results = {};

  for await (const file of walk(absDir)) {
    const ext = extname(file).toLowerCase();
    const resourceType = resourceTypeFor(ext);
    if (!resourceType) continue;

    const rel = relative(projectRoot, file).replace(/\\/g, '/');
    const publicIdBase = posix.join(
      'risktaker-2000',
      rel.replace(/^public\//, '').replace(ext, '')
    );

    const st = await stat(file);
    const sizeMB = (st.size / 1024 / 1024).toFixed(1);
    process.stdout.write(`   uploading ${rel} (${sizeMB} MB) ... `);
    try {
      const uploader = resourceType === 'video'
        ? (opts) =>
            new Promise((res, rej) => {
              cloudinary.uploader.upload_large(file, opts, (err, result) =>
                err ? rej(err) : res(result)
              );
            })
        : (opts) => cloudinary.uploader.upload(file, opts);

      const res = await uploader({
        resource_type: resourceType,
        public_id: publicIdBase,
        overwrite: true,
        chunk_size: 6 * 1024 * 1024
      });
      console.log('✓');
      results[rel] = {
        resource_type: resourceType,
        public_id: res.public_id,
        secure_url: res.secure_url,
        bytes: res.bytes,
        duration: res.duration ?? null,
        width: res.width ?? null,
        height: res.height ?? null
      };
    } catch (err) {
      console.log('✗');
      console.error(`     error: ${err.message}`);
    }
  }

  console.log('\n✓  Done.\n');
  console.log(JSON.stringify(results, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
