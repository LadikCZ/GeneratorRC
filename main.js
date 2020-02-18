  //Funkce pro generování náhodného čísla v daném intervalu
  function nahodneCislo(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generovatRodneCislo() {

    var rok = nahodneCislo(65, 99).toString();
    mesic = nahodneCislo(1, 12);
    den = nahodneCislo(1, 31);
    koncovka = nahodneCislo(100, 999);
    pohlavi = nahodneCislo(0, 2); //0=muž 1=žena

    //Pokud je měsíc únor, tak den nemůže být vyšší než 27
    if (mesic == 2) {
      if (den > 27) {
        den = 27;
      }
    }

    //Doplnění 50 podle pohlaví
    if (pohlavi == 1) {
      mesic = mesic + 50;
    }

    //Pokud je měsíc < 10 ddplnit 0
    if (mesic < 10) {
      mesic = '0' + mesic.toString();
    }


    //Pokud je den < 10 ddplnit 0
    if (den < 10) {
      den = '0' + den;
    }

    var zakladRodnehoCisla = rok + mesic + den + koncovka;

    var kontrolniCislice = parseInt(zakladRodnehoCisla) % 11;

    if (kontrolniCislice == 10) {

      kontrolniCislice = 0;

    }

    var rodneCislo = zakladRodnehoCisla.toString() + kontrolniCislice.toString();

    document.querySelector('.RC').innerHTML = rodneCislo;

  }