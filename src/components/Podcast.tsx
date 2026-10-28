'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Mic, Play, Radio, Clock, X } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

type Episode = {
  series: string;
  title: string;
  guest: string;
  role: string;
  duration: string;
  tag?: string;
  poster?: string;
  videoSrc?: string;
};

const episodes: Episode[] = [
  {
    series: 'RT Podcast',
    title: 'Episode 01 — Risk Taker 2000 Podcast',
    guest: 'RT 2000 Members',
    role: 'Opening conversation',
    duration: 'Full episode',
    tag: 'Episode 01',
    poster: '/slides/377A74A9-802E-481A-AA69-B07360A9C7EC.jpg',
    videoSrc: '/videos/RT_PODCAST_EP_01.mp4'
  },
  {
    series: 'RT Podcast',
    title: 'Episode 02 — Risk Taker 2000 Podcast',
    guest: 'RT 2000 Members',
    role: 'Follow-up conversation',
    duration: 'Full episode',
    tag: 'Episode 02',
    videoSrc: '/videos/RT_PODCAST_EP_02.mp4'
  }
];

const series = [
  { name: 'The Person Behind the Profession', note: 'The human story under the title.' },
  { name: 'Risk, Failure & Success', note: 'The decisions that turned things around.' },
  { name: 'Business & Career Journey', note: 'How a path actually gets built.' },
  { name: 'Leadership in Action', note: 'Real teams, real decisions.' },
  { name: 'Lessons for the Next Generation', note: 'What this batch wants to pass on.' },
  { name: 'Women in Leadership', note: 'Experience, obstacles, choices.' }
];

export default function Podcast() {
  const [modalEp, setModalEp] = useState<Episode | null>(null);

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

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <Reveal direction="right">
            <FeaturedEpisode ep={episodes[0]} />
          </Reveal>
          <Stagger className="grid gap-4" stagger={0.08}>
            {episodes.slice(1).map((ep) => (
              <StaggerItem key={ep.title}>
                <EpisodeRow ep={ep} onPlay={() => setModalEp(ep)} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div className="mt-16">
          <Reveal>
            <div className="eyebrow">Series on Rotation</div>
          </Reveal>
          <Stagger className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.05}>
            {series.map((s) => (
              <StaggerItem key={s.name}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className="card p-5 h-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full border border-gold-500/50 bg-gold-500/5 flex items-center justify-center text-gold-700">
                      <Mic size={14} />
                    </div>
                    <div className="font-display text-sm tracking-wide text-ink-900 uppercase">
                      {s.name}
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-ink-600 leading-relaxed">{s.note}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <VideoModal ep={modalEp} onClose={() => setModalEp(null)} />
    </section>
  );
}

function FeaturedEpisode({ ep }: { ep: Episode }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: playing ? 1 : 1.01 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="card bg-gradient-to-br from-ember-500/8 via-cream-100 to-cream-200 border-ember-400/30 relative overflow-hidden"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
        {playing && ep.videoSrc ? (
          <video
            src={ep.videoSrc}
            poster={ep.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full bg-black"
          />
        ) : (
          <>
            {ep.poster && (
              <Image
                src={ep.poster}
                alt="RT Podcast studio"
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-white bg-ember-500/90 border border-ember-400/70 px-2 py-1 rounded">
                <Radio size={10} /> {ep.tag ?? 'Episode'}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/85 drop-shadow">
                {ep.series}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => ep.videoSrc && setPlaying(true)}
              disabled={!ep.videoSrc}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ember-gradient text-white flex items-center justify-center shadow-[0_8px_28px_-6px_rgba(255,122,26,0.65)] disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Play episode"
            >
              <Play size={24} fill="currentColor" />
            </motion.button>
          </>
        )}
      </div>
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-ember-400/15 blur-3xl pointer-events-none" />
      <div className="relative p-7">
        <h3 className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight leading-tight">
          {ep.title}
        </h3>
        <div className="mt-4 text-sm text-ink-700">
          With <span className="text-ember-500 font-semibold">{ep.guest}</span> — {ep.role}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-600">
          <Clock size={12} /> {ep.duration}
        </div>
      </div>
    </motion.div>
  );
}

function EpisodeRow({ ep, onPlay }: { ep: Episode; onPlay: () => void }) {
  const hasVideo = !!ep.videoSrc;
  return (
    <motion.button
      whileHover={{ x: 6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      onClick={hasVideo ? onPlay : undefined}
      disabled={!hasVideo}
      className="card p-5 text-left group flex items-center gap-4 w-full disabled:cursor-default"
    >
      <div
        className={`w-11 h-11 rounded-full border flex items-center justify-center transition ${
          hasVideo
            ? 'border-ember-500/50 bg-ember-500/10 text-ember-500 group-hover:bg-ember-500 group-hover:text-white group-hover:border-ember-500'
            : 'border-cream-400 bg-cream-200 text-ink-600'
        }`}
      >
        <Play size={14} fill="currentColor" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-widest text-ink-500">{ep.series}</div>
        <div className="mt-0.5 font-display text-sm text-ink-900 tracking-wide leading-snug">
          {ep.title}
        </div>
        <div className="mt-1 text-xs text-ink-600 truncate">
          <span className="text-ember-500">{ep.guest}</span> — {ep.role}
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-ink-500 shrink-0">
        <Clock size={10} /> {ep.duration}
      </div>
    </motion.button>
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
      {ep && ep.videoSrc && (
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
            className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-gold-500/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] bg-black"
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-ember-500 transition"
            >
              <X size={18} />
            </button>
            <video
              key={ep.videoSrc}
              src={ep.videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-auto max-h-[85vh] bg-black"
            />
            <div className="p-5 bg-black/95 border-t border-gold-500/20">
              <div className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                {ep.series}
              </div>
              <div className="mt-1 font-display text-base md:text-lg text-white tracking-tight">
                {ep.title}
              </div>
              <div className="mt-1 text-xs text-white/70">
                With <span className="text-ember-400">{ep.guest}</span> — {ep.role}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
