import Image from 'next/image';
import { Facebook, Youtube, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10 bg-cream-200 border-t border-cream-300">
      <div className="section-wrap">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
          <div>
            <Image
              src="/logo.png"
              alt="Risk Taker 2000"
              width={260}
              height={140}
              className="h-16 w-auto drop-shadow-[0_4px_14px_rgba(74,65,58,0.2)]"
            />
            <p className="mt-5 text-sm text-ink-700 leading-relaxed max-w-sm">
              Beyond Friendship. Building Connections. Creating Opportunities.
              Shaping the Future.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
                { icon: Linkedin, label: 'LinkedIn' }
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-cream-400 bg-cream-300flex items-center justify-center text-ink-700 hover:text-ember-600 hover:border-ember-500 transition"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="eyebrow !tracking-[0.22em] !text-[10px]">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {['Difference', 'About', 'Members', 'Business', 'Podcast', 'Events', 'Knowledge', 'Impact'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-ink-700 hover:text-ember-600 transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow !tracking-[0.22em] !text-[10px]">Policies</div>
            <ul className="mt-4 space-y-2 text-sm">
              {['Privacy Policy', 'Terms of Use', 'Community Guidelines', 'Photo & Video Consent', 'Disclaimer'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-ink-700 hover:text-ember-600 transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow !tracking-[0.22em] !text-[10px]">Reach the Admin</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-ember-600 mt-0.5 shrink-0" />
                <span className="text-ink-700 select-all">info@risktaker2000.org</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-ember-600 mt-0.5 shrink-0" />
                <span className="text-ink-700">Dhaka, Bangladesh</span>
              </li>
            </ul>
            <a href="#join" className="btn-ghost mt-5 !text-xs">Become a Member →</a>
          </div>
        </div>

        <div className="divider-glow mt-14" />

        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <div>© {new Date().getFullYear()} Risk Taker 2000. All rights reserved.</div>
          <div className="font-display tracking-[0.3em] text-ember-600 uppercase">
            Connect · Learn · Grow · Collaborate · Contribute
          </div>
        </div>
      </div>
    </footer>
  );
}
