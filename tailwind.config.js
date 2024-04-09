/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  purge:[
    './dist/*.html',
     "./**/*.{js,jsx,ts,tsx,vue}",
  ],
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

