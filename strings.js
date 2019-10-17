// pobieranie długości tekstu

{
    const text = "Ala ma kota";
    text.length; //zwróci 11
    console.log(text)
}

// pobieranie znaku na danej pozycji

{
    const text = "Ala ma kota, a kot ma Ale";

    console.log(text.charAt(0)); //A
    console.log(text.charAt(4)); //m

    console.log(text[0]); //A
    console.log(text[4]); //m

    console.log(text.charAt(text.length - 1)); //e
    console.log(text[text.length - 1]); //e
}

// toUpperCase, toLowerCase

{
    const text = "Ala ma kota";

    console.log(text.toUpperCase()); //ALA MA KOTA
    console.log(text.toLowerCase()); //ala ma kota
}

// indexOf, lastIndexOf

{
    const text = "Ala ma kota";

    //  ***sprawdzamy czy ciąg "psa" istnieje***
    if (text.indexOf("psa") > -1) {
        console.log("Ala ma psa");
    } else {
        console.log("Ala ma kota");
    }


    if (~text.indexOf("psa")) {
        console.log("Ala ma psa");
    } else {
        console.log("Ala ma kota");
    }
}

{
    "Ala ma kota i tak już jest".lastIndexOf("a"); //15 - bo ostatnia litera występuje na pozycji 15

    const url = "http://nazwastrony.pl/przykladowaNazwaPliku.php";

    //korzystając z metod opisanych poniżej tniemy url na części
    console.log(url.slice(url.lastIndexOf(".") + 1)); //php
    console.log(url.slice(url.lastIndexOf("/") + 1, url.lastIndexOf("."))); //przykladowaNazwaPliku
}

{
    const text = "Ala ma kota";

    if (text.includes("psa")) {
        console.log("Ala ma psa");
    } else {
        console.log("Ala ma kota");
    }
}

// substr

{
    const text = "Ala ma kota";

    console.log(text.substr(2)); //a ma kota
    console.log(text.substr(0, 3)); //Ala
    console.log(text.substr(7, 4)); //kota
    console.log(text.substr(4, text.length - 4)); //wypisze tekst od 4 litery do końca - "ma kota"

    const name = "marcin";
    console.log(name.charAt(0).toUpperCase() + text.slice(1)); //Marcin
}

// substring


{
    const text = "Ala ma kota";

    console.log(text.substring(0, 3)); //Ala
    console.log(text.substring(3)); //ma kota
    console.log("Ala ma kota".substring(6, 4)); //ma
    console.log("Ala ma kota".substring(4, 6)); //ma
}

// slice

{
    const txt = "Ala ma kota";

    const txt2 = txt.slice(0, 3);
    console.log(txt2); //Ala

    const txt3 = txt.slice(1, 5);
    console.log(txt3); //la m

    const txt4 = txt.slice(4, 6);
    console.log(txt4); //ma

    const txt5 = txt.slice(4);
    console.log(txt5); //ma kota

    const txt6 = txt.slice(-4);
    console.log("Ala już nie ma " + txt6 + ", bo kocur jej zwiał..."); //Ala już nie ma kota, bo kocur jej zwiał...
}

// split

{
    const text = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("
    const parts = text.split(", ");
    console.log(parts)
    parts.forEach(function (part) {
        console.log(part.toUpperCase());
    });
}

//replace

{
    const text = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("
    const textChanged = text.replace("Ala", "Ola");

    console.log(textChanged);
}

{
    const text = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("
    const textChanged = text.replace(/Al/g, "Ol");

    console.log(text);
    console.log(textChanged);
}
