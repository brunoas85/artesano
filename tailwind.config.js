/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        artesano: {
          white: "#FFFFFF",
          celeste: "#0074C2",
          azul: "#273EA3",
          naranja: "#F7941D",
        },
      },
    },
  },
  plugins: [],
};
