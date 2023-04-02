/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        poppins: ['Poppins'],
        noto: ['Noto Sans'],
      },
      boxShadow: {
        '3xl': '0px 2px 3px rgba(51, 51, 51, 0.2)',
        '2xl': '0px 2px 3px rgba(0, 49, 202, 0.2)',
      },
      colors: {
        b1: 'rgba(41, 98, 255, 0.1)',
      }
    },
  },
  plugins: [],
}

