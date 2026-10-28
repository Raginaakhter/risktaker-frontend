'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';

const TOTAL = 75;
const cards = Array.from({ length: TOTAL }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return { src: `/summit-2026/${n}.jpg`, idx: i };
});

export default function LeadershipSummit2026Page() {
  const [open, setOpen] = useState<number | null>(null);

  const next = () => setOpen((i) => (i === null ? null : (i + 1) % TOTAL));
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + TOTAL) % TOTAL));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <main className="relative">
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-16 bg-cream-200/60 border-b border-cream-300">
        <div className="section-wrap">
          <Reveal>
            <a
              href="/#events"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink-600 hover:text-ember-600 transition"
            >
              <ArrowLeft size={14} /> Back to events
            </a>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Flagship Event · Registered Members</span>
                <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                  Leadership Summit 2026
                  <br />
                  <span className="text-shine">Let&apos;s Fly to take better decisions.</span>
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-700">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={14} className="text-ember-500" /> 30 October 2026
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} className="text-ember-500" /> To be announced
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Users2 size={14} className="text-ember-500" /> {TOTAL} registered
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 md:py-20">
        <div className="section-wrap">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-2xl md:text-3xl text-ink-900 tracking-tight">
                Registered members
              </h2>
              <div className="text-xs uppercase tracking-widest text-ink-500 font-mono">
                Tap a card to enlarge
              </div>
            </div>
          </Reveal>

          <Stagger
            className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
            stagger={0.015}
          >
            {cards.map((c) => (
              <StaggerItem key={c.src}>
                <motion.button
                  onClick={() => setOpen(c.idx)}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className="relative block w-full aspect-[3/4] rounded-xl overflow-hidden border border-cream-400 bg-cream-100 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.25)] group"
                >
                  <Image
                    src={c.src}
                    alt={`Registered member ${c.idx + 1}`}
                    fill
                    sizes="(min-width:1280px) 180px, (min-width:1024px) 200px, (min-width:640px) 33vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 group-hover:ring-ember-500/40 transition" />
                </motion.button>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Lightbox open={open} onClose={() => setOpen(null)} onNext={next} onPrev={prev} />

      <Footer />
    </main>
  );
}

function Lightbox({
  open,
  onClose,
  onNext,
  onPrev
}: {
  open: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <AnimatePresence>
      {open !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-ember-500 transition"
          >
            <X size={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            aria-label="Previous"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-ember-500 transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            aria-label="Next"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-ember-500 transition"
          >
            <ChevronRight size={22} />
          </button>

          <motion.div
            key={open}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[520px] aspect-[3/4] rounded-2xl overflow-hidden border border-gold-500/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] bg-black"
          >
            <Image
              src={cards[open].src}
              alt={`Registered member ${open + 1}`}
              fill
              sizes="520px"
              className="object-contain bg-cream-100"
              priority
            />
            <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-white/80 bg-black/50 px-2 py-1 rounded font-mono">
              {open + 1} / {cards.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
