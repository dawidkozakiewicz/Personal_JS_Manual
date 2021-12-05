// push,  pop

{
    const tab = ['Marcin', 'Ania', 'Agnieszka'];
    tab.push('Grzegorz');
    tab.push('Piotr', 'Stefan   ');

    console.log(tab) //[Marcin, Ania, Agnieszka, Piotr, Karol]
}

{
    const tab = ['Marcin', 'Ania', 'Agnieszka'];
    const last = tab.pop();

    console.log(last); //Agnieszka
    console.log(tab); //[Marcin, Ania]
}

// unshift, shift 

{
    const tab = ['Marcin', 'Ania', 'Agnieszka'];
    tab.unshift('Bartek');
    tab.unshift('Piotrek', 'Paweł');

    console.log(tab); //[Piotrek, Paweł, Bartek, Marcin, Ania, Agnieszka]
}

{
    const tab = ['Marcin', 'Ania', 'Agnieszka'];
    const elDeleted = tab.shift();

    console.log(tab); //[Ania, Agnieszka]
    console.log(elDeleted); //Marcin
}

// join

{
    const ourTable = ["Marcin", "Ania", "Agnieszka"];

    console.log(ourTable.join()); //wypisze się "Marcin,Ania,Agnieszka"

    console.log(ourTable.join(" - ")); //wypisze się "Marcin - Ania - Agnieszka"

    console.log(ourTable.join(" <--> ")); //wypisze się "Marcin <--> Ania <--> Agnieszka"
}

{
    const cars = ["Mercedes", "Audi", "BMW"];
    console.log(cars.join(', ')); //"Mercedes, Audi, BMW"
}

{
    const cars = ["Mercedes", "Audi", "BMW"];
    console.log(cars.join("").length); //15
}

// reverse

{
    const tab = [1, 2, 3, 4];

    console.log('Przed: ' + tab); //Przed: [1,2,3,4]
    tab.reverse()
    console.log('Po: ' + tab); //Po: [4,3,2,1]
}

// sort, localCompare


{
    const tab = ['Marcin', 'Ania', 'Piotrek', 'Grześ'];
    tab.sort();

    console.log(tab); //wypisze się "Ania, Grześ, Marcin, Piotrek"
}

{
    function compareNr(a, b) {
        return a - b
    }

    const tab = [100, 320, 10, 25, 310, 1200, 400];

    const tab3 = tab.sort(compareNr);
    console.log(tab3); //[10, 25, 100, 310, 320, 400, 1200]
}

{
    const tab = [
        { name: 'Marcin', height: 183 },
        { name: 'Ania', height: 173 },
        { name: 'Agnieszka', height: 170 },
    ]

    const tab2 = tab.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    })

    console.log(tab2);
}

{
    const mails = [
        "marcin@wp.pl",
        "marcin@gmail.pl",
        "marcin@onet.pl",
        "marcin@interia.pl"
    ]

    //sortuje po domenach
    //z użyciem funkcji strzałkowej
    mails.sort((a, b) => {
        const aDomain = a.substr(a.indexOf('@'));
        const bDomain = b.substr(b.indexOf('@'));
        return aDomain.localeCompare(bDomain);
    })

    console.log(mails);
}

{
    const users = [
        {
            name: "Marcin",
            car: {
                name: "Toyota",
                age: 10
            }
        },
        {
            name: "Marcin",
            car: {
                name: "Fiat",
                age: 15
            }
        },
        {
            name: "Monika",
            car: {
                name: "BMW",
                age: 5
            }
        },
    ]

    //sortuje po wieku samochodu
    users.sort((a, b) => {
        return a.car.age - b.car.age
    });

    console.log(users);
}

// concat

{
    const anim1 = ["Pies", "Kot"];
    const anim2 = ["Słoń", "Wieloryb"];
    const anim3 = ["Chomik ninja", "Świnka morderca"];

    const table = anim1.concat(anim2);
    console.log(table); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb"]

    const newTableBig = anim1.concat(anim2, anim3);
    console.log(newTableBig); //wypisze ["Pies", "Kot", "Słoń", "Wieloryb", "Chomik ninja"];
}

