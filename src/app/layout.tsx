import type { Metadata } from 'next';
import { Oswald, Inter, Hind_Siliguri, JetBrains_Mono } from 'next/font/google';
import ScrollProgress from '@/components/ScrollProgress';
import './globals.css';

const display = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const body = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap'
});

const bangla = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bangla',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Risk Taker 2000 — Beyond Friendship, Towards a Better Future',
  description:
    'Risk Taker 2000 is a digital community and professional networking platform for the SSC 2000 batch. Connect, Learn, Grow, Collaborate, Contribute.',
  keywords: [
    'Risk Taker 2000',
    'SSC 2000',
    'Bangladesh',
    'Alumni',
    'Networking',
    'Community'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${bangla.variable} ${mono.variable}`}
    >
      <body className="min-h-screen">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
