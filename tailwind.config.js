/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [ 
      "./src/**/*.{js,jsx,ts,tsx}", 
    ],//määrittelee polut joista Tailwind etsii käytettyjä luokkia (className) tyylien luontiin,näistä tiedostoista Tailwind etsii tyylit
    theme: {
      extend: { 
        colors: {
          Pinkki: "#ff69b4", 
        }, // tällä laajennetaan Tailwindin oletusteemoja
      }, // tänne lisäsin omia värejä, myös fontteja voi lisätä
    },//tätä tarvitaan jos haluaa käyttää Tailwindin lisäosia, esim. lomakkeiden (forms) muotoiluun
    plugins: [],
     // tänne lisätään Tailwind-lisäosia
  }
  