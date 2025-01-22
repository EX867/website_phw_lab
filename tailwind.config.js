/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_black: "rgb(59, 57, 56)",
        text_gray: "rgb(78, 78, 78)",
        yonsei: "rgba(0, 49, 116, 1)",
        link: "rgba(0, 115, 224, 1)",
        black: "#000000",
        white: "#FFFFFF",
        gray: "rgb(181, 178, 173)"
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