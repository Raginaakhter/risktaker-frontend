import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Light theme surfaces (page / sections / cards)
        cream: {
          50: '#FFFFFF',
          100: '#FBF8F2',
          200: '#F5EFE4',
          300: '#E8DFCB',
          400: '#CFC2A3'
        },
        // Dark ink for text + headings on light bg
        ink: {
          900: '#121110',
          800: '#2A2520',
          700: '#4A413A',
          600: '#6D6358',
          500: '#938876',
          400: '#B8AC95'
        },
        gold: {
          300: '#F7D881',
          400: '#E9BE55',
          500: '#D4A017',
          600: '#B5860B',
          700: '#8A6508'
        },
        ember: {
          300: '#E88CB2',
          400: '#D8609A',
          500: '#C2185B',
          600: '#A41148',
          700: '#820B38'
        },
        jade: {
          300: '#9FD9C1',
          400: '#5EC2A1',
          500: '#2FA780',
          600: '#1F8464',
          700: '#145B46'
        },
        clay: {
          300: '#E8C7A6',
          400: '#D4A373',
          500: '#B98556',
          600: '#8E6239',
          700: '#5F4327'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        bangla: ['var(--font-bangla)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='7'/><feColorMatrix values='0 0 0 0 0.6 0 0 0 0 0.55 0 0 0 0 0.45 0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        'gold-gradient': 'linear-gradient(135deg, #F7D881 0%, #D4A017 50%, #8A6508 100%)',
        'ember-gradient': 'linear-gradient(135deg, #D8609A 0%, #C2185B 50%, #820B38 100%)'
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
