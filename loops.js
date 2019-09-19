//for

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

//for in

let txt = ''
const person = { fname: "John ", lname: "Doe ", age: 25 }
for (let x in person) {
    txt += person[x]
}
console.log(txt)

//while

let i = -1
while (i < 10) {
    i++
    console.log(i)
}

//do while

let x = 30;
do {
    console.log(x)
    x++;
}
while (x <= 25)

//switch statement

const a = "jkhtn3kljehnt";

switch (a) {
    case "bebe":
        console.log("gooooooooooood!");
        break;
    case "roro":
        console.log("wroooooooooooong!");
        break;
    default:
        console.log("hello!");
}

//break statement

const tab = ["Ala", "Monika", "Beata", "Karol"];

let userExist = false;

for (let i = 0; i < tab.length; i++) {
    if (tab[i] === "Beata") {
        userExist = true;
        console.log(`Udało się wyszukać osobę o imieniu ${tab[i]}.`)
        break; //dalej nie ma sensu sprawdzać
    }
}

//continue statement

const tab2 = ["Ala", "Monika", "Beata", "Karol", "Alicja"];

for (let i = 0; i < tab2.length; i++) {
    if (tab2[i] === "Karol") {
        continue; //Karola pomiń
    }
    console.log(tab2[i]);
}