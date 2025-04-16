
# psychic-spork
Web-kehitys projekti

Projektin määrittely ja suunnittelu
------------------------------------
**<p style="color: blue;">Interaktiivinen To-Do -sovellus</p>**
Halusin tehdä sovelluksen mikä olisi itselle oikeasti hyödyllinen ja jolle olisi käyttöä.  
Tässä sovelluksessa käyttäjä voisi lisätä ja poistaa tehtäviä sekä merkitä niitä tehdyiksi.  
 Lisäksi käyttäjä voisi kategorisoida tehtäviä lisäämällä niihin tunnisteita, esimerkkeinä työ, koulu, koti, kauppa, salitreeni jne.
Väriteeman muokkaus ja deadline-muistutukset olisi hyvä lisä sovellukseen.

**Käyttäjäkunta ja käyttäjäpersoonat**  

Sovelluksen käyttäjäkuntana olisi pääasiassa nuoret aikuiset (18-40v), mutta sovellus sopii tietysti kenelle tahansa joka haluaa organisoida arkeaan.  
 Sovellus on ensisijaisesti henkilökohtaiseen käyttöön, mutta sen voisi myöhemmin laajentaa myös tiimikäyttöön tai jaettavaksi vaikka puolisolle.

**Käyttäjäpersoonia:**  

Laura, 28 projektipäällikkö  

Haluaa organisoida työtehtävänsä tehokkaasti.
Tarvitsee deadline-muistutuksia ja prioriteettimerkintöjä.
Käyttää sovellusta läppärillä ja puhelimella.
Janne, 35, koti-isä  

Haluaa hallita kauppaostoksia ja kotitöitä.
Jakaa tehtävälistan puolisonsa kanssa.
Käyttää sovellusta mobiilissa.
Emma, 22, opiskelija  

Tekee kurssitehtäviä ja muistiinpanoja deadlineista.
Käyttää tunnisteita (esim. koulu, työ, vapaa-aika).
Tommi, 30, graafikko  

Tarvitsee deadline-muistutuksia asiakastöille.
Käyttää vain mobiililaitteita ja haluaa tyylikkään UI:n.
Maria, 40, yksinhuoltaja  

Haluaa jakaa listan lastensa kanssa (kotityöt, kauppalista).
Käyttää vain yksinkertaisia perustoimintoja.

**Sovelluksen ominaisuudet**  


Perusominaisuudet:  

- Tehtävien lisäys, poisto ja muokkaus  

- Tehtävien merkitseminen tehdyksi  

- Tunnisteiden lisääminen (Työ, Koulu, Koti, jne.)  

- Tehtävien deadline + muistutukset  

- Väriteeman vaihtaminen (Light/Dark mode)  

- Pilvitallennus (Firebase/MongoDB)  


Lisäominaisuudet:  

- Tehtävien jakaminen toiselle käyttäjälle  

- Push-ilmoitukset ennen deadlinea  

- Responsiivinen UI (toimii mobiilissa ja desktopissa)  


**Käyttöliittymän suunnittelu**  

Prototyyppi:  

Navigaatiopalkki, jossa "Kaikki tehtävät", "Tunnisteet", "Asetukset".  

Päänäkymässä listattuna tehtävät ja kategoriat, painike uuden tehtävän lisäämiseen ja mahdollisuus muokata väriteemaa.  


 Sivukartta :  

Etusivu (Tehtävälista) – näyttää kaikki tehtävät  

Lisää tehtävä -sivu – uuden tehtävän luonti  

Tunnisteet – suodata tehtävät kategorioittain  

Asetukset – vaihda väriteema ja ilmoitusasetukset  

Navigaatio :  

Käyttäjä näkee tehtävät pääsivulla, josta voi lisätä uuden tehtävän, tunnisteen, asettaa deadlinen jab muokata asetuksia
(+ jakaa listan toiselle käyttäjälle)  
![Proto](https://github.com/TiiaKa/psychic-spork/blob/9deef0ff1e312ebc3210b07a4ceeb34ecc8e72af/IMG20250401184746.jpg)

**Tekninen suunnittelu**  

- Frontend: React + Tailwind CSS (koska kevyt eikä tarvitse käyttää erillisiä CSS-tiedostoja)  

- Backend: Node.js + Express + Firebase (ilmainen pilvitallennus)  

- Tietokantarakenteena Firestone-tietomalli  


**Projektinhallinta**   

Sprintit ja tehtävät:  

 Sprintti 1: UI-suunnittelu ja frontend-kehitys  

 Sprintti 2: Backend (Node.js + Firebase)  

 Sprintti 3: Tehtävien deadline-muistutukset ja väriteema  

 Sprintti 4: Pilvitallennuksen testaus ja mahdollinen jakamisominaisuus  


**Käyttäjätestaus**  

Testausvaihe 1:  

- Testataan perustoiminnot: tehtävien lisäys, poisto, deadline-muistutukset  

Testausvaihe 2:  

- Testataan eri laitteilla  

Testausvaihe 3:  

- Testataan käytettävyys käyttäjillä, tarkistetaan käytettävyys ja bugit ennen julkaisua
>>>>>>> 6e90f038c17169e101d9803dce121a24c9599e3e
