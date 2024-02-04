/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#e40814',
      },
      screens: {
        phone: { 'max' : '500px' },
      }
    },
  },
  plugins: [],
}