/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        '3': '1 0 0'
      }
    },
    fontFamily: {
      'spaceGrotesk': ['spaceGrotesk'],
    },
  },
  plugins: [],
  screens:{
    'sm': '640px',
    'lg':	'1024px',
    'md': '1280px'
  }
}

