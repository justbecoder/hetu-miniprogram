/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      colors: {
        brandBlue: colors.blue[500],
        brandRed: colors.red[500],
      },
    },
  },
  plugins: [],
};
