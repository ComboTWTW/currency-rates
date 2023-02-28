/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
    "../src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbarBG": '#0a146e',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1080px',
      xl: '1440px',
    },
  },
  plugins: [],
}