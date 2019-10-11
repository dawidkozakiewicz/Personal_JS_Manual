//forEach

// *** pierwszy parametr będzie wskazywał na dany element z tablicy,
// *** drugi parametr będzie wskazywał na indeks elementu
// *** trzeci będzie wskazywał na aktualną tablicę po której iterujemy

const tab = ['Marcin', 'Ania', 'Agnieszka'];

tab.forEach(function (el, i, arr) {
    console.log(`Aktualny element to ${el}, jego index to ${i}, a długość tablicy to ${arr.length}`);
});

//every

const tab2 = [
    { name: 'Marcin', age: 18 },
    { name: 'Ania', age: 16 },
    { name: 'Agnieszka', age: 16 }
];

//czy wszyscy użytkownicy są pełnoletni?
const allAdult = tab2.every(function (el) {
    return el.age >= 18;
});

console.log(allAdult); //false

// some()

const tab3 = ["kot", "pies", "świnka", "jeż"];

//sprawdzam czy chociaż jedno słowo ma 3 litery
const word3letter = tab3.some(function (el) {
    return el.length === 3;
});

console.log(word3letter);


// map

const numbers = [1.2, 4.5, 9.3];

const absolute = numbers.map(function (el) {
    return Math.ceil(el);
});
console.log(absolute); //[2, 5, 10]
function multiple3(number) {
    return number * 3;
}

var ourTable = [1, 2, 3];
console.log(ourTable.map(multiple3)); //[3, 6, 9]


// filter

const people = ['Marcin', 'Ania', 'Agnieszka', 'Monika', 'Piotrek'];

const woman = people.filter(function (name) {
    return name.substr(-1) === 'a';
});

console.log(woman); //["Ania", "Agnieszka", "Monika"]

