'use client';

import { motion } from 'framer-motion';
import { BookOpen, Brain, LineChart, Mic2, Rocket, Shield, Sparkles, TrendingUp } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const topics = [
  { icon: Brain, name: 'Artificial Intelligence', count: 14 },
  { icon: Rocket, name: 'Entrepreneurship', count: 22 },
  { icon: Shield, name: 'Leadership', count: 18 },
  { icon: LineChart, name: 'Financial Literacy', count: 11 },
  { icon: TrendingUp, name: 'Career Development', count: 27 },
  { icon: Mic2, name: 'Communication Skills', count: 9 },
  { icon: BookOpen, name: 'Book Reviews', count: 15 },
  { icon: Sparkles, name: 'Personal Branding', count: 8 }
];

const featured = [
  {
    kind: 'Essay',
    title: 'What AI changes for a mid-career banker, and what it doesn\'t',
    author: 'Shahin Reza',
    role: 'Agrani Bank',
    read: '7 min read'
  },
  {
    kind: 'Case Study',
    title: 'From one chamber to three: a pediatrician\'s practice playbook',
    author: 'Dr. Nazmul Islam',
    role: 'Pediatrics',
    read: '12 min read'
  },
  {
    kind: 'Field Notes',
    title: 'Managing a branch after a natural disaster — a week-by-week log',
    author: 'Gopal Chandra Ghosh',
    role: 'Prime Bank, Tongi',
    read: '9 min read'
  }
];

export default function KnowledgeHub() {
  return (
    <section id="knowledge" className="relative py-24 md:py-32">
      <div className="section-wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Knowledge Hub</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                A place to put down
                <br />
                what you&apos;ve learned.
              </h2>
            </div>
            <p className="text-ink-700 max-w-md">
              Members write, record and share — essays, case notes, workshop recaps,
              book reviews. The editorial team reviews everything before it goes up.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <Stagger className="grid grid-cols-2 gap-3" stagger={0.05}>
            {topics.map(({ icon: Icon, name, count }) => (
              <StaggerItem key={name}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                  className="card p-4 group h-full"
                >
                  <div className="flex items-center justify-between">
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/40 text-gold-700 flex items-center justify-center"
                    >
                      <Icon size={16} />
                    </motion.div>
                    <span className="font-mono text-xs tabular-nums text-ink-500">{count}</span>
                  </div>
                  <div className="mt-3 font-display text-sm tracking-wide text-ink-900 uppercase">
                    {name}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="space-y-4" stagger={0.1}>
            {featured.map((a) => (
              <StaggerItem key={a.title}>
                <motion.article
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  className="card p-6 group"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-ember-700 bg-ember-500/12 border border-ember-500/40 px-2 py-0.5 rounded">
                      {a.kind}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-ink-500">
                      {a.read}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl md:text-2xl text-ink-900 tracking-tight leading-snug group-hover:text-ember-600 transition">
                    {a.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm text-ink-600">
                    <span className="w-6 h-6 rounded-full bg-gold-gradient text-ink-900 text-[10px] font-display flex items-center justify-center">
                      {a.author.split(' ').map((s) => s[0]).slice(0, 2).join('')}
                    </span>
                    <span className="text-ember-600 font-semibold">{a.author}</span>
                    <span className="text-ink-400">·</span>
                    <span className="text-ink-600 text-xs">{a.role}</span>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
