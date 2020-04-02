{
  //                                                             *** różnice pomiędzy var a let ***

  // var można nadpisać:
  var camper = "James";
  var camper = "David";
  console.log(camper);

  // loguje: 'David'

  // gdyby zamiast var, było let, wyrzuciłoby błąd
}

//                                                             ***porównanie zasięgu var i let ***

// var ma zasięg funkcyjny bądź globalny, natomiast let ma: blokowy, instrukcji warunkowej, wyrażenia, funkcji bądź globalny

{
  var numArray = [];
  for (var i = 0; i < 3; i = i + 1) {
    numArray.push(i);
  }
  console.log(numArray);

  // zwraca [0, 1, 2]
  console.log(i);

  // zwraca 3, ponieważ zadeklarowano 'var i' w instrukcji warunkowej, a nie w funkcji, a zatem jest to zmienna globalna
}

{
  var numArray2 = [];
  var x;
  for (x = 0; x < 3; x = x + 1) {
    numArray.push(x);
  }
  console.log(numArray2);

  // zwraca [0, 1, 2]
  console.log(x);

  // zwraca 3, ponieważ zadeklarowano 'var x' globalnie
}

{
  var printNumTwo;
  for (var z = 0; z < 3; z = z + 1) {
    if (z === 2) {
      printNumTwo = function() {
        return z;
      };
    }
  }
  console.log(printNumTwo());

  // zwróci 3, ponieważ przy 3 pętli (0, 1, 2) przypisze do zmiennej globalnej 'printNumTwo' funkcję, potem skończy pętlić inkrementując

  // zmienną globalną 'var z' do wartości 3 i takąż pokaże przy wywołaniu ww. funkcji
}

{
  ("use strict");
  let printNumTwo2;
  for (let a = 0; a < 3; a = a + 1) {
    if (a === 2) {
      printNumTwo2 = function() {
        return a;
      };
    }
  }
  console.log(printNumTwo2());

  // zwróci 2 ponieważ nie istnieje tu (z powodu użycia let zamiast var) zmienna globalna 'let a' a zatem zapamięta wartość a z etapu pętli
  // kiedy a było 2
  try {
    console.log(a);
  } catch (err) {
    console.log(`wyrzuci taki błąd: ${err}`);
  }

  // wyrzuci błąd "a is not defined" ponieważ z powodu użycia let, zmienna 'a' nie jest dostępna globalnie
}

{
  function checkScope() {
    "use strict";
    let s = "function scope";
    if (true) {
      let s = "block scope";
      console.log(`Block scope s is: ${s}`); // tu weźmie wrtość s z zasięgu instrukcji warunkowej (blokowo - klamry)
    }
    console.log(`Function scope s is: ${s}`); // tu weźmie z zasięgu całej funkcji
    return s; // tu też całej funkcji
  }

  console.log(checkScope());
}

//                                                        ***deklaracja przy pomocy słowa kluczowego const***

const FAV_PET = "Cats";
// FAV_PET = "Dogs"; zwróciłoby błąd, nie można przypisywać innej wartości

//                                       ***tablice, obiekty i funkcje przypisane do zmiennej 'const' są mutowalne***

{
  ("use strict");
  const s = [5, 6, 7];
  // s = [1, 2, 3]; zwróciłoby błąd, bo przy const nie możemy ponownie przypisywać innej wartości
  s[2] = 45; // nie zwraca błędu, ponieważ tutaj jedynie mutujemy tablicę
  console.log(s); //  zwróci [5, 6, 45]
}

{
  const s = [5, 7, 2];
  function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
  }
  editInPlace();
}

//                                                                 ***zapobieganie mutacji obiektów
{
  let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad"; // zostanie zignorowane, mutacja niedozwolona
  obj.newProp = "Test"; // zostanie zignorowane, mutacja niedozwolona
  console.log(obj);
}

{
  function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch (ex) {
      console.log(`oto błąd: ${ex}`);
    }
    return MATH_CONSTANTS.PI;
  }
  freezeObj();
}

//                                                 ***funkcje strzałkowe***

// Gdy nie ma treści funkcji, a jedynie wartość zwracana, składnia funkcji strzałki pozwala pominąć słowo kluczowe return
//  oraz nawiasy otaczające kod. Pomaga to uprościć mniejsze funkcje do instrukcji jednowierszowych:

const myFunc = () => "value";
const doubler = (item) => item * 2;

// Jeśli funkcja strzałkowa ma pojedynczy argument, nawiasy zawierające argument mogą zostać pominięte:

