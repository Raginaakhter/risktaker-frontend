'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, PlayCircle } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';
import { galleryImages } from '@/lib/cloudinary';

type Tile = {
  title: string;
  src: string;
  big?: boolean;
};

const tiles: Tile[] = [
  { title: 'Mother’s Day Celebration', src: galleryImages[0], big: true },
  { title: 'Risk Taker Quarter Marathon', src: galleryImages[1] },
  { title: 'Members Gathering', src: galleryImages[2] },
  { title: 'Live Music Evening', src: galleryImages[3] },
  { title: 'Mother’s Day — Cake Cutting', src: galleryImages[4] }
];

const headlines = [
  'Risk Taker Leadership Summit 2026',
  'Risk Taker Club Introduce Soon',
  'Risk Taker Podcast',
  'Training for Next Generation',
  'Members Database Update'
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="section-wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">News & Gallery</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                Moments and
                <br />
                what came of them.
              </h2>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-600 border border-cream-400 bg-cream-300 rounded-full px-3 py-1.5">
                <Camera size={12} /> 2,400+ photos
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-600 border border-cream-400 bg-cream-300 rounded-full px-3 py-1.5">
                <PlayCircle size={12} /> 48 reels
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-3" stagger={0.07}>
            {tiles.map((t) => (
              <StaggerItem key={t.title} className={t.big ? 'md:col-span-2 md:row-span-2' : ''}>
                <GalleryTile tile={t} />
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal direction="left">
            <aside>
              <div className="eyebrow">Latest Headlines</div>
              <div className="mt-5 card divide-y divide-cream-300">
                {headlines.map((h) => (
                  <motion.div
                    key={h}
                    whileHover={{ x: 4 }}
                    className="p-5 flex items-center gap-4 transition cursor-pointer hover:bg-cream-300/50"
                  >
                    <span className="shrink-0 w-2 h-2 rounded-full bg-ember-500" />
                    <div className="font-display text-sm text-ink-900 tracking-wide leading-snug">
                      {h}
                    </div>
                  </motion.div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GalleryTile({ tile }: { tile: Tile }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`relative overflow-hidden rounded-2xl border border-cream-400 ${
        tile.big ? 'aspect-square md:aspect-auto md:min-h-[320px] h-full' : 'aspect-[4/3]'
      } group shadow-[0_12px_32px_-16px_rgba(0,0,0,0.6)] cursor-pointer`}
    >
      <Image
        src={tile.src}
        alt={tile.title}
        fill
        sizes="(min-width: 1024px) 480px, (min-width: 768px) 33vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </motion.article>
  );
}