// spread

{
    const anim1 = ["Pies", "Kot"];
    const anim2 = ["Słoń", "Wieloryb"];
    const table = [...anim1, ...anim2];
    console.log(table)
}

// slice

{
    const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika', 'Magda'];

    const tab2 = tab.slice(0, 1);
    console.log(tab2); //[Marcin]
    console.log(tab); //[Marcin, Ania, Agnieszka, Monika, Magda]

    const tab3 = tab.slice(2);
    console.log(tab3); //[Agnieszka, Monika. Magda]

    const tab4 = tab.slice(0, 5);
    console.log(tab4); //[Marcin, Ania, Agnieszka, Monika, Magda]

    const tab5 = tab.slice(-2); //od końca
    console.log(tab5); //[Monika, Magda]

    const tab6 = tab.slice(2, -1);
    console.log(tab6); //[Agnieszka, Monika]
}


// splice

{
    const tab = ['Marcin', 'Ania', 'Agnieszka'];

    tab.splice(1, 1); //od indexu 1 usuwam 1 element
    console.log(tab); //wypisze "Marcin, Agnieszka"

    tab.splice(1, 0, 'Monika', 'Magda') //nic nie usuwam i wstawiam nowe elementy przed index 1
    console.log(tab); //wypisze "Marcin, Monika, Magda, Agnieszka"
}

{
    const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika'];
    const delEl = tab.splice(2, 1);
    console.log(tab); //wypisze 'Marcin', 'Ania', 'Monika'
    console.log(delEl); //wypisze 'Agnieszka'
}

{
    const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika'];

    //1 - który index,
    //0 - ile elementów usunąć,
    //'Piotr' - element
    tab.splice(1, 0, 'Piotr');

    console.log(tab); //[Marcin, Piotr, Ania, Agnieszka, Monika]
}

// fill

{
    const tab = new Array(20);
    console.log(tab); //[empty x 20]
    tab.fill(0);
    console.log(tab); //[0, 0, 0, ...]


    const tab2 = [];
    tab2.length = 15;
    console.log(tab2); //[empty x 15]
    tab2.fill(0, 2, 5);
    console.log(tab2); //[empty × 2, 0, 0, 5, empty × 10]


    const tab3 = [1, 2, 3, 4, 5];
    tab3.fill("x", 2);
    console.log(tab3); //[1, 2,"x", "x", "x"]
}

{
    const tab = new Array(10);

    //forEach i map pomijają puste miejsca, dlatego musimy tablicę wypełnić
    const nr = tab.fill(0).map((el, i) => i);
    console.log(nr); //[0,1,2,3,4,5,6,7,8,9];

    const randomTab = tab.fill(0).map(el => Math.floor(Math.random() * 10) + 1);
    console.log(randomTab);
}

// flat - eksperymentalne, nie wszędzie zaimplementowane

// {
//     const tab = [
//         1,
//         [2, 3],
//         [4, 5, [6, 7]],
//         [[[8, 9], [10, 11]]]
//     ]

//     console.log(tab.flat(1));
// }

// {
//     const tab = [
//         1,
//         [2, 3],
//         [4, 5, [6, 7]],
//         [[[8, 9], [10, 11]]]
//     ]

//     console.log(tab.flat(2));
// }

// {
//     const tab = [
//         1,
//         [2, 3],
//         [4, 5, [6, 7]],
//         [[[8, 9], [10, 11]]]
//     ]

//     console.log(tab.flat(Infinity)); //[1,2,3,4,5,6,7,8,9,10,11]
// }





// pętla po tablicy

{
    const tab = ['Marcin', 'Ania', 'Agnieszka'];

    for (let i = 0; i < tab.length; i++) {
        console.log('licznik pętli: ' + i); //0, 1...
        console.log('element: ' + tab[i]); //tab[0], tab[1]...
    }
}


