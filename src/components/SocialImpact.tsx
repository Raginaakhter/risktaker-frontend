'use client';

import { motion } from 'framer-motion';
import { Droplet, Heart, GraduationCap, HandHelping, TreePine, Siren } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const initiatives = [
  {
    icon: Droplet,
    title: 'Blood Donation Network',
    body: 'A verified list of donors across Dhaka, Rajshahi and Noakhali, matched by group within minutes.'
  },
  {
    icon: GraduationCap,
    title: 'Education Support',
    body: 'School fees, exam prep and books for underprivileged students flagged by members.'
  },
  {
    icon: Heart,
    title: 'Health Awareness',
    body: 'Member doctors run free consultation camps and awareness sessions in schools and clubs.'
  },
  {
    icon: Siren,
    title: 'Disaster Relief',
    body: 'Pooled funding, verified distribution partners and member volunteers on the ground.'
  },
  {
    icon: HandHelping,
    title: 'Career Guidance',
    body: 'Workshops for college and university students on CV, interviews and career planning.'
  },
  {
    icon: TreePine,
    title: 'Environment & Community',
    body: 'Plantation drives and cleanup days around our schools and neighborhoods.'
  }
];

export default function SocialImpact() {
  return (
    <section id="impact" className="relative py-24 md:py-32 bg-cream-200/60 border-y border-cream-300">
      <div className="section-wrap">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <span className="eyebrow">Social Impact</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                Work that doesn&apos;t
                <br />
                need a camera.
              </h2>
            </div>
            <p className="text-ink-700 max-w-lg lg:text-right">
              Blood, education, relief, healthcare — a running list of what the batch
              shows up for. We publish the full breakdown once a year.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
          {initiatives.map(({ icon: Icon, title, body }) => (
            <StaggerItem key={title}>
              <motion.article
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="card p-6 group relative overflow-hidden h-full"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-ember-400/15 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.08 }}
                    className="w-11 h-11 rounded-xl bg-ember-500/10 border border-ember-400/40 flex items-center justify-center text-ember-600"
                  >
                    <Icon size={18} />
                  </motion.div>
                  <h3 className="mt-5 font-display text-lg text-ink-900 tracking-wide uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{body}</p>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="mt-10 card p-6 flex flex-wrap items-center justify-between gap-4 border-dashed border-ember-400/50 bg-ember-500/5"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Droplet className="text-ember-600 shrink-0" />
              </motion.div>
              <div>
                <div className="font-display text-base text-ink-900 tracking-wide uppercase">
                  Emergency Blood Request
                </div>
                <div className="text-xs text-ink-600 mt-1">
                  Patient consent required · requests verified before publication
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary !py-2.5"
            >
              Submit a Request
            </motion.button>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
