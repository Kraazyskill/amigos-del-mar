import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          blue: '#084e90',
          deep: '#002766',
          light: '#e6f7ff',
          turquoise: '#40a9ff',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'light': '0 2px 8px rgba(0,0,0,0.1)',
        'medium': '0 4px 16px rgba(0,0,0,0.12)',
        'heavy': '0 8px 32px rgba(0,0,0,0.15)',
        'glow': '0 0 20px rgba(24, 144, 255, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config

