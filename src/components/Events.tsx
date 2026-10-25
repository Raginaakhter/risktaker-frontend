'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, Users } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const upcoming = [
  {
    date: '2026-11-28',
    day: '28',
    month: 'Nov',
    title: 'Leadership Summit 2026 — Let\'s Fly for the Future',
    venue: 'Krishibid Institution Bangladesh, Dhaka',
    tag: 'Flagship',
    tagColor: 'bg-ember-500/15 border-ember-500/40 text-ember-700',
    attendees: 180
  },
  {
    date: '2026-12-05',
    day: '05',
    month: 'Dec',
    title: 'RT Live — AI, Doctors and Diagnosis Tools',
    venue: 'Online (YouTube Live)',
    tag: 'Live',
    tagColor: 'bg-gold-500/15 border-gold-500/40 text-gold-700',
    attendees: 420
  },
  {
    date: '2026-12-15',
    day: '15',
    month: 'Dec',
    title: 'Winter Blood Donation Drive',
    venue: 'Dhanmondi + Uttara (two camps)',
    tag: 'Impact',
    tagColor: 'bg-jade-500/15 border-jade-500/40 text-jade-700',
    attendees: 75
  },
  {
    date: '2027-01-10',
    day: '10',
    month: 'Jan',
    title: 'Business Networking Breakfast',
    venue: 'Pan Pacific Sonargaon',
    tag: 'Networking',
    tagColor: 'bg-sky-500/15 border-sky-500/40 text-sky-700',
    attendees: 60
  }
];

const past = [
  { name: 'Fruit Festival 2026', count: '220+ attended' },
  { name: 'Mother\'s Day Special', count: '150+ attended' },
  { name: 'Reunion Night', count: '340+ attended' },
  { name: 'AI Workshop for Members', count: '80+ attended' }
];

export default function Events() {
  return (
    <section id="events" className="relative py-24 md:py-32 bg-cream-200/60 border-y border-cream-300">
      <div className="section-wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Events & Activities</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                The calendar
                <br />
                everyone keeps.
              </h2>
            </div>
            <motion.a href="#" whileHover={{ x: 4 }} className="btn-ghost !text-xs">
              Full calendar <ChevronRight size={14} />
            </motion.a>
          </div>
        </Reveal>

        <Stagger className="mt-10 grid sm:grid-cols-3 gap-3" stagger={0.08}>
          {[
            { month: 'Nov', title: 'Dhanmondi Meetup', note: 'Rotating venue, 8pm' },
            { month: 'Dec', title: 'Gulshan Breakfast', note: 'Business-focused, 9am' },
            { month: 'Jan', title: 'Uttara Family Day', note: 'Spouses & kids welcome' }
          ].map((m) => (
            <StaggerItem key={m.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                className="card p-4 flex items-center gap-4 border-jade-500/30 bg-jade-500/5 h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-jade-500/15 border border-jade-500/40 flex items-center justify-center text-jade-700 font-display text-xs tracking-widest uppercase">
                  {m.month}
                </div>
                <div className="min-w-0">
                  <div className="font-display text-sm tracking-wide text-ink-900 uppercase truncate">
                    Monthly Meetup — {m.title}
                  </div>
                  <div className="text-[11px] text-ink-600 mt-0.5 truncate">{m.note}</div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
          <Stagger className="space-y-3" stagger={0.08}>
            {upcoming.map((e) => (
              <StaggerItem key={e.title}>
                <motion.article
                  whileHover={{ x: 6, scale: 1.005 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                  className="card p-5 flex gap-5 items-center group"
                >
                  <div className="w-20 h-20 shrink-0 rounded-xl bg-cream-100 border border-cream-300 flex flex-col items-center justify-center text-center">
                    <div className="font-display text-3xl text-ember-600 leading-none tabular-nums">
                      {e.day}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-ink-500 mt-1">
                      {e.month}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border ${e.tagColor}`}
                      >
                        {e.tag}
                      </span>
                      <span className="text-[11px] text-ink-500 flex items-center gap-1">
                        <Users size={10} /> {e.attendees} registered
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-base md:text-lg text-ink-900 tracking-wide leading-snug">
                      {e.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1 text-xs text-ink-600">
                      <MapPin size={11} /> {e.venue}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="shrink-0 w-10 h-10 rounded-full border border-cream-400 flex items-center justify-center text-ink-600 group-hover:border-ember-500 group-hover:text-ember-600 transition"
                  >
                    <ChevronRight size={16} />
                  </motion.div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal direction="left" delay={0.15}>
            <aside className="card p-7 bg-gradient-to-br from-gold-500/8 to-cream-100">
              <div className="flex items-center gap-3">
                <Calendar className="text-gold-700" />
                <h3 className="font-display text-xl text-ink-900 tracking-wide uppercase">
                  Event Categories
                </h3>
              </div>
              <div className="mt-5 space-y-2">
                {[
                  'Leadership & Networking',
                  'Learning & Development',
                  'RT Live & Podcast',
                  'Social & Community',
                  'Family & Friendship'
                ].map((c) => (
                  <motion.div
                    key={c}
                    whileHover={{ x: 4, backgroundColor: '#FBF8F2' }}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg border border-cream-300 bg-white text-sm text-ink-800 cursor-pointer"
                  >
                    <span>{c}</span>
                    <ChevronRight size={14} className="text-ink-500" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 pt-6 border-t border-cream-300">
                <div className="eyebrow !tracking-[0.22em] !text-[10px]">Past, in short</div>
                <ul className="mt-3 space-y-2 text-xs text-ink-600">
                  {past.map((p) => (
                    <li key={p.name} className="flex justify-between tabular-nums">
                      <span>{p.name}</span>
                      <span className="text-ember-600">{p.count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
