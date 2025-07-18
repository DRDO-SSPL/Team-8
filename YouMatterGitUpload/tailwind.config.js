/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode
        'light-bg': '#FDFCF9',
        'light-primary': '#A78BFA',
        // Dark mode  
        'dark-bg': '#1E1B2E',
        'dark-text': '#EDE9FE',
        'dark-primary': '#D8B4FE',
        // Chat bubbles
        'user-light': '#FEF3C7',
        'user-dark': '#FBCFE8',
        'bot-light': '#D1FAE5', 
        'bot-dark': '#6EE7B7',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};