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