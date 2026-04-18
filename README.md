# WEB-1_GyakorlatBeadando

Web programozás-1 Beadandó Feladat

### Kik vagyunk?
Ezt a projektet a **Neumann János Egyetem (NJE)** hallgatóiként készítettük:
* **Lázár Ákos** (Neptun kód: EUVG2G)
* **Berta Karolina Ildikó** (Neptun kód: FBAZTW)

### Élő demó
Az elkészült és működő webalkalmazás az alábbi linken tekinthető meg:
[http://lazarakos.nhely.hu](http://lazarakos.nhely.hu)

### A projekt célja
Ez a webalkalmazás a **Web programozás-1** előadás hivatalos házi feladataként készült. A projekt célja a félév során tanult webes technológiák és a kliens-szerver architektúra gyakorlati alkalmazása volt, különös tekintettel a modern JavaScript megoldásokra és az adatbázis-kezelésre.

### Alkalmazott technológiák
A projekt egy teljes körű **CRUD** (Create, Read, Update, Delete) alkalmazás, amely a **Magyar Feltalálók és Találmányaik** adatait kezeli egy MySQL adatbázisban. 

A felhasználói felületet és az adatbázissal való kommunikációt több különböző frontend technológiával is megvalósítottuk egyetlen projekten belül:

* **Natív (Vanilla) JavaScript:** Alapvető DOM manipuláció és adatkezelés.
* **React:** Komponens alapú fejlesztés Babel nélkül (standalone módon, CDN-ről betöltve).
* **Fetch API:** A beépített aszinkron HTTP kérések demonstrálása.
* **Axios:** Modern HTTP kliens könyvtár használata a React környezetben.

A rendszer backend motorját egy **PHP (PDO)** alapú API (`api.php`) biztosítja. Ez fogadja a frontend felől érkező JSON adatokat, majd hajtja végre a műveleteket a szerveren futó relációs adatbázisban. A projekt felépítése reszponzív, tiszta CSS formázással készült.
