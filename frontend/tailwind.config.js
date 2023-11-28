/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      "primary": "#986041",
          
      "secondary": "#D08B2E",
               
      "accent": "#73a100",
               
      "neutral": "#4A342A",
               
      "base-100": "#FFE8D8",
               
      "info": "#0071ff",
               
      "success": "#5df173",
               
      "warning": "#f46b00",
               
      "error": "#c90a2d",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
