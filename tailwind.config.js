/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./server/**/*.{html,js,templ}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
