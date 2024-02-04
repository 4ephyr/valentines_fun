/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5FEFD',
        secondary: '#e40814',
      },
      screens: {
        phone: { 'max' : '400px' },
      }
    },
  },
  plugins: [],
}