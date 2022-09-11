/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      '1/2': '50%',
      '1/4': '25%',
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
