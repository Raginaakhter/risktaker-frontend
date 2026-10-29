'use client';

import { useCallback, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Sprout, UsersRound, Compass, ChevronLeft, ChevronRight } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';
import { summitCarousel } from '@/lib/cloudinary';

const summitSlides = summitCarousel;
const SUMMIT_AUTOPLAY_MS = 4500;

const ThreeShowcase = dynamic(() => import('./ThreeShowcase'), { ssr: false });

const pillars = [
  {
    icon: UsersRound,
    kicker: 'Woven by Friendship',
    title: 'A batch that still shows up for each other.',
    body:
      'Not a mailing list, not a reunion group. A standing network of friends who answer calls, make introductions, and show up for weddings, hospitals, and hard days.',
    accent: 'ember' as const
  },
  {
    icon: Sprout,
    kicker: 'Known and Called On',
    title: 'Small enough to know you. Big enough to help.',
    body:
      'Every member has a profile and a voice here. When a doctor is needed at 2 a.m., a vendor at 10 a.m., or a mentor for a nephew — the request lands with someone who already knows your name.',
    accent: 'gold' as const
  },
  {
    icon: Compass,
    kicker: 'Grounded in Purpose',
    title: 'A platform with a reason to exist.',
    body:
      'Beyond friendship: knowledge shared without gatekeeping, business done with trust, and social work measured by what actually changed. We publish the receipts once a year.',
    accent: 'jade' as const
  }
];

const accentMap = {
  ember: { ring: 'border-ember-400/50', bg: 'bg-ember-500/8', text: 'text-ember-600', glow: 'bg-ember-400/12' },
  gold: { ring: 'border-gold-500/50', bg: 'bg-gold-500/10', text: 'text-gold-700', glow: 'bg-gold-400/15' },
  jade: { ring: 'border-jade-500/50', bg: 'bg-jade-500/10', text: 'text-jade-700', glow: 'bg-jade-400/12' }
};

export default function Difference() {
  return (
    <section id="difference" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <ThreeShowcase />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 20%, rgba(10,8,6,0.75) 65%, rgba(10,8,6,0.95) 100%)'
        }}
      />

      <div className="section-wrap relative">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">The RT 2000 Difference</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
              Friendship, learning
              <br />
              and leadership —
              <br />
              <span className="text-shine">developed together.</span>
            </h2>
            <p className="mt-6 text-ink-700 leading-relaxed max-w-2xl">
              Three things set this platform apart from the usual batch group. They are the
              standards we hold ourselves to — and the reason members keep returning.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid lg:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, kicker, title, body, accent }) => {
            const a = accentMap[accent];
            return (
              <StaggerItem key={kicker}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="card p-7 relative overflow-hidden group h-full"
                >
                  <div className={`absolute -top-20 -right-20 w-56 h-56 rounded-full ${a.glow} blur-3xl opacity-70 group-hover:opacity-100 transition`} />
                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className={`w-12 h-12 rounded-2xl ${a.bg} border ${a.ring} flex items-center justify-center ${a.text}`}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div className={`mt-6 text-[10px] uppercase tracking-[0.28em] font-semibold ${a.text}`}>
                      {kicker}
                    </div>
                    <h3 className="mt-3 font-display text-2xl text-ink-900 tracking-tight leading-tight">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm text-ink-600 leading-relaxed">{body}</p>
                  </div>
                </motion.article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.15}>
          <SummitCarousel />
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 card p-6 md:p-7 flex flex-wrap items-center justify-between gap-5 bg-gradient-to-r from-jade-500/8 via-cream-100 to-gold-500/8 border-jade-500/30">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="w-11 h-11 rounded-full bg-jade-500/15 border border-jade-500/40 flex items-center justify-center text-jade-700"
              >
                <UsersRound size={18} />
              </motion.div>
              <div>
                <div className="font-display text-base md:text-lg text-ink-900 tracking-wide uppercase">
                  Monthly Meetups
                </div>
                <div className="text-xs text-ink-600 mt-0.5">
                  Rotating venues across Dhaka · open to all verified members · no agenda, just
                  the batch.
                </div>
              </div>
            </div>
            <motion.a
              href="#events"
              whileHover={{ x: 4 }}
              className="btn-ghost !text-xs"
            >
              See the schedule →
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SummitCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = summitSlides.length;

  const go = useCallback((n: number) => setIndex(((n % total) + total) % total), [total]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, SUMMIT_AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  return (
    <figure
      className="group mt-14 relative rounded-3xl overflow-hidden border border-gold-500/40 shadow-[0_20px_60px_-20px_rgba(255,122,26,0.35),0_0_0_1px_rgba(212,160,23,0.15)] bg-cream-200"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={summitSlides[index]}
              alt="Risk Taker Leadership Summit 2025"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold-500/20" />

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 rounded-full bg-black/40 border border-white/25 backdrop-blur-md text-white flex items-center justify-center transition hover:bg-black/60 hover:scale-105 opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-11 md:w-11 rounded-full bg-black/40 border border-white/25 backdrop-blur-md text-white flex items-center justify-center transition hover:bg-black/60 hover:scale-105 opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5">
          {summitSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group/dot relative h-1.5 w-7 rounded-full overflow-hidden bg-white/25"
            >
              <span
                className={`absolute inset-y-0 left-0 bg-gold-400 transition-all ${
                  i === index ? 'w-full' : 'w-0 group-hover/dot:w-1/3'
                }`}
                style={
                  i === index && !paused
                    ? { transition: `width ${SUMMIT_AUTOPLAY_MS}ms linear` }
                    : undefined
                }
              />
            </button>
          ))}
        </div>
      </div>

      <figcaption className="absolute bottom-0 inset-x-0 p-5 md:p-7 flex flex-wrap items-end justify-between gap-3 z-10">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold">
            Flagship Event
          </div>
          <div className="mt-1 font-display text-xl md:text-2xl text-white tracking-tight">
            Risk Taker Leadership Summit 2025
          </div>
        </div>
        <div className="text-xs text-white/75 max-w-xs md:text-right">
          Development · Learning · Mindset · Improvement · Transformation
        </div>
      </figcaption>
    </figure>
  );
}
