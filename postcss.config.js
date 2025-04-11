module.exports = {
    plugins: {
      tailwindcss: {}, // tällä Tailwind otetaan käyttöön PostCSS:n kautta
      autoprefixer: {}, // tämä lisää automaattisesti tarvittavat selainten "vendor-prefixit". Näitä prefixeja
      //tarvitaan, koska  selaimet eivät aina tue CSS-ominaisuuksia samalla tavalla. Ne ovat selainten omia versioita tietyistä ominaisuuksista.
      //nimenomainen autoprefixer on hyvä, sillä se tukee kaikkia selaimia ilman että tarvitsee eritellä.
    },
  }
  