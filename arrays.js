// push,  pop

{
    const tab = ['Marcin', 'Ania', 'Agnieszka'];
    tab.push('Grzegorz');
    tab.push('Piotr', 'Karol');

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