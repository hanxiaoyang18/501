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
        "bgchambre": "url('/3.png')"
        //"bgchambre": "linear-gradient(to top, hsl(var(--bgred1)/.75), hsl(var(--bgred1)/.5)),url('/3.png')",
      },

      backgroundColor: {
        "bgorange": "var(--bgorange)",
        "bgred1": "var(--bgred1)",
        "bgred2": "var(--bgred2)",
      },

      fontSize: {
        '10xl': ['15rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],
        '11xl': ['24rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],
      },

    },
  },
  plugins: [],
}