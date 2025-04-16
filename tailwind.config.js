/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // dark mode -tyyliluokka
    content: [ 
      "./src/**/*.{js,jsx,ts,tsx}", 
    ],//määrittelee polut joista Tailwind etsii käytettyjä luokkia (className) tyylien luontiin,näistä tiedostoista Tailwind etsii tyylit
    theme: {
      extend: { 
        fontFamily: {
          lobster: ['Lobster', 'cursive'],
        },
        colors: {
          Pinkki: "#ff69b4",
          PastelliKeltainen: "#fff9c4",
          PastelliLila: "#e6e6fa",
          PastelliVihrea: "#d0f0c0",
          PastelliVaaleanpunainen: "#ffe4e1",
          PastelliSininen: "#add8e6",
          PastelliVioletti: "#dda0dd",
        }, // tällä laajennetaan Tailwindin oletusteemoja
      }, // tänne lisäsin omia värejä, myös fontteja voi lisätä
    },//tätä tarvitaan jos haluaa käyttää Tailwindin lisäosia, esim. lomakkeiden (forms) muotoiluun
    plugins: [],
     // tänne lisätään Tailwind-lisäosia
  }
  