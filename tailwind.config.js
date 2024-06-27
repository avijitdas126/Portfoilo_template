/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      //adding background image
      // adding font family
      fontFamily:{
        poppins:["Poppins", "sans-serif"],//"Poppins", sans-serif
      },
      //adding color
      colors:{
        "blue":'#4581F6',
        "navy":"#002265",
        "black":"#07253C",
        "text-color":"#14279B"
      },

    },
  },
  plugins: [],
}

