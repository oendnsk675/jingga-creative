/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      colors: {
        "rusty-red": "#CF3424",
        "maximum-yellow-red": "#F9BF40",
        "fandango": "#A63D8F",
        "deep-crise": "#D9367D"
      }
    },
    screens: {
      'xsm': {'max': '383px'},
      'smx': {'max': '530px'}
    }
  },
  plugins: [],
}
