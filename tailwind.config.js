/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["components/**/*.{js,jsx,ts,tsx}", "app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
