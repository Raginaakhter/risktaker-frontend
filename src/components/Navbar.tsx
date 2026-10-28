'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

type NavLeaf = { label: string; href: string; description?: string };
type NavItem = NavLeaf & { submenu?: NavLeaf[] };

const nav: NavItem[] = [
  { label: 'Difference', href: '#difference' },
  {
    label: 'About',
    href: '#about',
    submenu: [
      { label: 'Our Mission', href: '#mission', description: 'What we commit to as a batch.' },
      { label: 'Our Vision', href: '#vision', description: 'Where RT 2000 is heading.' }
    ]
  },
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
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-xl border-b border-gold-500/30 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.6)]'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur-sm'
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
            className="h-12 md:h-16 w-auto drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_6px_18px_rgba(255,122,26,0.55)] transition"
          />
        </motion.a>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n, i) => {
            const hasSub = !!n.submenu?.length;
            const isOpen = openMenu === n.href;
            return (
              <div
                key={n.href}
                className="relative"
                onMouseEnter={() => {
                  cancelClose();
                  if (hasSub) setOpenMenu(n.href);
                }}
                onMouseLeave={hasSub ? scheduleClose : undefined}
              >
                <motion.a
                  href={n.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1 text-sm font-semibold text-white hover:text-gold-400 transition group drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
                  aria-haspopup={hasSub || undefined}
                  aria-expanded={hasSub ? isOpen : undefined}
                >
                  <span className="relative">
                    {n.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all group-hover:w-full" />
                  </span>
                  {hasSub && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </motion.a>

                {hasSub && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72"
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="rounded-2xl border border-gold-500/30 bg-black/95 backdrop-blur-xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                          {n.submenu!.map((s) => (
                            <a
                              key={s.href}
                              href={s.href}
                              onClick={() => setOpenMenu(null)}
                              className="block px-5 py-4 border-b border-gold-500/10 last:border-b-0 hover:bg-gold-500/10 transition group/item"
                            >
                              <div className="text-sm font-semibold text-white group-hover/item:text-gold-400 transition">
                                {s.label}
                              </div>
                              {s.description && (
                                <div className="mt-1 text-[11px] text-white/60 leading-snug">
                                  {s.description}
                                </div>
                              )}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
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
            className="lg:hidden p-2 rounded-md border border-gold-500/40 bg-black/60 backdrop-blur-md text-white"
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
            className="lg:hidden border-t border-gold-500/30 bg-black/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="section-wrap flex flex-col py-4 gap-1">
              {nav.map((n, i) => {
                const hasSub = !!n.submenu?.length;
                const isExpanded = mobileExpanded === n.href;
                return (
                  <motion.div
                    key={n.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="border-b border-gold-500/20"
                  >
                    <div className="flex items-center">
                      <a
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="flex-1 py-3 px-2 text-sm text-white hover:text-gold-400"
                      >
                        {n.label}
                      </a>
                      {hasSub && (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : n.href)}
                          className="p-2 text-white/70 hover:text-gold-400"
                          aria-label={`Toggle ${n.label} submenu`}
                          aria-expanded={isExpanded}
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                      )}
                    </div>
                    {hasSub && (
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-2 pl-4 border-l-2 border-gold-500/40 ml-2">
                              {n.submenu!.map((s) => (
                                <a
                                  key={s.href}
                                  href={s.href}
                                  onClick={() => {
                                    setOpen(false);
                                    setMobileExpanded(null);
                                  }}
                                  className="block py-2 px-2 text-xs text-white/80 hover:text-gold-400"
                                >
                                  {s.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                );
              })}
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
