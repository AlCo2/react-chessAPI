/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#242529',
        primarySecond:'#37383d',
        secondary:'#fff379',
      }
    },
  },
  plugins: [],
}