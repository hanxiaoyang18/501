/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bghome": "linear-gradient(to top, hsl(var(--bgblack)/.1), hsl(var(--bgblack)/.4)),url('/image72.png')",
        //"bgchambre": "url('/3.png')",
        "bgchambre": "linear-gradient(to top, hsl(var(--bgred1)/0), hsl(var(--bgred1)/.4)),url('/3.png')",
        "bgchambre2": "linear-gradient(to top, hsl(var(--bgorange2)/.2), hsl(var(--bgorange2)/.3))",
        "bgc": "linear-gradient(to top, hsl(var(--bgred3)/.3), hsl(var(--bgred3)/.3))",
        "affiche": "url('/42.png')",
        "p1": "url('/27.png')",
        "p2": "url('/sac.png')",
        "p3": "url('/44.png')",
        "bgchambre3":"url('/29.png')",
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

        sectionPin: {
          '0%' :{ transform: 'translateX(-300px)', opacity: '0' }, 
         
          '100%' :{ transform: 'translateX(0px)', opacity: '1'}, 

        },

        affiche1: {
          '0%' :{ transform: 'translateX(0px)', opacity: '1' }, 
         
          '30%' :{ transform: 'translateX(100px)', opacity: '0.5'}, 

          '60%' :{ transform: 'translateX(0px)', opacity: '0.8'}, 
          '80%' :{ transform: 'translateX(5px)', opacity: '0.8'}, 
          '100%' :{ transform: 'translateX(0px)', opacity: '1'}, 


        },

        affiche2: {
          '0%' :{ transform: 'translateX(0px)', opacity: '1' }, 
         
          '30%' :{ transform: 'translateX(-100px)', opacity: '0.5'}, 

          '60%' :{ transform: 'translateX(0px)', opacity: '0.8'}, 

          '80%' :{ transform: 'translateX(-5px)', opacity: '0.8'}, 
          '100%' :{ transform: 'translateX(0px)', opacity: '1'}, 


        },

        point: {
          '0%' :{  opacity: '1' }, 
         
          '50%' :{  opacity: '0'}, 

          '100%' :{ opacity: '1'}, 


        },
      },
      animation:{

        bounce: 'bounce 1.5s cubic-bezier(0.8, 0, 1, 1) ',
        // bounce: 'bounce 1s ease-in-out infinite',
        ani: 'ani 0.5s cubic-bezier(0.8, 0, 1, 1) ',
        affiche1: 'affiche1 2s ease-in-out  ',
        affiche2: 'affiche2 2s ease-in-out  ',
        point: 'point 1.5s ease-in-out  ',


      },

      backgroundColor: {
        "bgorange": "var(--bgorange)",
        "bgorange2": "var(--bgorange2)",
        "bgorangef": "var(--bgorangef)",
        "bgred1": "var(--bgred1)",
        "bgred2": "var(--bgred2)",
        "bgred3": "var(--bgred3)",
        "bgred4": "var(--bgred4)",
        "bgblack": "var(--bgblack)",
      },

      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
        '9': '60px',
      },

      fontSize: {
        '95xl': ['12rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],

        '10xl': ['15rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],
        '11xl': ['16rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],

        '112xl': ['18rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],

        '115xl': ['20rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],

        '12xl': ['23rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],

        '13xl': ['25rem', {
          letterSpacing: '-0.01em',
          lineHeight: '15rem',
          fontWeight: '700',
        }],
      },

      width: {
        '128': '44rem',
      },
      scale: {
        '25': '0.35',
      },
    },
  },
  plugins: [],
}