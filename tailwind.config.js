/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bghome": "linear-gradient(to top, hsl(var(--bgblack)/0), hsl(var(--bgblack)/.4)),url('/image72.png')",
        //"bgchambre": "url('/3.png')",
        "bgchambre": "linear-gradient(to top, hsl(var(--bgred1)/0), hsl(var(--bgred1)/.3)),url('/3.png')",
      },

      keyframes: {
        bounce: {
          // '0%, 100%': { transform: 'rotate(-3deg)' },
          // '50%': { transform: 'rotate(3deg)' },
          //'0%, 100%' :{ transform: 'translateY(0px)', opacity: '1'}, 
          '0%' :{ transform: 'translateY(-200px)', opacity: '0'}, 
          '50%': { transform: 'translateY(-100px)' , opacity: '0.5'},
          '100%' :{ transform: 'translateY(0px)', opacity: '1'}, 
          // 'animation-timing-function': cubic-bezier(0.8, 0, 1, 1);
       
        },
        ani: {
          '0%' :{ transform: 'translateX(-300px)', }, 
         
          '100%' :{ transform: 'translateX(0px)', }, 

        },
      },
      animation:{

        bounce: 'bounce 1.5s cubic-bezier(0.8, 0, 1, 1) ',
        // bounce: 'bounce 1s ease-in-out infinite',
        ani: 'ani 0.5s cubic-bezier(0.8, 0, 1, 1) ',

      },

      backgroundColor: {
        "bgorange": "var(--bgorange)",
        "bgred1": "var(--bgred1)",
        "bgred2": "var(--bgred2)",
        "bgblack": "var(--bgblack)",
      
        
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '9': '40px',
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