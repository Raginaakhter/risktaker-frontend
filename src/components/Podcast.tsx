'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Play, Radio, Clock, X, CalendarClock, ArrowLeft } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

type Episode = {
  youtubeId: string;
  tag: string;
  title: string;
};

const episodes: Episode[] = [
  { youtubeId: '5E_XmO7ScIg', tag: 'Episode 01', title: 'Episode 01 — Risk Taker 2000 Podcast' },
  { youtubeId: 'mP-hd9S1mHE', tag: 'Episode 02', title: 'Episode 02 — Risk Taker 2000 Podcast' },
  { youtubeId: 'Ar3wOqmWbg8', tag: 'Episode 03', title: 'Episode 03 — Risk Taker 2000 Podcast' },
  { youtubeId: 'sm3UWlbVF5M', tag: 'Episode 04', title: 'Episode 04 — Risk Taker 2000 Podcast' },
  { youtubeId: 'i2q1KP57Z5A', tag: 'Episode 05', title: 'Episode 05 — Risk Taker 2000 Podcast' },
  { youtubeId: 'yU44NJeX80U', tag: 'Episode 06', title: 'Episode 06 — Risk Taker 2000 Podcast' },
  { youtubeId: '_cRzt8QT2hA', tag: 'Episode 07', title: 'Episode 07 — Risk Taker 2000 Podcast' },
  { youtubeId: '4u2qpV67Hl8', tag: 'Episode 08', title: 'Episode 08 — Risk Taker 2000 Podcast' },
  { youtubeId: 'GwEol-0l-88', tag: 'Episode 09', title: 'Episode 09 — Risk Taker 2000 Podcast' },
  { youtubeId: '8vZtC1EY2qQ', tag: 'Episode 10', title: 'Episode 10 — Risk Taker 2000 Podcast' }
];

const upcoming = [
  { day: '12', month: 'Nov', year: '2026' },
  { day: '26', month: 'Nov', year: '2026' },
  { day: '10', month: 'Dec', year: '2026' },
  { day: '24', month: 'Dec', year: '2026' }
];

function thumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function embedUrl(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}

