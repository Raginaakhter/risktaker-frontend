'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const nav = [
  { label: 'Difference', href: '#difference' },
  { label: 'About', href: '#about' },
  { label: 'Members', href: '#members' },
  { label: 'Business', href: '#business' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Events', href: '#events' },
  { label: 'Knowledge', href: '#knowledge' },
  { label: 'Impact', href: '#impact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-cream-300 shadow-[0_4px_24px_-16px_rgba(74,65,58,0.25)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-wrap flex items-center justify-between py-3 md:py-4">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center group"
        >
          <Image
            src="/logo.png"
            alt="Risk Taker 2000"
            width={240}
            height={128}
            priority
            className="h-11 md:h-14 w-auto drop-shadow-[0_4px_12px_rgba(74,65,58,0.2)] group-hover:drop-shadow-[0_6px_18px_rgba(212,160,23,0.35)] transition"
          />
        </motion.a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n, i) => (
            <motion.a
              key={n.href}
              href={n.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-ink-700 hover:text-ember-600 transition relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ember-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="#join"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-xs"
          >
            Join Us
          </motion.a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-md border border-cream-400 bg-white text-ink-800"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-cream-300 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="section-wrap flex flex-col py-4 gap-1">
              {nav.map((n, i) => (
                <motion.a
                  key={n.href}
                  href={n.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-sm text-ink-800 hover:text-ember-600 border-b border-cream-300"
                >
                  {n.label}
                </motion.a>
              ))}
              <a
                href="#join"
                className="btn-primary mt-4 w-full"
                onClick={() => setOpen(false)}
              >
                Join the Community
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
