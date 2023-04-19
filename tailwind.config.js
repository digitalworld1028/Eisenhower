/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'IBM-Plex-Serif': ['"IBM Plex Serif"'],
        "Work-Sans": ['"Work Sans"'],
      }
    },
  },
  plugins: [],
}

