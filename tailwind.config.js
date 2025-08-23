/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#B22222",
      },
      fontFamily: {
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
