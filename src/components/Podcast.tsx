'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mic, Play, Radio, Clock } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const episodes = [
  {
    series: 'The Person Behind the Profession',
    title: 'Rebuilding a career after a decade in a different field',
    guest: 'Dr. Mahbubul Alam',
    role: 'Medicine & Haematology Specialist',
    duration: '48 min',
    tag: 'Latest'
  },
  {
    series: 'Risk, Failure & Success',
    title: 'When the first business failed — and what came next',
    guest: 'Shahzada Siddiqui Polash',
    role: 'National Bank Ltd.',
    duration: '41 min'
  },
  {
    series: 'Leadership in Action',
    title: 'Leading a team of 80 doctors through COVID',
    guest: 'Dr. Morshed Mymen',
    role: 'Pediatric Specialist',
    duration: '55 min'
  },
  {
    series: 'Women in Leadership',
    title: 'Running a branch, raising a family, no apologies',
    guest: 'Tania',
    role: 'Southeast Bank, Iskaton Branch',
    duration: '36 min'
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
                <EpisodeRow ep={ep} />
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
    </section>
  );
}

function FeaturedEpisode({ ep }: { ep: (typeof episodes)[number] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className="card bg-gradient-to-br from-ember-500/8 via-cream-100 to-cream-200 border-ember-400/30 relative overflow-hidden"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1600&q=80"
          alt="RT Podcast studio"
          fill
          sizes="(min-width: 1024px) 720px, 100vw"
          className="object-cover"
        />
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
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ember-gradient text-white flex items-center justify-center shadow-[0_8px_28px_-6px_rgba(255,122,26,0.65)]"
          aria-label="Play episode"
        >
          <Play size={24} fill="currentColor" />
        </motion.button>
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

function EpisodeRow({ ep }: { ep: (typeof episodes)[number] }) {
  return (
    <motion.button
      whileHover={{ x: 6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="card p-5 text-left group flex items-center gap-4 w-full"
    >
      <div className="w-11 h-11 rounded-full border border-cream-400 bg-cream-100 flex items-center justify-center text-ink-700 group-hover:border-ember-500 group-hover:text-ember-600 group-hover:bg-ember-500/5 transition">
        <Play size={14} fill="currentColor" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] uppercase tracking-widest text-ink-500">{ep.series}</div>
        <div className="mt-0.5 font-display text-sm text-ink-900 tracking-wide leading-snug">
          {ep.title}
        </div>
        <div className="mt-1 text-xs text-ink-600 truncate">
          <span className="text-ember-600">{ep.guest}</span> — {ep.role}
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs text-ink-500 shrink-0">
        <Clock size={10} /> {ep.duration}
      </div>
    </motion.button>
  );
}
