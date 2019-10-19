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

// sort

{

}