'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Counter from './motion/Counter';

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

const pillars = [
  { label: 'Connect', color: 'text-ember-600' },
  { label: 'Learn', color: 'text-gold-700' },
  { label: 'Grow', color: 'text-jade-700' },
  { label: 'Collaborate', color: 'text-ember-600' },
  { label: 'Contribute', color: 'text-gold-700' }
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <ThreeScene />

      <div className="section-wrap relative py-28 md:py-36">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            <motion.span variants={itemVariants} className="eyebrow">
              SSC 2000 — Alumni Platform
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[0.95] tracking-tight text-ink-900"
            >
              Risk Takers.
              <br />
              Builders.
              <br />
              <span className="text-shine">Difference Makers.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base md:text-lg text-ink-700 leading-relaxed"
            >
              A friendship that grew into a network. SSC 2000 ব্যাচের বন্ধুদের একটি সম্মিলিত
              প্ল্যাটফর্ম — যেখানে জ্ঞান, পেশাগত সহযোগিতা, নেতৃত্ব আর সামাজিক কল্যাণ এক ছাতার নিচে।
              At RT 2000, friendship, learning, and leadership grow together.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-9 flex flex-wrap gap-3">
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
                className="btn-ghost"
              >
                Join the Community
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {pillars.map((p) => (
                <div key={p.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                  <span className={`font-display tracking-[0.25em] text-sm uppercase ${p.color}`}>
                    {p.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              <Stat value={60} suffix="+" label="Members" />
              <Stat value={12} label="Industries" />
              <Stat value={25} suffix="+" label="Doctors" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-[340px] sm:w-[440px] md:w-[520px] animate-float">
              <div
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[75%] aspect-square rounded-full bg-ember-400/25 blur-3xl animate-pulse-glow pointer-events-none"
                style={{ top: '-5%' }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[82%] aspect-square rounded-full border border-gold-500/25 animate-spin-slow pointer-events-none"
                style={{ top: '-2%' }}
              />
              <div
                className="absolute left-1/2 -translate-x-1/2 w-[70%] aspect-square rounded-full border border-ember-500/20 pointer-events-none"
                style={{ top: '4%', animation: 'spin 36s linear infinite reverse' }}
              />
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 180, damping: 15 }}
                className="relative w-full flex items-center justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Risk Taker 2000"
                  width={620}
                  height={330}
                  priority
                  className="relative w-full h-auto drop-shadow-[0_12px_40px_rgba(74,65,58,0.35)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 text-ink-500 text-xs uppercase tracking-widest"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Zap size={14} className="text-ember-500" />
        </motion.div>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div className="border-l-2 border-ember-500/50 pl-4">
      <Counter
        value={value}
        suffix={suffix}
        className="font-display text-3xl md:text-4xl text-ink-900 tracking-tight block"
      />
      <div className="text-[11px] uppercase tracking-[0.25em] text-ink-500 mt-1">{label}</div>
    </div>
  );
}
