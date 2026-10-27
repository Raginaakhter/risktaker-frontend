'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import Counter from './motion/Counter';

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: string;
};

const slides: Slide[] = [
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80',
    alt: 'Alumni gathering',
    eyebrow: 'SSC 2000 — Alumni Platform',
    title: (
      <>
        Risk Takers.
        <br />
        Builders.
        <br />
        <span className="text-shine">Difference Makers.</span>
      </>
    ),
    copy: 'A friendship that grew into a network — where knowledge, leadership, and social good meet.'
  },
  {
    src: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1920&q=80',
    alt: 'Business collaboration',
    eyebrow: 'Business · Network · Growth',
    title: (
      <>
        Connect.
        <br />
        <span className="text-shine">Collaborate.</span>
        <br />
        Grow Together.
      </>
    ),
    copy: '60+ members across 12 industries building ventures, sharing deals, and lifting each other up.'
  },
  {
    src: 'https://images.unsplash.com/photo-1491439592389-3d19fbfdac8c?auto=format&fit=crop&w=1920&q=80',
    alt: 'Learning and knowledge',
    eyebrow: 'Learn · Teach · Share',
    title: (
      <>
        Lifelong
        <br />
        <span className="text-shine">Learning,</span>
        <br />
        Shared Wisdom.
      </>
    ),
    copy: 'Podcasts, mentorship, and knowledge hubs — the batch of 2000 keeps learning, together.'
  },
  {
    src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80',
    alt: 'Community impact',
    eyebrow: 'Impact · Service · Legacy',
    title: (
      <>
        Giving Back.
        <br />
        <span className="text-shine">Making an Impact.</span>
      </>
    ),
    copy: 'From health camps to scholarships — real work, real reach, real change in the community.'
  },
  {
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80',
    alt: 'Events and gatherings',
    eyebrow: 'Events · Reunions · Celebrations',
    title: (
      <>
        Memories
        <br />
        <span className="text-shine">that Last</span>
        <br />
        Forever.
      </>
    ),
    copy: 'Reunions, celebrations and meetups — the moments that remind us why we started.'
  }
];

const AUTOPLAY_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (n: number) => setIndex((prev) => (n + slides.length) % slides.length),
    []
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, next]);

  const slide = slides[index];

  return (
    <section
      id="top"
      className="relative w-full h-[100svh] min-h-[640px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="section-wrap w-full py-28 md:py-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
                <span className="block h-px w-10 bg-gold-500/70" />
                {slide.eyebrow}
              </span>

              <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
                {slide.copy}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <motion.a
                  href="#members"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Explore Members <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="#join"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white border border-white/40 bg-white/10 backdrop-blur-md transition hover:bg-white/20 hover:border-white/70"
                >
                  Join the Community
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            <Stat value={60} suffix="+" label="Members" />
            <Stat value={12} label="Industries" />
            <Stat value={25} suffix="+" label="Doctors" />
          </motion.div>
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition hover:bg-white/25 hover:scale-105"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-md text-white flex items-center justify-center transition hover:bg-white/25 hover:scale-105"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-20 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative h-2 w-10 overflow-hidden rounded-full bg-white/25"
          >
            <span
              className={`absolute inset-y-0 left-0 bg-gold-400 transition-all ${
                i === index ? 'w-full' : 'w-0 group-hover:w-1/3'
              }`}
              style={
                i === index && !paused
                  ? { transition: `width ${AUTOPLAY_MS}ms linear` }
                  : undefined
              }
            />
          </button>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 text-white/80 text-xs uppercase tracking-widest"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Zap size={14} className="text-gold-400" />
        </motion.div>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="border-l-2 border-gold-400/70 pl-4">
      <Counter
        value={value}
        suffix={suffix}
        className="font-display text-3xl md:text-4xl text-white tracking-tight block"
      />
      <div className="text-[11px] uppercase tracking-[0.25em] text-white/70 mt-1">{label}</div>
    </div>
  );
}
