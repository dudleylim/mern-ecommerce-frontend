/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Lato', 'Oswald', 'Arial', 'ui-sans-serif'],
        'body': ['Montserrat', 'Roboto', 'ui-sans-serif']
      },
      gridTemplateColumns: {
        'main': '[aside-left-start] .2fr [aside-left-end content-start] 1fr [content-end aside-right-start] .2fr [aside-right-end]',
      }
    },
  },
  plugins: [],
}

