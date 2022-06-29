/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#FF7A00',
        'dark': '#202020',
      },
      fontFamily: {
        'rockinsoda': ['"Rockinsoda"', 'regular'],
        'poppins': ['"Poppins"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
