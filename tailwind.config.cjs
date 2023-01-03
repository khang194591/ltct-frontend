/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", "sans-serif"],
        serif: ["Be Vietnam Pro", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
