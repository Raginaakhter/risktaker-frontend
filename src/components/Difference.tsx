'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Sprout, UsersRound, Compass } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

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
            'radial-gradient(ellipse at center, transparent 20%, rgba(251,248,242,0.65) 65%, rgba(251,248,242,0.95) 100%)'
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

        <Reveal delay={0.2}>
          <div className="mt-14 card p-6 md:p-7 flex flex-wrap items-center justify-between gap-5 bg-gradient-to-r from-jade-500/8 via-cream-100 to-gold-500/8 border-jade-500/30">
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
