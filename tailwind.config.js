/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      main: "#005eff",
      "main-light": "#6ea3ff",
      "main-dark": "#0430d7",
      "white-1": "#ffffff",
      "white-2": "#fbfafd",
      "grey-1": "#d0d5de",
      "grey-2": "#757a89",
      "grey-3": "#444c66",
      "black-1": "#22272e",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      keyframes: {
        floating: {
          "0%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-10px)" },
          "100%": { transform: "translatey(0px)" },
        },
        spin_words: {
          "10%": { transform: "translatey(-112%)" },
          "33%": { transform: "translatey(-100%)" },
          "43%": { transform: "translatey(-212%)" },
          "66%": { transform: "translatey(-200%)" },
          "76%": { transform: "translatey(-312%)" },
          "100%": { transform: "translatey(-300%)" },
        },
      },
      animation: {
        "floating-div": "floating 3s linear infinite",
        "word-carousel": "spin_words 6s infinite",
      },
    },
  },
  plugins: [],
};
