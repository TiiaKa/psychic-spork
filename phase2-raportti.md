# Phase 2 - Raportti

## Toteutetut ominaisuudet
- Käyttäjänimi tallentuu localStorageen ja näkyy yläpalkissa
- Teeman vaihto (vaalea/tumma tila) toimii ja säilyy localStoragessa
- Tehtävien lisääminen, muokkaaminen ja poistaminen toimii
- Tehtävät säilyvät selaimen uudelleenkäynnistyksen jälkeen (localStorage)
- Näkymät:
  - Etusivu tehtävälistalle (home)
  - Asetukset (settings)
  - Tägien hallinta (tags)
- Sovelluksessa on virheidenhallintaa "ErrorBoundary"-komponentin avulla
- Sovellus käyttää React Routeria navigointiin
- Front ja back eriytetty kansioihin
- .env-tiedostot ympäristömuuttujille
- Tilanhallinta hookeilla Reactissa

## Toiminnallisuudet
- Lisää, poista, päivitä ja listaa tehtäviä
- Käyttäjänimi localStoragessa
- Väriteeman vaihto (vaalea/tumma)
- Reset-painike tyhjentää tietokannan

## Koodi
- Koodi jaettu komponentteihin
- Kommenteilla selitetty toimintoja
- Lähdekoodissa noudatettu selkeää tyyliä

## Teknologiat

- React + React Router
- Tailwind CSS
- Express
- PostgreSQL, Render hostaa (frontend + backend)
- LocalStorage nopeaan säilytykseen
- Git ja GitHub versiohallintaan

## Backend-yhteys
- "REACT_APP_BACKEND_URL" määritelty .env-tiedostossa
- reset-toiminto tekee POST-pyynnön osoitteeseen /api/tehtavat/reset
- Backend on Renderissä (kuten myös frontend, itselle selkein)
- REST API reitit:
  - GET /api/tehtavat – Hakee tehtävät
  - POST /api/tehtavat – Lisää tehtävän
  - PUT /api/tehtavat/:id – Päivittää tehtävän (ei toimi oikein Dark Modessa)
  - DELETE /api/tehtavat/:id – Poistaa tehtävän (ei toimi oikein Dark Modessa)
  - POST /api/tehtavat/reset – Poistaa kaikki tehtävät (ei toimi oikein tällä hetkellä)
  - GET /api/init-db – Luo taulun, jos sitä ei ole

## Frontend
- Komponentit:
  - TaskList: näyttää tehtävät ja niiden tilan
  - AddTaskForm: lomake tehtävän lisäämiseen
  - Settings: asetukset (väriteema, käyttäjänimi, resetointi)
  - ErrorBoundary:
  - Header:
  - Home: 
  - Tags:
  - TaskItem:

## Database
 - PostgreSQL-taulu "tehtavat", jossa:
  - id (primary key)
  - nimi (tehtävän nimi)
  - tehty (boolean)


## Testaus ja virheenhallinta, Ongelmia ja rajoitteita
- Yksinkertainen virheenkäsittely backendissä (try/catch)
- Alert-viestit käyttöliittymässä
- ErrorBoundary-komponentti virheenhallintaan
- Sovellusta testannut ulkopuolinen, joka 
- Sovellus ei toiminut täysin virheettömästi Renderissä. Sovellus toimi täydellisesti ennen Renderiin lisäämistä, mutta koska tiedostoja täytyi muokata ja hienosäätää useaan otteeseen, aina jokin toiminnallisuus kärsi
- Backendin ja frontendin URL-osoitteiden kanssa oli aluksi sekaannuksia
- Kaikkia ominaisuuksia ei saatu viimeisteltyä. Tällä hetkellä sovelluksen resetoinnissa ja Dark Mode -tilassa "koti"-sivua käytettäessä pieniä ongelmia

## Käyttöliittymä ja vuorovaikutus
- Käyttöliittymä toimii mobiilissa ja selaimessa
- Visuaalisesti pastellivärimaailma
- React-hookien avulla välitön vuorovaikutus


## Mahdollisia parannuksia
- Tehtävien synkronointi backendin kanssa
- Käyttäjätunnistautuminen ja eri käyttäjien näkymät
- Responsiivisuuden parantaminen mobiilissa
- Tägien hallinnan jatkokehitys
- Asetukset-sivun jatkokehitys, nyt siellä niin vähän asioita että periaatteessa voisi olla vain yhden sivun sovellus

## Puuttumaan jäi
Alkuperäisestä suunnitelmasta jäi toistaiseksi puuttumaan
- Pilvitallennukseen ei käytetty Firebasea
- Tehtävien jakamisominaisuus jäi jaettavaan linkkiin
- Push-ilmoitukset jäi puuttumaan
- Väriteeman varsinainen muokkausosuus, valintana vain vaalea tai tumma tila

## Yhteenveto
- Toinen vaihe saatu valmiiksi pääosin suunnitelmien mukaisesti. Sovellus toimii Reactilla, ja siinä on perusominaisuudet kuten tehtävien hallinta, asetukset ja routerin käyttö. Pientä viimeistelyä jäi uupumaan, mutta suurimmat osat toimivat. Projektin aikana opin lisää Reactista ja uutta tilanhallinnasta sekä ympäristön konfiguroinnista (mm. .env ja deploy Renderiin).