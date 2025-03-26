/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          150: "#F27C84",
          250: "#8E69FB",
        },
        green: {
          150: "#16AA3E",
          250: "#8E69FB",
        },
        gray: {
          150: "#457DD9",
          250: "#457DD9",
          350: "#2C3333"
        }
      }
    },
  },
  plugins: [],
}

