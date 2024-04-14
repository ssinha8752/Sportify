/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        darkbg:"#1e293b"
      }
    },
  },
  plugins: [],
}

