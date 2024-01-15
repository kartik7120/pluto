/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Inter var', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}