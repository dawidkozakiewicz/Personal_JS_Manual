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

const myFunc = () => "value"
const doubler = (item) => item * 2

// Jeśli funkcja strzałkowa ma pojedynczy argument, nawiasy zawierające argument mogą zostać pominięte:

const doubler2 = item => item * 2;

// Możliwe jest przekazanie więcej niż jednego argumentu do funkcji strzałkowej:

const multiplier = (item, multi) => item * multi;

//                                                 ***parametr rest***

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0); // zero jest tu parametrem początkowym
  }
console.log(sum(1, 2, 3)); // 6 - zostaje wyeliminowana potrzeba stworzenia tablicy
