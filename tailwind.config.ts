// Consumed by Tailwind v4 via the `@config` directive in
// `src/styles/global.css`. Theme tokens live here so the design system
// stays one screen-full and easy to scan.
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        // Warm off-white background, terracotta accent, deep navy ink.
        ink: {
          DEFAULT: '#1B2A41', // deep navy, primary text in light mode
          soft: '#2E3D55',
          dim: '#5A6678',
        },
        paper: {
          DEFAULT: '#F7F1E8', // warm off-white background
          warm: '#FAF5EC',
          deep: '#EFE6D6',
        },
        terracotta: {
          DEFAULT: '#D2691E',
          50: '#FBEFE3',
          100: '#F6DCBE',
          200: '#EFC08A',
          300: '#E7A258',
          400: '#DC8A36',
          500: '#D2691E',
          600: '#B0541A',
          700: '#874015',
          800: '#5F2D0F',
          900: '#3A1B09',
        },
        // Cool counter-accent — dusty sage, after Klee's washes.
        sage: {
          200: '#D8DCC5',
          300: '#B6BD9C',
          400: '#94A079',
          500: '#788662',
          600: '#5B6849',
          700: '#3F4A33',
        },
        // Soft warm accent — muted blush, for paper-cut layering.
        blush: {
          200: '#F2D6CC',
          300: '#E6B5A6',
          400: '#D89B8C',
          500: '#C27D6E',
          600: '#9E5F52',
          700: '#763F35',
        },
        night: {
          DEFAULT: '#10182A', // dark mode background
          soft: '#161F36',
          deep: '#0B1322',
        },
        cream: {
          DEFAULT: '#F2E9D8', // dark mode foreground / paper-in-the-dark
          soft: '#E5DCC8',
        },
      },
      fontFamily: {
        // Soria (Fontshare) used everywhere — display serif applied
        // across headings, body, and the mono-styled date/credit chips.
        // Note: Soria ships in one weight (400) with no true italic, so
        // font-weight and italic are browser-synthesized.
        display: ['Soria', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Soria', 'ui-serif', 'Georgia', 'serif'],
        mono: ['Soria', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        page: '72rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(27,42,65,0.04), 0 8px 24px rgba(27,42,65,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
