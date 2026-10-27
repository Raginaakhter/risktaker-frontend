'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, School, Briefcase, Mail, Phone, User } from 'lucide-react';
import Reveal from './motion/Reveal';
import { Stagger, StaggerItem } from './motion/Stagger';

const categories = ['General Member', 'Professional', 'Business Owner', 'Volunteer', 'Mentor', 'Contributor'];

export default function JoinUs() {
  const [cat, setCat] = useState(categories[0]);

  return (
    <section id="join" className="relative py-24 md:py-32 bg-cream-200/60 border-y border-cream-300">
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Join the Community</span>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-ink-900">
                Risk Taker 2000
                <br />
                <span className="text-shine">starts with you.</span>
              </h2>
              <p className="mt-5 text-ink-700 leading-relaxed">
                Membership is free for anyone from the SSC 2000 batch. We only collect what we
                need — profile visibility and contact sharing are controlled by you.
              </p>

              <Stagger className="mt-8 space-y-3" stagger={0.07}>
                {[
                  'Verified SSC 2000 batch only.',
                  'Your phone and email stay hidden by default.',
                  'Admin reviews every registration within 48 hours.',
                  'Opt in to features one at a time — Mentor, Business, Donor.'
                ].map((p) => (
                  <StaggerItem key={p}>
                    <div className="flex items-start gap-3 text-sm text-ink-700">
                      <motion.span
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-ember-500/15 border border-ember-500/40 flex items-center justify-center text-ember-600"
                      >
                        <Check size={12} />
                      </motion.span>
                      {p}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <motion.form
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className="card p-7 md:p-8 bg-gradient-to-br from-white to-cream-100 border-ember-500/20"
            >
            <div className="eyebrow !tracking-[0.22em] !text-[10px]">Membership Form</div>
            <h3 className="mt-3 font-display text-2xl text-ink-900 tracking-wide uppercase">
              Register as a Member
            </h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <Field icon={User} label="Full Name" placeholder="Your full name" />
              <Field icon={School} label="SSC Year" placeholder="2000" defaultValue="2000" readOnly />
              <Field icon={School} label="School" placeholder="Your school name" />
              <Field icon={Briefcase} label="Profession" placeholder="e.g. Pediatrician, Banker" />
              <Field icon={Mail} label="Email" placeholder="you@email.com" type="email" />
              <Field icon={Phone} label="Mobile" placeholder="01XXXXXXXXX" type="tel" />
            </div>

            <div className="mt-5">
              <div className="text-[10px] uppercase tracking-widest text-ink-500 mb-2">Member Category</div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <motion.button
                    key={c}
                    type="button"
                    onClick={() => setCat(c)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`text-xs uppercase tracking-widest px-3 py-1.5 rounded-full border transition ${
                      cat === c
                        ? 'bg-ember-gradient text-white border-transparent'
                        : 'border-cream-400 bg-cream-300text-ink-700 hover:border-ember-400 hover:text-ember-600'
                    }`}
                  >
                    {c}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[10px] uppercase tracking-widest text-ink-500 mb-2">
                About you (optional)
              </div>
              <textarea
                rows={3}
                placeholder="Tell us about your work, interests, how you want to contribute…"
                className="w-full rounded-xl bg-cream-300border border-cream-300 px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-ember-500 transition resize-none"
              />
            </div>

            <label className="mt-5 flex items-start gap-3 text-xs text-ink-600">
              <input type="checkbox" className="mt-0.5 accent-ember-500" defaultChecked />
              <span>
                I accept the Community Guidelines and Privacy Policy. My contact details stay
                private until I choose to share them.
              </span>
            </label>

              <motion.button
                type="submit"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary mt-6 w-full"
              >
                Submit Registration <ArrowRight size={16} />
              </motion.button>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon: Icon,
  label,
  placeholder,
  type = 'text',
  defaultValue,
  readOnly
}: {
  icon: typeof User;
  label: string;
  placeholder: string;
  type?: string;
  defaultValue?: string;
  readOnly?: boolean;
}) {
  return (
    <label className="block">
      <div className="text-[10px] uppercase tracking-widest text-ink-500 mb-1.5">{label}</div>
      <div className="relative">
        <Icon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-500" />
        <input
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          readOnly={readOnly}
          className="w-full h-11 pl-9 pr-3 rounded-lg bg-cream-300border border-cream-300 text-sm text-ink-900 placeholder:text-ink-400 focus:border-ember-500 transition read-only:text-ink-500"
        />
      </div>
    </label>
  );
}
