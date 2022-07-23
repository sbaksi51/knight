/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
            "50%": { transform: "translatey(10px)" },
            "100%": { transform: "translatey(0px)" },
          },
        },
        animation: {
          "floating-div": "floating 2.5s linear infinite",
        },
      },
    },
  },
  plugins: [],
};
