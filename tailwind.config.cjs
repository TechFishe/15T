/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'lightest-pink': '#eaac8b',
        'mid-pink': '#e56b6f',
        'light-purple': '#6d6875'
      },
      opacity: {
        '15': 0.15
      },
      keyframes: {
        'bounce-light': {
          '0%, 100%': { 
            transform: 'translateY(-5%)',
            animation: 'cubic-bezier(0.8, 0, 1, 1);'
          },
          '50%': {
            transform: 'translateY(0%)',
            animation: 'cubic-bezier(0.8, 0, 0.2, 1);'
          }
        },
        bounceSide: {
          '0%, 100%': {
            transform: 'translateX(-15%)',
            animation: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateX(0)',
            animation: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        'bounce-light': 'bounce-light 1s infinite',
        'bounce-side': 'bounceSide 1s infinite'
      }
    },
  },
  plugins: [],
}
