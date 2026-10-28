'use client';

import { motion } from 'framer-motion';
import { Compass, Target, Heart, Lightbulb, Users2, Handshake, Shield } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const values = [
  { icon: Handshake, title: 'Friendship & Respect', note: 'The core bond we return to.' },
  { icon: Shield, title: 'Trust & Integrity', note: 'What members rely on each other for.' },
  { icon: Lightbulb, title: 'Knowledge & Learning', note: 'Shared without gatekeeping.' },
  { icon: Users2, title: 'Collaboration', note: 'Across trades, cities, and generations.' },
  { icon: Compass, title: 'Leadership', note: 'In the room and in the field.' },
  { icon: Heart, title: 'Social Impact', note: 'Blood, education, relief — real work.' }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-cream-200/60 border-y border-cream-300">
      <div className="section-wrap">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                A batch that grew up.
                <br />
                A network that keeps growing.
              </h2>
              <p className="mt-6 text-ink-700 leading-relaxed max-w-xl">
                Risk Taker 2000 হলো SSC 2000 ব্যাচের বন্ধুদের নিয়ে গঠিত একটি কমিউনিটি —
                ডাক্তার, আইনজীবী, উদ্যোক্তা, ব্যাংকার, শিক্ষক, প্রযুক্তিবিদ এবং আরও অনেক পেশার মানুষ।
                Our bond isn&apos;t nostalgia — it&apos;s what we build with each other now.
              </p>

              <Stagger className="mt-8 grid sm:grid-cols-2 gap-4">
                <StaggerItem>
                  <PillarCard
                    id="vision"
                    icon={Target}
                    title="Our Vision"
                    body="A strong, active, values-driven network of SSC 2000 friends where every member grows personally, professionally and in service of society."
                  />
                </StaggerItem>
                <StaggerItem>
                  <PillarCard
                    id="mission"
                    icon={Compass}
                    title="Our Mission"
                    body="Strengthen friendship. Share knowledge and skill. Encourage business and career networking. Build the next generation through our experience."
                  />
                </StaggerItem>
              </Stagger>
            </div>
          </Reveal>

          <div>
            <Reveal direction="left">
              <div className="eyebrow">Our Values</div>
            </Reveal>
            <Stagger className="mt-6 grid sm:grid-cols-2 gap-3" stagger={0.06}>
              {values.map(({ icon: Icon, title, note }) => (
                <StaggerItem key={title}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                    className="card p-5 flex items-start gap-3 h-full"
                  >
                    <motion.div
                      whileHover={{ rotate: 12 }}
                      className="w-10 h-10 shrink-0 rounded-xl bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-700"
                    >
                      <Icon size={18} />
                    </motion.div>
                    <div>
                      <div className="font-display tracking-wider text-ink-900 text-sm uppercase">
                        {title}
                      </div>
                      <div className="text-xs text-ink-600 mt-1 leading-relaxed">
                        {note}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  id,
  icon: Icon,
  title,
  body
}: {
  id?: string;
  icon: typeof Target;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      id={id}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="card p-6 h-full scroll-mt-24"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-ember-500/10 border border-ember-400/40 flex items-center justify-center text-ember-600">
          <Icon size={18} />
        </div>
        <h3 className="font-display tracking-wider text-ink-900 text-lg uppercase">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-ink-600 leading-relaxed">{body}</p>
    </motion.div>
  );
}
