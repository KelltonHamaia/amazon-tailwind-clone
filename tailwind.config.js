/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        'Arial':'Arial',
      },
      colors: {
        'darkBlue-500': '#485769',
        'darkBlue-600': '#37475A',
        'darkBlue-700': '#232F3E',
        'darkBlue-900': '#191E26',
        'darkBlue-950': '#131A22',
        'gold-100': '#FEBD69',
        'gold-200': '#FAA63A',
        'orange-650': '#E47911',
        'yellow-350': '#F0C14B'
      },
      spacing: {
        '7': '1.75rem',
        '75px': '75px',
        '210px': '210px',
      }
    },
  },
  plugins: [],
}
