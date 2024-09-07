const { default: daisyui } = require("daisyui");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {
      fontFamily: {
        // Add your custom font family here
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave"],
  }
}




