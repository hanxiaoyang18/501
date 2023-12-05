/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bghome": "url('/image72.png')",
      },

      fontSize: {
        '10xl': ['15rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],
      },

    },
  },
  plugins: [],
}