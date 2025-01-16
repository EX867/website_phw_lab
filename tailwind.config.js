/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yonsei: "rgba(0, 49, 116, 1)",
        link: "rgba(0, 115, 224, 1)",
        black: "#000000",
        white: "#FFFFFF",
        gray: "rgba(48, 48, 48, 1)"
      },
      fontSize: {
        smaller: "0.9em",
        small: "0.95em",
        base: "1em"
      }
    },
  },
  plugins: [],
}