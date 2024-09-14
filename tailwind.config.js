/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
        'Manrope': ['Manrope', 'sans-serif'],
        'Playwrite': [ "Playwrite CU", 'cursive'],
    },
    extend: {
      colors: {
        primary: {
          50: '#f4f6ff',
          100: '#e6eaff',
          200: '#c9cdff',
          300: '#a3a9ff',
          400: '#a537fd',
          500: '#863dff',
          600: '#7f00ff',
          700: '#6832e3',
          800: '#601ef9',
          900: '#34187e',
        },
        accent: '#8236fd',
        blue: '#3a00e7',
        background: '#060a27',
        surface: '#f5f6fc',
        volt: '#ceff00',
        text: {
          primary: '#060a27',
          secondary: '#9a9ab9',
        },
      },
    },
  },
  plugins: [],
}
