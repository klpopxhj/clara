module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
