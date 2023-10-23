/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-90': 'linear-gradient(90.72deg, var(--tw-gradient-stops))',
        'gradient-45': 'linear-gradient(90.72deg, #cbfdb1 13.49%, #acbff1 50.67%, #efa7ec 70.79%, #cbfdb1 100.799%)',
        'gradient-10': 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)',
        'gradient-7':  'linear-gradient(0deg,#0d1117,rgba(13,17,23,0) 15%),linear-gradient(180deg,#0d1117,rgba(13,17,23,0) 15%),radial-gradient(circle farthest-side at 50% 0,rgba(13,17,23,0),#0d1117), url("/dark_theme.svg")',
        'gradient-18': 'linear-gradient(90deg,#4d4d4d 0,#fff 10%,#4d4d4d 20%)'
      },
     
    
      fontFamily: {
        'outfit': ['outfit', 'poppins'],
  
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '2': '200%',
        '16': '4rem',
        '3': '300%, 300%',
        '10': 'auto, auto, auto 64px',
      },

      keyframes: {
        moveImage: {
          '0%': { backgroundPosition: "0" },
          '100%': { backgroundPosition: "100%" },
        },
        gradientPan: {
          '0%': { backgroundPosition: "0" },
          '100%': { backgroundPosition: "200%" },

        },
        gradientPanInverse: {
          '0%': { backgroundPosition: "200%" },
          '100%': { backgroundPosition: "0" },

        },
        scroll: {
          '0%': { transform: "translateX(0%)" },
          '100%': { transform: "translateX(-100%)" },
        },

        bordergradient: {
          '0%': { backgroundPosition: "0%, 50%" },
          '50%': { backgroundPosition: "100%, 50%" },
          '100%': { backgroundPosition: "0%, 50%" },

        },
        shine: {
          '0%': { backgroundPosition: "0" },
          '60%': { backgroundPosition: "180px" },
          '100%': { backgroundPosition: "180px" },

        },

      }
      
    },
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'translate-z': (value) => ({
            '--tw-translate-z': value,
            transform: `translateZ(0) `,
          }), // this is actual CSS
        },
        { values: theme('translate'), supportsNegativeValues: true }
      )
    })
  ],
}

