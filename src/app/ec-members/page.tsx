'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Crown, Users2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { ecTerms, initialsOf, type ECMember } from '@/data/ec';

export default function ECMembersPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative pt-36 md:pt-44 pb-16 bg-cream-200/60 border-b border-cream-300">
        <div className="section-wrap">
          <Reveal>
            <a
              href="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-ink-600 hover:text-ember-600 transition"
            >
              <ArrowLeft size={14} /> Back to home
            </a>
            <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow">Executive Committee</span>
                <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                  The people
                  <br />
                  running the batch.
                </h1>
                <p className="mt-5 text-ink-700 max-w-xl leading-relaxed">
                  The Executive Committee of Risk Taker 2000 — the current term and
                  the one that came before. These are the members who hold the roles,
                  carry the work, and keep the batch moving.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink-500">
                <Users2 size={14} className="text-ember-500" />
                {ecTerms.reduce((n, t) => n + t.members.length, 0)} members ·{' '}
                {ecTerms.length} terms
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {ecTerms.map((term) => (
        <section
          key={term.slug}
          id={`ec-${term.slug}`}
          className="relative py-20 md:py-24 scroll-mt-24 border-b border-cream-300 last:border-b-0"
        >
          <div className="section-wrap">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded border ${
                        term.current
                          ? 'bg-ember-500/10 text-ember-600 border-ember-400/50'
                          : 'bg-cream-200 text-ink-600 border-cream-400'
                      }`}
                    >
                      {term.current ? 'Current' : 'Previous'}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-ink-500 font-mono">
                      {term.term}
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-ink-900">
                    {term.heading}
                  </h2>
                </div>
                <div className="text-xs uppercase tracking-widest text-ink-500">
                  {term.members.length} members
                </div>
              </div>
            </Reveal>

            <Stagger
              className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              stagger={0.04}
            >
              {term.members.map((m) => (
                <StaggerItem key={`${term.slug}-${m.name}-${m.role}`}>
                  <ECMemberCard member={m} highlight={term.current} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}

function ECMemberCard({
  member,
  highlight
}: {
  member: ECMember;
  highlight: boolean;
}) {
  const isPresident = /president$/i.test(member.role);
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 240, damping: 20 }}
      className={`card p-5 h-full relative overflow-hidden ${
        isPresident ? 'border-ember-400/60 bg-gradient-to-br from-ember-500/8 to-cream-100' : ''
      }`}
    >
      {isPresident && (
        <div className="absolute top-3 right-3 text-ember-500 z-10">
          <Crown size={14} />
        </div>
      )}
      <div className="flex items-start gap-4">
        <div
          className={`w-16 h-20 shrink-0 rounded-xl overflow-hidden relative flex items-center justify-center font-display text-lg tracking-wider border ${
            highlight
              ? 'bg-gradient-to-br from-ember-500/15 to-gold-500/10 border-ember-400/40 text-ember-700'
              : 'bg-cream-200 border-cream-400 text-ink-700'
          }`}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="64px"
              className="object-cover object-top"
            />
          ) : (
            initialsOf(member.name)
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-display tracking-wide text-ink-900 text-base leading-tight">
            {member.name}
          </div>
          <div className="mt-1 text-xs text-ember-600 leading-snug">{member.role}</div>
        </div>
      </div>
      {member.org && (
        <div className="mt-4 pt-4 border-t border-cream-300 text-xs text-ink-600 leading-relaxed">
          {member.org}
        </div>
      )}
    </motion.article>
  );
}
