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