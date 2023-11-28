/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      sans: ['Fredoka', 'sans-serif'],
      serif: ['Inter', 'serif'],
    },
    extend: {
    }
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
