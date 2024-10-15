/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightRed: "#E6533C",
        blue: "#214d76",
      },
      fontFamily: {
        IranianSans: ["IranianSans", "IranianSans"],
      },
    },
  },
  plugins: [],
};
