/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          primary: "#f97316",
      },
      fontFamily: {
        sans: ["Poppings", "sans-serif"],
        handwriting: ["Merienda", "Cursive"],
      },
      container: {
        content: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}

