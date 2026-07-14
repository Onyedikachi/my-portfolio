/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#090b12',
          850: '#0d0f1a',
          800: '#121523',
          700: '#191d2f',
          600: '#262c46',
        },
        mist: {
          100: '#f4f6fb',
          300: '#c4cadb',
          400: '#9aa2ba',
          500: '#767f9c',
          600: '#565e77',
        },
        brand: {
          indigo: '#6366f1',
          violet: '#a855f7',
          cyan: '#22d3ee',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        aurora:
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99,102,241,0.35), transparent), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(34,211,238,0.15), transparent)',
        'brand-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 55%, #22d3ee 100%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,0.35)',
        'glow-brand': '0 0 40px rgba(99,102,241,0.25)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