const doubler2 = (item) => item * 2;

// Możliwe jest przekazanie więcej niż jednego argumentu do funkcji strzałkowej:

const multiplier = (item, multi) => item * multi;

//                                                 ***parametr rest***

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0); // zero jest tu parametrem początkowym, args to spakowane do tablicy argumenty
};
console.log(sum(1, 2, 3)); // 6 - zostaje wyeliminowana potrzeba stworzenia tablicy

//                                                 ***operator spread***

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // metoda Math.max oczekuje argumentów, które trzeba rozpakować z tablicy (Math nie przyjmuje tablic),
//rest rozpakowuje te tablice
console.log(maximus);

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
console.log(...arr1);
arr2 = [...arr1]; // wkładamy argumenty rozpakowane z jednej tablicy na powrót do innej
console.log(arr2);

//                                                ***destrukturyzacja - wyodrębnianie właściwości z obiektów***
{
  const user = { name: "John Doe", age: 34 };
  const { name, age } = user; // teraz mamy już dostęp właściwości w ogólnym scope:
  console.log(name, age);
}

{
  const user = { name: "John Doe", age: 34 };
  const { name: userName, age: userAge } = user; // userName = 'John Doe', userAge = 34, wydobywamy właściwości z obiektu, ale nadajemy im nowe nazwy
  console.log(userName, userAge);
}

{
  //destrukturyzacja z obiektu zagnieżdżonego:
  const user = {
    johnDoe: {
      age: 34,
      email: "johnDoe@freeCodeCamp.com"
    }
  };
  const {
    johnDoe: { age, email }
  } = user;
  console.log(age, email);
  const {
    johnDoe: { age: userAge, email: userEmail }
  } = user;
  console.log(userAge, userEmail);
}

//                                                  ***destrukturyzacja tablic***

{
  const [a, b] = [1, 2, 3, 4, 5, 6];
  console.log(a, b); // 1, 2
}

{
  const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
  console.log(a, b, c); // 1, 2, 5
}

{
  // zamiana wartości a i b przy pomocy destrukturyzacji tablic:
  let a = 8,
    b = 6;
  [b, a] = [a, b]; //nie mogliśmy tu użyć przed pierwszym nawiasem 'const' ani 'let' ponieważ już zadeklarowaliśmy te zmienne
  console.log(b, a);
}

//                                                  ***destrukturyzacja i rest w celu zmiany przypisania elementów tablicy***
{
  const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const reassignTab = (tabToReassign) => {
    const [a, b, ...restOfTab] = tabToReassign;
    return restOfTab;
  };

  console.log(reassignTab(tab));
}

//                                                    ***destrukturyzacja obiektu przekazywanego jako argument funkcji***
{
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

  const half = ({ max, min }) => {
    return (max + min) / 2;
  };

  console.log(half(stats));
}

//                                                   ***template strings***
{
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
    // change code below this line
    const resultDisplayArray = arr.map((item) => {
      return `<li class="text-warning">${item}</li>`;
    });
    // change code above this line
    return resultDisplayArray;
  }

  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray);
}

//                           ***skrót przy zwracaniu obiektu***

{
  const createPerson = (name, age, gender) => {
    "use strict";
    return {
      name, //zamiast name: name
      age,
      gender
    };
  };
}

//                           ***skrót przy deklaracji funkcji w obiekcie***
{
  const bicycle = {
    gear: 2,
    setGear(newGear) {
      // zamiast: setGear: function(newGear) {}
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);
}

//                           ***klasa***
{
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }

  const carrot = new Vegetable("carrot");
  console.log(carrot.name);
}

//                      ***getter i setter***

{
  class Thermostat {
    constructor(temp) {
      this._temp = temp;
    }
    get temperature() {
      return (5 / 9) * (this._temp - 32);
    }

    set temperature(fahr) {
      this._temp = fahr;
    }
  }

  const thermos = new Thermostat(76); // tworząc obiekt wrzucamy stopnie w farenheitach
  let temp = thermos.temperature; // stosujemy getter - nie piszemy jak w funkcji temperature() tylko bez nawiasu
  console.log(temp); // oczywiście getter powyżej wyliczył w celsiuszach
  thermos.temperature = 26; // SETTER -  tutaj po znaku "="" dajemy to, co w funkcji dalibyśmy w nawias: temperature(26)
  temp = thermos.temperature; // znowu getter, żeby pobrać zaktualizowaną temperaturę
  console.log(temp);
}
