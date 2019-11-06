// dwa typy odwołań

const ob = {
    name: "Marcin",
    pet: "pies",
    pisz: function () { console.log('bla bla bla') }
}

console.log(ob.name)
console.log(ob.pet)
ob.pisz()

console.log(ob["name"])
console.log(ob["pet"])
ob["pisz"]()


const calendar = {
    "2018-11-11": {
        name: "Narodowe Święto Niepodległości"
    },

    "2018-12-24": {
        name: "Wigilia Bożego Narodzenia"
    }

}

console.log(calendar["2018-11-11"])

// usuwanie właściwości i metod

const car = {
    brand: "Mercedes",
    color: "czerwony",
    speed: 150,
    print: function () {
        console.log(this.brand + ' koloru ' + this.color);
    }
}

console.log(car.color); //czerwony
delete car.color;
console.log(car.color); //undefined

// pętle po obiekcie

{
    const car = {
        brand: "Mercedes",
        color: "czerwony",
        speed: 150,
        print: function () {
            console.log("Marka: ", this.brand);
            console.log("Kolor: ", this.color);
            console.log("Szybkość: ", this.speed);
        }
    }

    for (const key in car) { // !!! for in stosować tylko dla obiektów, nie dla tablic!!!
        console.log(key); //brand, color, speed, print
    }


    for (const key in car) { // !!! for in stosować tylko dla obiektów, nie dla tablic!!!
        console.log("Klucz: ", key);
        console.log("Wartość: ", car[key]);
    }

}

// pobranie kluczy i ich wartości:

{
    const calendar = {
        "2018-11-11": {
            name: "Narodowe Święto Niepodległości"
        },
        "2018-12-24": {
            name: "Wigilia Bożego Narodzenia"
        }
    }

    for (const key in calendar) {
        console.log("Święta na dzień: " + key);
        console.log(calendar[key]);
    }
}

// Object.keys(obj) - zwraca tablicę kluczy obiektu

{
    const car = {
        brand: "Mercedes",
        color: "czerwony",
        speed: 150
    }

    const keys = Object.keys(car);
    for (const key of keys) { //pętla po tablicy! - of, nie in
        console.log(car[key]);
    }
}

//tablica w której chcemy zliczyć występowanie danych elementów

{
    const tab = [
        "Ala ma kota",
        3,
        "Ania lubi czekoladki",
        "Ala ma kota",
        2,
        "Piesek Rysiek",
        "Piesek Rysiek",
        2,
        "Ania lubi czekoladki",
        "Ania lubi czekoladki"
    ];


    const ob = {};
    tab.forEach(function (el) {
        //jeżeli właściwości o takiej nazwie nasz obiekt jeszcze nie ma to ją tworzymy
        if (!ob.hasOwnProperty(el)) {
            ob[el] = 0;
        }
        ob[el]++;
    })

    console.log(ob);
}