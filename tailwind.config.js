/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        "35":"35px",
      },
      colors:{
        gray33:"#333",
      }
    },
  },
  plugins: [],
}

