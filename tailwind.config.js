/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("open-menu", ".open-menu&");
    }),
    plugin(function({ addVariant }) {
      addVariant("border", ".border&");
    })
  ],
}

