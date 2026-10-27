import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Dark surfaces (page / sections / cards) — true black family
        cream: {
          50: '#1F1A14',
          100: '#0A0806',
          200: '#120F0A',
          300: '#1E1912',
          400: '#2B2419'
        },
        // Light text on dark backgrounds
        ink: {
          900: '#FFF8E6',
          800: '#F6ECD2',
          700: '#E8DAB4',
          600: '#C9B98E',
          500: '#9A8B64',
          400: '#6E6244'
        },
        gold: {
          300: '#FFE39C',
          400: '#F4C85A',
          500: '#D4A017',
          600: '#B5860B',
          700: '#8A6508'
        },
        // Orange — replaces pink/ember to match the RT2000 flame marks
        ember: {
          300: '#FFC9A0',
          400: '#FFA366',
          500: '#FF7A1A',
          600: '#E25C00',
          700: '#B04700'
        },
        // Deeper orange substitutes for the old jade/clay accents
        jade: {
          300: '#FFD1A6',
          400: '#FFB06A',
          500: '#FF8A2E',
          600: '#D86908',
          700: '#8F4500'
        },
        clay: {
          300: '#FFE0A1',
          400: '#F4C85A',
          500: '#D4A017',
          600: '#8A6508',
          700: '#5A4206'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        bangla: ['var(--font-bangla)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='7'/><feColorMatrix values='0 0 0 0 0.9 0 0 0 0 0.75 0 0 0 0 0.4 0 0 0 0.06 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        'gold-gradient': 'linear-gradient(135deg, #FFE39C 0%, #D4A017 50%, #8A6508 100%)',
        'ember-gradient': 'linear-gradient(135deg, #FFA366 0%, #FF7A1A 50%, #B04700 100%)'
      },
      animation: {
        'spin-slow': 'spin 24s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
