/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/img-1.jpg')",
      },
      colors: {
        brand1: "#ffb545",
        brand2: "#00c46a",
        dark0: "#242a2e",
        dark1: "#2d3439",
        dark2: "#42484d",
        light1: "#aaa",
        light2: "#ececec",
        light3: "#d6dee0",
      },
    },
  },
  plugins: [],
};
