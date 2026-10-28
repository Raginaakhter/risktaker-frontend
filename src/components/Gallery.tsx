'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, PlayCircle } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';
import { CLD } from '@/lib/cloudinary';

type Tile = {
  title: string;
  src: string;
  big?: boolean;
};

const tiles: Tile[] = [
  {
    title: 'Leadership Summit 2025 — Opening Keynote',
    src: CLD.summit,
    big: true
  },
  { title: 'Fruit Festival', src: '/slides/IMG_7452.JPG' },
  { title: 'Mother’s Day Special', src: CLD.slide1 },
  { title: 'Reunion Night', src: '/slides/0b518bfe-2e23-4892-a414-22573cb00a10.jpg' },
  { title: 'Blood Donation Camp — Dhanmondi', src: '/slides/236cf375-fbe5-4308-a563-d1571c4d52a4.jpg' },
  { title: 'RT Podcast — Studio Day', src: '/slides/377A74A9-802E-481A-AA69-B07360A9C7EC.jpg' }
];

const headlines = [
  { title: 'RT 2000 Launches Digital Member Directory', date: '20 Oct 2026' },
  { title: 'Winter Blood Drive — Volunteers Needed', date: '14 Oct 2026' },
  { title: '2026 Leadership Summit Theme Announced', date: '02 Oct 2026' },
  { title: 'Member Dr. Riyad Mahmud Named Fellow of Cardiac Society', date: '28 Sep 2026' }
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
                    key={h.title}
                    whileHover={{ x: 4 }}
                    className="p-5 flex items-start gap-4 transition cursor-pointer hover:bg-cream-300/50"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg border border-ember-500/40 bg-ember-500/5 text-ember-600 flex items-center justify-center text-[10px] font-display tabular-nums">
                      {h.date.split(' ')[0]}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display text-sm text-ink-900 tracking-wide leading-snug">
                        {h.title}
                      </div>
                      <div className="mt-1 text-[11px] uppercase tracking-widest text-ink-500">
                        {h.date}
                      </div>
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
