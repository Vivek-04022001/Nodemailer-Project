/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1AA7EC",
        secondary: "#106690",
        neutral :'#888E95'
      },
    },
  },
  plugins: [],
};
