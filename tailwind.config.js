/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-musician": "#FFA732",
      },
      boxShadow: {
        small:
          "inset 0 4px 6px hsla(0 100 100 / 0.1), 0px 1px 3px hsla(0 0 0 / 0.24), 0px 1px 2px hsla(0 0 0 / 0.24)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".card": {
          "@apply bg-white p-6 rounded-2xl shadow-small hover:shadow-xl transition-shadow":
            {},
        },
      });
    },
  ],
};
