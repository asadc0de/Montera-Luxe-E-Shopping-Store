/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Antiqua: ['Antiqua', 'sans-serif'],
        Louis: ['Louis', 'sans-serif'],
        CreatoDisplay: ['CreatoDisplay', 'sans-serif']
      },
      colors: {
        'primaryBG': '#F9F8F7',
        'primaryText': '#18191B',
      },
    },
  },
  plugins: [],
}

