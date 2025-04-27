# Phase 4 - Presentation


## To-Do Sovellus  
Arkea helpottava tehtävälista

## Projektin tavoite
Sovelluksen tarkoituksena on tarjota arkea helpottava tehtävälista, joka toimii mobiilissa ja selaimessa. Käyttäjä voi lisätä, merkitä tehdyksi ja poistaa tehtäviä, vaihtaa väriteeman (tumma/vaalea), ja hallita tehtäviä tunnisteiden avulla. Kohderyhmämä olivat tässä vaiheessa kiireiset työssäkäyvät tai opiskelijat, tai ruuhkavuosien keskellä elävät 18-40 -vuotiaat nuorehkot aikuiset jotka haluavat organisoida hektistä arkeaan. Tarkemmat käyttäjäpersoonat vaiheen 2 dokumentissa.
 

## Käyttötapaukset
Käyttötapaukset olivat:  
Käyttäjä voi lisätä uuden tehtävän (demottu)  
Käyttäjä voi merkitä tehtävän tehdyksi (demottu)  
Käyttäjä voi poistaa tehtävän (demottu)  
Käyttäjä voi vaihtaa väriteeman (dark/light) (demottu, dark/light-mode käytössä mutta varsinaisen väriteeman muokkaaminen jäi vaiheeseen)  
Käyttäjä voi tallentaa oman nimensä ja vaihtaa sitä asetuksissa (demottu)  
Käyttäjä voi jakaa tehtävälistan toiselle henkilölle (ainoastaan linkin jakamalla)  
Sovellus toimii mobiilissa ja tietokoneella (demottu)  
Tehtävien tunnisteiden (kategoria) lisääminen (demottu)  
Deadline ja muistutukset tehtäville (muistutukset jäi puuttumaan)  
Tehtävien jako reaaliaikaisesti tiimikäyttöön (näkyvät kyllä reaaliaikaisesti, mutta jakamisominaisuus vain linkillä)  
Tehtävien pilvitallennus (kyllä)  



## Tekniset ominaisuudet
React + React Router  
    Tailwind CSS  
    Express  
    PostgreSQL, Render hostaa (frontend + backend)  
    LocalStorage nopeaan säilytykseen (käyttäjänimi, väriteema)  
    Git ja GitHub versiohallintaan  

Frontend on toteutettu Reactilla ja Tailwindilla, backend Expressillä, Render hostaa molemmat. Käytössä on PostgreSQL-tietokanta ja localStorage joihinkin ominaisuuksiin kuten käyttäjänimiin ja teemaan. Koodin rakenne komponenttipohjainen (selkeyttää), jaettu backend ja frontend -kansioihin. Versiohallinta Gitillä ja GitHubilla.


## Kehitysprosessi
Prosessi eteni kokonaisuuden suunnittelun jälkeen frontendin kehittämiseen ja sen testaamiseen, sitten backendin kehittämiseen ja testaamiseen ja lopuksi pilvipalveluun siirtämiseen. Alussa ajattelin tämän olevan selkein järjestys ihmiselle jolla ei ole hirveästi aiheesta osaamista, mutta nyt jälkeenpäin ajateltuna kehittäisin frontendiä ja backendiä alusta alkaen rinnakkain jotta niiden yhteensopivuus ja sitä kautta kokonaisuus olisi helpompaa hallita ja aikaa säästyisi. Koodeihin tuli todella paljon muutoksia matkan varrella kun niitä yritti saada sopimaan yhteen ja välissä sai luoda uusia komponentteja ja mukauttaa sovelluksen rakennetta niiden ympärille. Pilvipalveluun siirtyminenkään ei ollut ihan niin yksinkertainen siirtymä kun olisi olettanut, vaan jotkut toiminnallisuudet kärsivät ja aikaa meni taas virheiden etsintään ja reitityksien korjaamiseen. Toimiva lopputulos kuitenkin palkitsee ja itse olen yllättynyt että näinkin paljon suunniteltuja käyttötapauksia sai pysymään matkassa mukana ja ennen kaikkea toimimaan!


## Itsereflektointi, jatkokehitys
Opin paljon kehittämisestä, Javascriptista, Reactista, virheiden ja komponenttien hallinnasta. Opin myös projektin suunnittelusta ja kokonaisuuden hallinnasta ylipäätään, kuten hyvän suunnittelun tärkeydestä. Network toolsin käyttö omaksuttu, kätevä työkalu! Syvensin osaamista Express-palvelimen rakentamiseen ja PostgreSQL-tietokannan käsittelyyn SQL-kyselyillä. Renderin kanssa tuli teknisiä haasteita, mutta opin debuggausta sitä kautta. Käyttöliittymä pidetty visuaalisesti yksinkertaisena niinkuin oli tarkoituskin, mutta siitä jäi ulkoasultaan hieman kömpelö. Tuli todettua että visuaalinen yksinkertaisuus tukee käyttökokemusta. Projekti vahvisti itseluottamusta web-kehitykseen, kun sai rakennettua alusta asti kokonaisen fullstack-sovelluksen, oppi ratkaisemaan monenlaisia käytännön ongelmia ja kehittyi paljon Reactin ja Node.js:n käytössä. Projektin ydin toimii, kehitys jäi kesken.  
  
Jatkokehitysideoita: käyttäjätunnistautuminen ja eri käyttäjäprofiilit, push-ilmoitukset ja deadline-muistutukset, teeman laajempi kustomointi (enemmän värejä), responsiivisuuden parantaminen, tiettyjen tehtävien jakaminen toisen käyttäjän kesken reaaliajassa.

## Projektiin käytetyt työtunnit
Phase 1:  
31.3. 4h   
1.4. 3h   
  
Phase 2:  
2.4. 3h Frontendin aloitus (backend alulle)  
3.4. 3h  
4.4. -  
5.4. 3h   
6.4. 2h  
7.4. 3h  
8.4. -  
9.4. 2h  
10.4. -  
11.4. 3h Backendin aloitus  
12.4. 3h   
13.4. 3h  
14.4. 2h  
15.4. -  
16.4. 2h  
17.4. 7h   
18.4. 5h Loppuraportti  
  
Phase (3&)4:  
22.4. 2h  
24.4. 1h  
25.4. 1,5h (nämä kaikki virheenhallintaa/virheen etsintää)  
26.4. 0,5h   
27.4. 2,5h   
(esittelyvideon pohjustus/rakenteen suunnittelu, esityssivun teko)  

## Linkit
•	Sovellus (live): https://todo-app-s89w.onrender.com  
•	GitHub-repo: https://github.com/TiiaKa/psychic-spork JA backend-repo: https://github.com/TiiaKa/todo-backend (eri repoissa koska helpompi käyttää Renderissä)  
•	esittelyvideo: https://centriafi-my.sharepoint.com/:v:/g/personal/tiia_kahlos_centria_fi/EXaqYI1bVABNgdlRGR7cK8gBuWACEURmfsH3-PnvNV6n2Q?email=ville.heikkiniemi%40centria.fi&e=SpGllx&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D
