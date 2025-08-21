/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        code: {
          bg: '#1e1e1e',
          text: '#d4d4d4',
          keyword: '#569cd6',
          string: '#ce9178',
          comment: '#6a9955',
        }
      }
    },
  },
  plugins: [],
};