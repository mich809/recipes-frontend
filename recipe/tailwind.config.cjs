/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      boxShadow: {
      'recipe': '10px 10px 5px 0px rgba(0,0,0,1)',
    },fontFamily:{
      'roboto' : 'Roboto'
    }},
  },
  plugins: [],
}