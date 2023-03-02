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
        "navbarMobile": '#1e293b',
        "cardBG": '#e7e9ec',
        "bTextColor": '#141e37',
        "covertBG": '#0071eb',
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