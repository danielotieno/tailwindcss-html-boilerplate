const autoprefixer = require('autoprefixer');

module.exports = {
  purge: {
    mode: 'layers',
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cwc: {
          bgblue: '#1873E9',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
