import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: ['media', '[data-theme="dark"]'],
  theme: {
    // Mobile-first: the default screen targets 360-375px viewports.
    // Breakpoints are progressive enhancements only.
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1180px', // doc §4.2: container max = 1180px
      },
    },
    extend: {
      colors: {
        ink: {
          900: 'var(--ink-900)',
          700: 'var(--ink-700)',
          500: 'var(--ink-500)',
          300: 'var(--ink-300)',
          100: 'var(--ink-100)',
        },
        paper: 'var(--paper)',
        snow: 'var(--snow)',
        accent: {
          primary: 'var(--accent-primary)',
          secondary: 'var(--accent-secondary)',
          tertiary: 'var(--accent-tertiary)',
          quat: 'var(--accent-quat)',
          violet: 'var(--accent-violet)',
          coral: 'var(--accent-coral)',
          teal: 'var(--accent-teal)',
          gold: 'var(--accent-gold)',
        },
        ok: 'var(--ok)',
        warn: 'var(--warn)',
        err: 'var(--err)',
        info: 'var(--info)',
      },
      fontFamily: {
        display: ['"Newsreader"', ...defaultTheme.fontFamily.serif],
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Fluid type per 03-design-system.md §3.2
        'step--1': 'var(--step--1)',
        'step-0': 'var(--step-0)',
        'step-1': 'var(--step-1)',
        'step-2': 'var(--step-2)',
        'step-3': 'var(--step-3)',
        'step-4': 'var(--step-4)',
        'step-5': 'var(--step-5)',
      },
      spacing: {
        // T-shirt sizes per §4.1
        'sp-1': '4px',
        'sp-2': '8px',
        'sp-3': '12px',
        'sp-4': '16px',
        'sp-5': '24px',
        'sp-6': '32px',
        'sp-7': '40px',
        'sp-8': '48px',
        'sp-9': '64px',
        'sp-10': '96px',
        'sp-11': '128px',
        'sp-12': '160px',
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '4px',
        md: '10px',
        lg: '16px',
        pill: '999px',
      },
      maxWidth: {
        prose: '72ch',
      },
      transitionTimingFunction: {
        // §7 motion: gentle, scientific
        soft: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        soft: '200ms',
      },
    },
  },
  plugins: [],
};
