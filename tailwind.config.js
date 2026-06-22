/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        robotNavy: "#050816",
        robotBlue: "#00D9FF",
        robotPurple: "#7C3AED",
        robotYellow: "#FFE600",
        robotGreen: "#00FFAE",
      },

      boxShadow: {
        neon: "0 0 25px rgba(0,217,255,0.35)",
      },

      backgroundImage: {
        grid: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
      },

      backgroundSize: {
        grid: "40px 40px",
      }
    },
  },
  plugins: [],
}