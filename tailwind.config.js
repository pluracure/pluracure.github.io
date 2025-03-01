module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pluracure-bg': '#eebca1',
        'pluracure-primary': '#d62b41',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 