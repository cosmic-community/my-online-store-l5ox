/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FFF8F0',
          ivory: '#FFFDF7',
          gold: '#C8956C',
          'gold-light': '#D4A574',
          'gold-dark': '#B07D5A',
          amber: '#E8A96B',
          charcoal: '#1A1A1A',
          'charcoal-light': '#2A2A2A',
          dark: '#111111',
          muted: '#6B6B6B',
          'muted-light': '#9A9A9A',
          warm: '#3A2E28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(200, 149, 108, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(200, 149, 108, 0.25)' },
        },
      },
    },
  },
  plugins: [],
}