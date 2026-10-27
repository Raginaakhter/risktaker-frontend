'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, Filter, Lock, Mail, Phone, MapPin, Briefcase, Droplet, X } from 'lucide-react';
import { members, categories, type Member, type MemberCategory } from '@/data/members';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const categoryAccent: Record<MemberCategory, string> = {
  Doctor: 'from-ember-500/15 to-ember-500/5 border-ember-400/40 text-ember-700',
  Banker: 'from-gold-500/18 to-gold-500/5 border-gold-500/40 text-gold-700',
  Business: 'from-jade-500/15 to-jade-500/5 border-jade-500/40 text-jade-700',
  Engineer: 'from-sky-500/15 to-sky-500/5 border-sky-500/40 text-sky-700',
  Lawyer: 'from-purple-500/15 to-purple-500/5 border-purple-500/40 text-purple-700',
  Educator: 'from-rose-500/15 to-rose-500/5 border-rose-500/40 text-rose-700',
  Other: 'from-cream-400/30 to-cream-400/10 border-cream-400 text-ink-700'
};

export default function MembersDirectory() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<MemberCategory | 'All'>('All');
  const [open, setOpen] = useState<Member | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => {
      if (category !== 'All' && m.category !== category) return false;
      if (!q) return true;
      return [m.name, m.nameBn, m.specialty, m.organization, m.location]
        .filter(Boolean)
        .some((v) => (v as string).toLowerCase().includes(q));
    });
  }, [query, category]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: members.length };
    for (const m of members) c[m.category] = (c[m.category] ?? 0) + 1;
    return c;
  }, []);

  return (
    <section id="members" className="relative py-24 md:py-32">
      <div className="section-wrap">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Members Directory</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                The people
                <br />
                behind the batch.
              </h2>
              <p className="mt-4 text-ink-700 max-w-xl">
                Browse professionals from across the SSC 2000 batch. Contact details are
                private — visible to the admin team and shared only with the member&apos;s consent.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink-500">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-jade-500"
              />
              Live directory • {members.length} members
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-4">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-500" />
              <input
                type="text"
                placeholder="Search by name, profession, organization or city…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full h-12 pl-11 pr-10 rounded-full bg-cream-300border border-cream-300 text-ink-900 placeholder:text-ink-400 text-sm focus:border-ember-500 transition shadow-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 hover:text-ink-800 p-1"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <FilterPill
                label="All"
                count={counts.All}
                active={category === 'All'}
                onClick={() => setCategory('All')}
              />
              {categories.map((c) => (
                <FilterPill
                  key={c}
                  label={c}
                  count={counts[c] ?? 0}
                  active={category === c}
                  onClick={() => setCategory(c)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="card p-12 text-center text-ink-600"
              >
                <Filter className="mx-auto mb-3 text-ember-500" />
                No members match that filter. Try a different search.
              </motion.div>
            ) : (
              <motion.div
                key={`list-${category}-${query}`}
                layout
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                <AnimatePresence>
                  {filtered.map((m, i) => (
                    <motion.div
                      key={m.id}
                      layout
                      initial={{ opacity: 0, y: 24, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.4), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <MemberCard member={m} onOpen={() => setOpen(m)} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {open && <MemberModal member={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}

function FilterPill({
  label,
  count,
  active,
  onClick
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 px-4 h-9 rounded-full text-xs uppercase tracking-widest font-medium transition ${
        active
          ? 'bg-ember-gradient text-white shadow-[0_6px_18px_-6px_rgba(194,24,91,0.5)]'
          : 'border border-cream-400 bg-cream-300text-ink-700 hover:text-ember-600 hover:border-ember-400'
      }`}
    >
      {label}
      <span
        className={`inline-flex items-center justify-center min-w-[22px] h-5 px-1 rounded-full text-[10px] font-mono ${
          active ? 'bg-white/25 text-white' : 'bg-cream-200 text-ink-600'
        }`}
      >
        {count}
      </span>
    </motion.button>
  );
}

function MemberCard({ member, onOpen }: { member: Member; onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover={{ y: -6, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 240, damping: 18 }}
      className="card p-5 text-left group w-full h-full"
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${categoryAccent[member.category]} border flex items-center justify-center font-display text-lg tracking-wider`}
        >
          {member.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-display tracking-wide text-ink-900 text-base truncate">
            {member.name}
          </div>
          {member.nameBn && (
            <div className="font-bangla text-xs text-ink-600 truncate">{member.nameBn}</div>
          )}
          <div className="mt-1 text-xs text-ember-600 truncate">{member.specialty}</div>
        </div>
      </div>

      <div className="mt-4 space-y-1.5 text-xs text-ink-600">
        <div className="flex items-center gap-2 truncate">
          <Briefcase size={12} className="text-ink-500 shrink-0" />
          <span className="truncate">{member.organization}</span>
        </div>
        {member.location && (
          <div className="flex items-center gap-2 truncate">
            <MapPin size={12} className="text-ink-500 shrink-0" />
            <span className="truncate">{member.location}</span>
          </div>
        )}
        {member.bloodGroup && (
          <div className="flex items-center gap-2">
            <Droplet size={12} className="text-ember-600 shrink-0" />
            <span className="text-ember-600 font-semibold">{member.bloodGroup}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-between pt-4 border-t border-cream-300">
        <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded border bg-gradient-to-br ${categoryAccent[member.category]}`}>
          {member.category}
        </span>
        <span className="text-[10px] uppercase tracking-widest text-ink-500 group-hover:text-ember-600 transition">
          View →
        </span>
      </div>
    </motion.button>
  );
}

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6 bg-ink-900/40 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg bg-cream-300border border-cream-300 rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative p-6 bg-gradient-to-br from-cream-200 via-cream-100 to-white">
          <motion.button
            whileHover={{ rotate: 90, scale: 1.1 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-300border border-cream-400 flex items-center justify-center text-ink-600 hover:text-ink-900 shadow-sm"
          >
            <X size={14} />
          </motion.button>
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, rotate: -8 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 220, damping: 15 }}
              className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${categoryAccent[member.category]} border flex items-center justify-center font-display text-2xl tracking-wider`}
            >
              {member.initials}
            </motion.div>
            <div>
              <div className="font-display tracking-wide text-ink-900 text-xl">{member.name}</div>
              {member.nameBn && (
                <div className="font-bangla text-sm text-ink-600">{member.nameBn}</div>
              )}
              <span className={`mt-2 inline-block text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border bg-gradient-to-br ${categoryAccent[member.category]}`}>
                {member.category} • SSC 2000
              </span>
            </div>
          </div>
        </div>

        <Stagger className="p-6 space-y-4" stagger={0.06}>
          <StaggerItem>
            <Row icon={Briefcase} label="Profession">
              {member.specialty}
            </Row>
          </StaggerItem>
          <StaggerItem>
            <Row icon={MapPin} label="Organization">
              {member.organization}
              {member.location && <span className="text-ink-500"> · {member.location}</span>}
            </Row>
          </StaggerItem>
          {member.bloodGroup && (
            <StaggerItem>
              <Row icon={Droplet} label="Blood Group">
                <span className="text-ember-600 font-semibold">{member.bloodGroup}</span>
              </Row>
            </StaggerItem>
          )}

          <StaggerItem>
            <div className="pt-2">
              <div className="text-[10px] uppercase tracking-widest text-ink-500 mb-2 flex items-center gap-2">
                <Lock size={10} /> Contact Information — Private
              </div>
              <div className="rounded-xl border border-dashed border-ember-400/50 bg-ember-500/5 p-4">
                <div className="flex items-center gap-3">
                  <Lock size={16} className="text-ember-600 shrink-0" />
                  <div className="text-sm text-ink-700 leading-relaxed">
                    Phone and email are hidden. To reach this member, send a request
                    through the admin team — we never share numbers without consent.
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-ink-400 border border-cream-300 bg-cream-300rounded-lg px-3 py-2">
                    <Phone size={12} /> ••• ••• ••••
                  </div>
                  <div className="flex items-center gap-2 text-ink-400 border border-cream-300 bg-cream-300rounded-lg px-3 py-2">
                    <Mail size={12} /> hidden@rt2000
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex gap-2 pt-2">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex-1 !py-2.5"
              >
                Request Contact
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
                className="btn-ghost !py-2.5"
              >
                Close
              </motion.button>
            </div>
          </StaggerItem>
        </Stagger>
      </motion.div>
    </motion.div>
  );
}

function Row({
  icon: Icon,
  label,
  children
}: {
  icon: typeof Briefcase;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 shrink-0 rounded-lg bg-cream-100 border border-cream-300 flex items-center justify-center text-ink-600">
        <Icon size={14} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-ink-500">{label}</div>
        <div className="text-sm text-ink-900 mt-0.5">{children}</div>
      </div>
    </div>
  );
}
