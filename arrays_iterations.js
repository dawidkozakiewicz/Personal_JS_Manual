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


// reduce

const tab4 = [1, 2, 3, 4];
const result = tab4.reduce(function (prev, next) {
    return prev + next;
});

const tab5 = [3, 2, 4, 2];
const result2 = tab5.reduce(function (a, b) {
    return a * b;
});

// *** z wartościami początkowymi

const sum1 = [1, 2, 3].reduce(function (a, b) {
    return a + b;
}, 0);
console.log(sum1)

const sum2 = [1, 2, 3].reduce(function (a, b) {
    return a + b;
}, "");
console.log(sum2)

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flatArray = data.reduce(function (total, amount) {
    return total.concat(amount);
}, []);
console.log(flatArray)

const data2 = [{ age: 10 }, { age: 12 }, { age: 15 }];
const age = data2.reduce(function (a, b) {
    return { age: a.age + b.age };
}, { age: 0 });
console.log(age)



