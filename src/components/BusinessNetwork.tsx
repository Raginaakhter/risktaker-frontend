'use client';

import { motion } from 'framer-motion';
import { Building2, Scale, Stethoscope, Code, Megaphone, Factory, Globe, GraduationCap, Users } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const industries = [
  { icon: Stethoscope, name: 'Medical Services', note: 'Specialists across hospitals and clinics' },
  { icon: Building2, name: 'Banking & Finance', note: 'Branches across Dhaka, Rajshahi, Noakhali and more' },
  { icon: Scale, name: 'Legal Services', note: 'Advocates and legal consultants' },
  { icon: Code, name: 'IT & Software', note: 'Engineering, product, data' },
  { icon: Megaphone, name: 'Marketing & Branding', note: 'Agencies and in-house teams' },
  { icon: Factory, name: 'Garments & Leather', note: 'Factories, buyers, supply chain' },
  { icon: Globe, name: 'Import & Export', note: 'Trade and logistics' },
  { icon: GraduationCap, name: 'Education & Training', note: 'Schools, universities, trainers' }
];

const opportunities = [
  'Business Partnership',
  'Supplier & Distributor Search',
  'Professional Consultancy',
  'Project Collaboration',
  'Recruitment & Career Opportunities',
  'Training & Mentoring',
  'Industry Knowledge Sharing'
];

export default function BusinessNetwork() {
  return (
    <section id="business" className="relative py-24 md:py-32 bg-cream-200/60 border-y border-cream-300">
      <div className="section-wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Business & Professional Network</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                A directory with
                <br />
                <span className="text-shine">intent to collaborate.</span>
              </h2>
            </div>
            <p className="text-ink-700 max-w-md">
              Members list their businesses and services so collaboration doesn&apos;t stop at
              a WhatsApp forward. Vetted entries, no spam.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4" stagger={0.05}>
          {industries.map(({ icon: Icon, name, note }) => (
            <StaggerItem key={name}>
              <motion.div
                whileHover={{ y: -6, scale: 1.025 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                className="card p-5 group h-full"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-11 h-11 rounded-xl bg-ember-500/10 border border-ember-400/40 flex items-center justify-center text-ember-600 group-hover:bg-ember-500/15 transition"
                >
                  <Icon size={18} />
                </motion.div>
                <div className="mt-4 font-display tracking-wide text-ink-900 text-base uppercase">
                  {name}
                </div>
                <div className="mt-1 text-xs text-ink-600 leading-relaxed">{note}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <Reveal direction="right">
            <div className="card p-8 bg-gradient-to-br from-cream-100 to-white">
              <div className="flex items-center gap-3">
                <Users className="text-ember-600" />
                <h3 className="font-display text-2xl text-ink-900 tracking-wide uppercase">
                  Collaboration Opportunities
                </h3>
              </div>
              <p className="mt-3 text-sm text-ink-600">
                Each listing is reviewed before it goes live. Members can propose any of
                these — the admin team matches them with the right people.
              </p>
              <Stagger className="mt-6 grid sm:grid-cols-2 gap-2" stagger={0.04}>
                {opportunities.map((o) => (
                  <StaggerItem key={o}>
                    <div className="flex items-center gap-3 py-3 px-4 rounded-lg bg-cream-100 border border-cream-300 text-sm text-ink-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                      {o}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.15}>
            <div className="card p-8 bg-cream-100 border-dashed">
              <div className="eyebrow">Listing Rules</div>
              <ul className="mt-4 space-y-3 text-sm text-ink-700 leading-relaxed">
                {[
                  'Only members can list a business or service.',
                  'Every entry is reviewed by the admin team before it goes live.',
                  'No misleading claims, no inflated promises, no unapproved promotional posts.',
                  'Edits and takedowns are honored within 48 hours.',
                  'This is a collaboration board — not an ad board.'
                ].map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-ember-500" />
                    {r}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#join"
                whileHover={{ x: 4 }}
                className="btn-ghost mt-6 !text-xs"
              >
                Submit a listing →
              </motion.a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
