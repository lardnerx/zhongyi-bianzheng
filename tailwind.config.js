/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f0e8',
          100: '#e8dccc',
          200: '#d4c4a4',
          300: '#c0a87c',
          400: '#a88c54',
          500: '#8B6F3A',
          600: '#6B5530',
          700: '#5D4037',
          800: '#4A3228',
          900: '#3A2518',
        },
        cinnabar: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#C62828',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#671e1e',
        },
        gold: {
          400: '#D4A76A',
          500: '#c9954f',
        },
        parchment: '#F5F0E8',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', '"Source Han Serif SC"', 'serif'],
        sans: ['"Noto Sans SC"', '"Source Han Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}