/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
      display: ['"Area Extended"', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'monospace'],
    },
    extend: {
      colors: {
        'brand-primary': '#03303A',
        'brand-light': '#F4F7F6',
        'brand-accent': '#E2A855',
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '6.5': '1.625rem', // 26px
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
};