export default function Podcast() {
  const [modalEp, setModalEp] = useState<Episode | null>(null);
  const featured = episodes[0];
  const rest = episodes.slice(1);

  return (
    <section id="podcast" className="relative py-24 md:py-32">
      <div className="section-wrap">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <span className="eyebrow">RT Live & Podcast</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                Stories we don&apos;t
                <br />
                get to hear otherwise.
              </h2>
            </div>
            <p className="text-ink-700 max-w-lg lg:text-right">
              Conversations with members about the work and the life behind the work —
              recorded live, then archived for the batch and anyone else listening.
            </p>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal direction="right">
            <FeaturedEpisode ep={featured} onPlay={() => setModalEp(featured)} />
          </Reveal>
        </div>

        <div className="mt-10">
          <Reveal>
            <div className="eyebrow">All Episodes</div>
          </Reveal>
          <Stagger
            className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            stagger={0.05}
          >
            {rest.map((ep) => (
              <StaggerItem key={ep.youtubeId}>
                <EpisodeCard ep={ep} onPlay={() => setModalEp(ep)} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="eyebrow">Upcoming Episodes</div>
              <div className="text-xs uppercase tracking-widest text-ink-500 flex items-center gap-1.5">
                <CalendarClock size={12} className="text-ember-500" /> RT Podcast
              </div>
            </div>
          </Reveal>
          <Stagger
            className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3"
            stagger={0.06}
          >
            {upcoming.map((u) => (
              <StaggerItem key={`${u.month}-${u.day}`}>
                <UpcomingCard day={u.day} month={u.month} year={u.year} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <VideoModal ep={modalEp} onClose={() => setModalEp(null)} />
    </section>
  );
}

function FeaturedEpisode({ ep, onPlay }: { ep: Episode; onPlay: () => void }) {
  return (
    <motion.button
      onClick={onPlay}
      whileHover={{ scale: 1.005 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="card bg-gradient-to-br from-ember-500/8 via-cream-100 to-cream-200 border-ember-400/30 relative overflow-hidden text-left w-full group"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
        <Image
          src={thumb(ep.youtubeId)}
          alt={ep.title}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white bg-ember-500/90 border border-ember-400/70 px-2 py-1 rounded">
            <Radio size={10} /> {ep.tag}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/85 drop-shadow">
            RT Podcast
          </span>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ember-gradient text-white flex items-center justify-center shadow-[0_8px_28px_-6px_rgba(255,122,26,0.65)]"
          aria-label="Play episode"
        >
          <Play size={24} fill="currentColor" />
        </motion.div>
      </div>
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-ember-400/15 blur-3xl pointer-events-none" />
      <div className="relative p-7">
        <h3 className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight leading-tight">
          {ep.title}
        </h3>
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-600">
          <Clock size={12} /> Full episode on YouTube
        </div>
      </div>
    </motion.button>
  );
}

function EpisodeCard({ ep, onPlay }: { ep: Episode; onPlay: () => void }) {
  return (
    <motion.button
      onClick={onPlay}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="card overflow-hidden text-left w-full group h-full"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
        <Image
          src={thumb(ep.youtubeId)}
          alt={ep.title}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white bg-ember-500/90 border border-ember-400/70 px-2 py-0.5 rounded">
            <Radio size={10} /> {ep.tag}
          </span>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-ember-gradient text-white flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(255,122,26,0.65)] opacity-90 group-hover:scale-110 transition">
          <Play size={18} fill="currentColor" />
        </div>
      </div>
      <div className="p-4">
        <div className="font-display text-sm text-ink-900 tracking-wide leading-snug">
          {ep.title}
        </div>
        <div className="mt-1 text-[11px] text-ink-500 flex items-center gap-1">
          <Clock size={10} /> Watch on YouTube
        </div>
      </div>
    </motion.button>
  );
}

function UpcomingCard({ day, month, year }: { day: string; month: string; year: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="card p-5 h-full flex items-center gap-4 border-gold-500/30 bg-gradient-to-br from-gold-500/8 to-cream-100"
    >
      <div className="w-16 h-16 shrink-0 rounded-xl bg-white border border-gold-500/40 flex flex-col items-center justify-center text-center">
        <div className="font-display text-2xl text-ember-600 leading-none tabular-nums">
          {day}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-ink-500 mt-0.5">
          {month}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold">
          Upcoming
        </div>
        <div className="mt-1 font-display text-base text-ink-900 tracking-wide">
          RT Podcast
        </div>
        <div className="mt-0.5 text-xs text-ink-600">
          {day} {month} {year}
        </div>
      </div>
    </motion.div>
  );
}

function VideoModal({ ep, onClose }: { ep: Episode | null; onClose: () => void }) {
  useEffect(() => {
    if (!ep) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [ep, onClose]);

  return (
    <AnimatePresence>
      {ep && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-gold-500/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] bg-black flex flex-col"
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-ember-500 transition"
            >
              <X size={16} />
            </button>
            <div className="relative aspect-video w-full bg-black">
              <iframe
                key={ep.youtubeId}
                src={embedUrl(ep.youtubeId)}
                title={ep.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="flex items-center gap-3 px-4 py-3 bg-black border-t border-gold-500/20">
              <button
                onClick={onClose}
                aria-label="Back to podcasts"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white bg-ember-500/90 hover:bg-ember-500 border border-ember-400/70 rounded-full px-4 py-2 transition shrink-0"
              >
                <ArrowLeft size={14} /> Back
              </button>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                  RT Podcast · {ep.tag}
                </div>
                <div className="font-display text-xs md:text-sm text-white tracking-wide truncate">
                  {ep.title}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
