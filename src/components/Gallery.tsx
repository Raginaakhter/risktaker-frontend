'use client';

import { motion } from 'framer-motion';
import { Camera, PlayCircle, Image as ImageIcon } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

type Tile = {
  title: string;
  tag: string;
  date: string;
  bg: string;
  big?: boolean;
};

const tiles: Tile[] = [
  {
    title: 'Leadership Summit 2025 — Opening Keynote',
    tag: 'Flagship',
    date: '12 Dec 2025',
    bg: 'from-ember-500/40 via-ember-500/15 to-cream-200',
    big: true
  },
  { title: 'Fruit Festival', tag: 'Family', date: '18 Jun 2025', bg: 'from-gold-500/50 via-gold-500/20 to-cream-200' },
  { title: 'Mother\'s Day Special', tag: 'Family', date: '11 May 2025', bg: 'from-rose-400/40 via-rose-400/15 to-cream-200' },
  { title: 'Reunion Night', tag: 'Community', date: '28 Feb 2025', bg: 'from-sky-400/40 via-sky-400/15 to-cream-200' },
  { title: 'Blood Donation Camp — Dhanmondi', tag: 'Impact', date: '04 Oct 2025', bg: 'from-jade-500/40 via-jade-500/15 to-cream-200' },
  { title: 'RT Podcast — Studio Day', tag: 'Podcast', date: '20 Aug 2025', bg: 'from-purple-400/40 via-purple-400/15 to-cream-200' }
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
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-600 border border-cream-400 bg-cream-300rounded-full px-3 py-1.5">
                <Camera size={12} /> 2,400+ photos
              </span>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-600 border border-cream-400 bg-cream-300rounded-full px-3 py-1.5">
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
                    whileHover={{ backgroundColor: '#FBF8F2', x: 4 }}
                    className="p-5 flex items-start gap-4 transition cursor-pointer"
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
      className={`relative overflow-hidden rounded-2xl border border-cream-300 bg-gradient-to-br ${tile.bg} ${
        tile.big ? 'aspect-square md:aspect-auto md:min-h-[320px] h-full' : 'aspect-[4/3]'
      } group shadow-sm cursor-pointer`}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition">
        <ImageIcon size={tile.big ? 64 : 32} className="text-ink-800/40" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="text-[9px] uppercase tracking-widest text-ember-600 font-semibold">{tile.tag}</div>
        <div className={`font-display tracking-wide text-ink-900 leading-snug mt-1 ${tile.big ? 'text-xl' : 'text-sm'}`}>
          {tile.title}
        </div>
        <div className="mt-1 text-[10px] text-ink-500">{tile.date}</div>
      </div>
    </motion.article>
  );
}
