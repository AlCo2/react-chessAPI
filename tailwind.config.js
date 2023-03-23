/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: 'Poppins',
      },
      colors:{
        primary:'#242529',
        primarySecond:'#37383d',
        secondary:'#fff379',
        third:'#dcdcdc',
        orange:"#fca311",
      }
    },
  },
  plugins: [],
}