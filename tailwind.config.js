 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "shujia-gray": "#43484C",
        "shujia-graylight": "#E4E5E9",
        "shujia-orange": "#D04B1E",
        "shujia-black": "#030504",
        "shujia-almostwhite": "#DAE1E9",
      },
    },
  },
  plugins: [],
}