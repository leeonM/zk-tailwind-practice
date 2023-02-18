/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zk-blue': '#1d2039',
        'zk-darkblue': '#4e529a',
        'zk-purple': '#8f8cf8',
        'zk-pink': '#d46b94',
      }
    },
  },
  plugins: [],
}
