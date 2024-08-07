/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        ssm: "320px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
        xxl: "1440px",
      },
      width: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1280px",
        xxl: "1440px",
      },
      letterSpacing: {
        ".2em": "3.2px",
      },
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        "Josefin-Sans": ["Josefin Sans", "sans-serif"],
      },
      animation: {
        "grow-menu": "grow-menu .8s linear forwards",
      },
      keyframes: {
        "grow-menu": {
          "0%": { width: 0, height: 0 },
          "100%": { width: "100%", height: "100%" },
        },
      },
    },
  },
  plugins: [],
};
