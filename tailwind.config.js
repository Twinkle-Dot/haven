/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1024px",
        xl: "1366px",
      },

      fontFamily: {
        shrikh: "'Shrikhand', sans-serif",
        fred: "'Fredoka', sans-serif",
      },
      colors: {
        brandOrange: "#F08C00",
        pureWhite: "#EEEEEE",
        dirtyBlue: "#054D8F",
        cleanBlue: "#0029FF",
        teamRed: "#ED0000",
        funGreen: "#00CB5D",
        washedBlue: "#7192E7",
        pastelBlue: "#DAE7DD",
      },
    },
  },
  plugins: [],
};
