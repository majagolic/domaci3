/*1.	Kreirati funkciju koja ce za zadani broj od 1 - 6 kreirati HTML naslove do prosledjenog nivoa. Elemente kreirati uz
	pomoc for petlje i ispisati u HTML dokument pomocu document.write() funkcije.
		PRIMER: Ako je funkciji prosledjen broj 3, treba da se izgenerisu naslovi od h1 do h3.
		REZULTAT:
			<h1>Ovo je generisani naslov</h1>
			<h2>Ovo je generisani naslov</h2>
			<h3>Ovo je generisani naslov</h2> */

    
    function naslovi(broj){

        if(broj < 1 || broj > 6){
            console.log("Invalid parametar!");
            return;
        }
        for(var i = 1; i <= broj; i++){
            document.write("<h" + i + ">Ovo je generisani tekst</h" + i + ">" );
        }
    }
    naslovi(4);


   /* 2.	Izmeniti funkciju iz 1. zadatka tako da kao parametar prima 2 broja i generise naslove izmedju ta dva broja.
		PRIMER: Ako su funkciju prosledjeni brojevi 2 i 4, generisu se naslovi od h2 do h4.
		REZULTAT:
			<h2>Ovo je generisani naslov</h2>
			<h3>Ovo je generisani naslov</h3>
			<h4>Ovo je generisani naslov</h4> */

            function naslov(broj1, broj2){

                if(broj1 < 1 || broj1 > 6 || broj2 < 1 || broj2 > 6 || broj1 > broj2){
                    console.log("Invalid parametar!");
                    return;
                }
                for(var i = broj1; i <= broj2; i++){
                    document.write("<h" + i + ">Ovo je generisani tekst</h" + i + ">" );
                }
                
            }
            naslov(2, 2);


    /*3.Kreirati funkciju koja ce uz oslonac na ugradjenu funkciju 'indexOf' proveravati da li prvi prosledjeni string sadrzi
        drugi.
        PRIMER: Ako su funkciji prosledjeni stringovi 'Dobar dan' i 'dan', funkcija treba da vrati vrednost true, 
        jer je string 'dan' sadrzan u stringu 'Dobar dan'.*/

        function sadrziString(prviString, drugiString){

            if(prviString.indexOf(drugiString) !== -1){
                return true;
            }
            else{
                return false;
            }
        }
        var rez = sadrziString("Dobar dan", "dan");
        console.log(rez);

/* 4. Izmeniti funkciju iz 3. zadatka, tako da se ignorisu velika i mala slova prilikom provere.*/

function sadrziString( prviString, drugiString){

    var prviStringLowerCase = prviString.toLowerCase();
    var drugiStringLowerCase = drugiString.toLowerCase();

    if(prviStringLowerCase.indexOf(drugiStringLowerCase) !== -1){
        return true;
    }
    else{
        return false;
    }

}
var rezultat = sadrziString("Dobar dan", "Dan");
console.log(rezultat);




/*5.	Kreirati program koji analizira JMBG koji je definisan kao string (kao u primerima '10. numbers' i '11. string').
	Znacajne delove JMBG-a izdvojiti putem funkcije substring.
	JMBG je broj formata 'DDMMGGGRRBBBK' i sastoji se od sledecih informacija:

		DD - dan rođenja
		MM - mesec rođenja
		GGG - zadnje tri cifre godine rođenja
		RR - region rođenja, odn. prebivalište za građane rođene pre 1976. godine.
		BBB - pol:
		    	000-499 - muški
		    	500-999 - ženski
		K - kontrolna cifra

	U zadatku ispisati datum rodjenja i pol osobe za zadani JMBG.*/

    function jmbgPars(jmbg){
        var DD = 0;
        var MM = 0;
        var GGG = 0;
        var BBB = 0;
        var pol = 'zensko';

        DD = jmbg.substring(0, 2);
        MM = jmbg.substring(2, 4);
        GGG = jmbg.substring(4, 7);
        BBB = jmbg.substring(9, 12);
        if(BBB < 500){
            pol = 'musko';
        }
        console.log("Datum rodjenja: " + DD + "." + MM + ".1" + GGG + ". Pol:" + pol)
       

 }
 jmbgPars("2404988805034");

 /*6.	Uz pomoc funkcije split() kreirati funckiju koja ce za zadati deo URL-a izvuci vrednosti HTTP GET parametara.
	PRIMER:	Zadat je deo urla: '?ime=sinisa&prezime=mihajlovic'
	REZULTAT: Rezultat je sledeci ispis u HTML dokument:
		ime=sinisa
		prezime=mihajlovic	*/

        function nameToHtml(url){

            var ime = 0;
            var prezime = 0;
            var content = 0;
            content = url.substring(1, url.length);
            ime = content.split("&")[0];
            prezime = content.split("&")[1];

            document.write("<p>" + ime + "</p>");
            document.write("<p>" + prezime + "</p>");
        }
        nameToHtml('?ime=sinisa&prezime=mihajlovic');

/*7.	Kreirati JavaScript program koji u HTML dokument ispisuje koliko je dana ostalo do vikenda u odnosu na trenutni dan.
	Napomena: Trenutni dan mozete dobiti na sledeci nacin:
	var danas = new Date();
	var dan = danas.getDay(); // 0 - nedelja, 6 - subota*/
 function dani(){
    var danas = new Date();
    var dan = danas.getDay();

    var daniDoVikenda = 0;

    switch(dan){
        case 0:
            daniDoVikenda = 6;
            break;

        case 1:
            daniDoVikenda = 5;
            break;

        case 2:
            daniDoVikenda = 4;
            break;

        case 3:
            daniDoVikenda = 3;
            break;

        case 4:
            daniDoVikenda = 2;
            break;

        case 5:
            daniDoVikenda = 1;
            break;

        default:
            daniDoVikenda = 0;
    }
    return daniDoVikenda;
}

    document.write("<h1> Do vik ostalo " + dani() + " dana</h1>" );




    