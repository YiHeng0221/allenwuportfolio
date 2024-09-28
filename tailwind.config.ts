import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [{ pattern: /^animate-charging-/ }],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f9f9f9',
      },
      keyframes: {
        'charging-1': {
          '10%, 100%': { opacity: '1' },
        },
        'charging-2': {
          '0%, 20%': { opacity: '0' },
          '20%, 100%': { opacity: '1' },
        },
        'charging-3': {
          '0%, 30%': { opacity: '0' },
          '30%, 100%': { opacity: '1' },
        },
        'charging-4': {
          '0%, 40%': { opacity: '0' },
          '40%, 100%': { opacity: '1' },
        },
        'charging-5': {
          '0%, 50%': { opacity: '0' },
          '50%, 100%': { opacity: '1' },
        },
        'charging-6': {
          '0%, 60%': { opacity: '0' },
          '60%, 100%': { opacity: '1' },
        },
        'charging-7': {
          '0%, 70%': { opacity: '0' },
          '70%, 100%': { opacity: '1' },
        },
        'charging-8': {
          '0%, 80%': { opacity: '0' },
          '80%, 100%': { opacity: '1' },
        },
        'charging-9': {
          '0%, 90%': { opacity: '0' },
          '90%, 100%': { opacity: '1' },
        },
        'charging-10': {
          '0%,99%': { opacity: '0' },
          '99%, 100%': { opacity: '1' },
        },
      },
    },
    animation: {
      'charging-1': 'charging-1 5s step-end',
      'charging-2': 'charging-2 5s step-end',
      'charging-3': 'charging-3 5s step-end',
      'charging-4': 'charging-4 5s step-end',
      'charging-5': 'charging-5 5s step-end',
      'charging-6': 'charging-6 5s step-end',
      'charging-7': 'charging-7 5s step-end',
      'charging-8': 'charging-8 5s step-end',
      'charging-9': 'charging-9 5s step-end',
      'charging-10': 'charging-10 5s step-end',
    },
  },
  plugins: [],
}
export default config
