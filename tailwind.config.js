/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        robotNavy: '#0A192F', // Azul escuro inspirado na sua logo
        robotYellow: '#FFC107', // Amarelo da engrenagem
        robotGreen: '#2E7D32', // Verde da logo
      }
    },
  },
  plugins: [],
}