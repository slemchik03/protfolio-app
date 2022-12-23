/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "fontFamily": {
        "jost": ['Jost', 'sans-serif']
      },
      gridTemplateColumns: {
        "projects": 'repeat(3, minmax(0, 500px))'
      }
    },
  },
  plugins: [],

}
