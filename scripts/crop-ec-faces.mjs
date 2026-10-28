#!/usr/bin/env node
/**
 * One-off: crop each EC member face from the three poster images
 * and write them as individual JPGs to public/ec/.
 *
 * Run once: node scripts/crop-ec-faces.mjs
 */

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const SRC_DIR =
  'C:/Users/regin/AppData/Local/Temp/claude/d--Projects-risktaker-risktaker-frontend/1ef0edf5-0fa3-4ef0-a536-26eec5885b65/images';
const OUT_DIR = resolve(process.cwd(), 'public/ec');
const OUT_W = 320;
const OUT_H = 400;

// Grid layouts for each poster
// 7.jpg = 892x1280 (EC 2023-2025 part 1)   5 cols x 3 rows
// 8.jpg = 896x1280 (EC 2023-2025 part 2)   5+5+5+2 rows
// 9.jpg = 1100x1600 (EC 2025-2027)         3 cols x 3 rows

const COL5_X = [115, 285, 450, 615, 785]; // 5-column posters: face box centers
const BOX5 = { w: 150, h: 190 };

const COL3_X = [235, 550, 870]; // 3-column poster: face box centers
const BOX3 = { w: 200, h: 250 };

function row5(y) {
  return COL5_X.map((x) => ({ left: x - BOX5.w / 2, top: y, width: BOX5.w, height: BOX5.h }));
}
function row3(y) {
  return COL3_X.map((x) => ({ left: x - BOX3.w / 2, top: y, width: BOX3.w, height: BOX3.h }));
}

// Poster 7 (892x1280) — 5 x 3 grid
const POSTER_7_ROWS = {
  row1_y: 190,
  row2_y: 540,
  row3_y: 890
};
const poster7 = {
  file: '7.jpg',
  people: [
    ...zip(
      ['jabed-hasan', 'ruhul-amin-khan', 'sakil-hossain', 'sultana-jannat', 'nizamul-huda-khan'],
      row5(POSTER_7_ROWS.row1_y)
    ),
    ...zip(
      ['shahed-hasan', 'nusrat-islam-ritu', 'samira-haque', 'tanzeena-meher', 'habib-ullah'],
      row5(POSTER_7_ROWS.row2_y)
    ),
    ...zip(
      ['munjurul-shoeb', 'mili-shoma', 'raqibul-rajon', 'nahid-mahmud', 'niger-sultana'],
      row5(POSTER_7_ROWS.row3_y)
    )
  ]
};

// Poster 8 (896x1280) — 5+5+5+2
const POSTER_8_ROWS = {
  row1_y: 200,
  row2_y: 495,
  row3_y: 780,
  row4_y: 985
};
const row4_x = [335, 505]; // only 2 people, placed near center
const row4 = row4_x.map((x) => ({
  left: x - BOX5.w / 2,
  top: POSTER_8_ROWS.row4_y,
  width: BOX5.w,
  height: BOX5.h
}));
const poster8 = {
  file: '8.jpg',
  people: [
    ...zip(
      ['ashraf-rahman', 'zafar-taposh', 'bob-ahmed', 'salafin-rafi', 'mehadi-hasan'],
      row5(POSTER_8_ROWS.row1_y)
    ),
    ...zip(
      ['raish-uddin', 'mosaddak-mahmud', 'shah-jalal', 'farhana-islam', 'morsheda-nahar'],
      row5(POSTER_8_ROWS.row2_y)
    ),
    ...zip(
      ['rafayet-mozumder', 'safin-yara', 'mahbubur-rahman', 'jamir-uddin', 'cg-sunny'],
      row5(POSTER_8_ROWS.row3_y)
    ),
    ...zip(['andalib-mahmood', 'nusrat-jahan'], row4)
  ]
};

// Poster 9 (1100x1600) — 3 x 3
const POSTER_9_ROWS = {
  row1_y: 250,
  row2_y: 700,
  row3_y: 1140
};
const poster9 = {
  file: '9.jpg',
  people: [
    ...zip(['andalib', 'dt-minni', 'imran'], row3(POSTER_9_ROWS.row1_y)),
    ...zip(['shapna', 'rono', 'faria'], row3(POSTER_9_ROWS.row2_y)),
    ...zip(['nobel', 'happy', 'roni'], row3(POSTER_9_ROWS.row3_y))
  ]
};

function zip(slugs, boxes) {
  return slugs.map((slug, i) => ({ slug, box: boxes[i] }));
}

async function cropAll(poster) {
  const src = `${SRC_DIR}/${poster.file}`;
  for (const { slug, box } of poster.people) {
    const out = `${OUT_DIR}/${slug}.jpg`;
    await sharp(src)
      .extract({
        left: Math.round(box.left),
        top: Math.round(box.top),
        width: Math.round(box.width),
        height: Math.round(box.height)
      })
      .resize(OUT_W, OUT_H, { fit: 'cover', position: 'top' })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(out);
    console.log(`  ✓ ${slug}.jpg`);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  console.log('→ Poster 9 (EC 2025-2027)');
  await cropAll(poster9);
  console.log('→ Poster 7 (EC 2023-2025 part 1)');
  await cropAll(poster7);
  console.log('→ Poster 8 (EC 2023-2025 part 2)');
  await cropAll(poster8);
  console.log('\n✓ Done — all faces written to public/ec/');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
