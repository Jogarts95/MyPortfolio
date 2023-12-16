/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        before: "-10px 10px 0 #32325D",
        before_2: "-10px -10px 0 #32325D",
        after: "-10px 10px 0 #32325D",
        after_2: "-10px 10px 0 #048C8C",
      },
      colors: {
        primary: "#048C8C"
      }
    },
  },
  plugins: [],
}
