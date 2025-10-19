/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#00FFF0",
        violet: "#A855F7",
        darkbg: "#0E0E10",
        slatepanel: "#1C1C22",
      },
    },
  },
  plugins: [],
};
