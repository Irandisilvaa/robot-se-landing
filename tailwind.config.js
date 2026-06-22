/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        robotNavy: "#071A2F",
        robotYellow: "#FFD500",
        robotGreen: "#00C896",
      },
    },
  },
  plugins: [],
}