/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    
      colors: {
        brand_white: "#FFFFFF",
        brand_yellow: "#FFAC12",
        brand_black: "#000000",
        brand_grey: "#979797",
        prop_back: "#F5F5F5",
        footer_text: "#979797",
      },
      screens: {
        'xs': {'max': '30px'}, 
        'sm': {'max': '640px'},
        'md': {'max': '768px'},
        'lg': {'max': '1024px'},
        'xl': {'max': '1280px'},
        '2xl': {'max': '1536px'},
      },
      
    },
  },
  plugins: [],
}
