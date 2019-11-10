function Car(brand, color) {
    this.age = 0;
    this.brand = brand;
    this.color = color;

    this.print = function () {
        console.log(this.brand + ' koloru ' + this.color);
    }
}

//tworzymy 2 obiekty na bazie konstruktora

const car1 = new Car("Fiat", "czerwony");
car1.print(); //Fiat koloru czerwony

const car2 = new Car("BMW", "czarny");
car2.print(); //BMW koloru czarny


// tworzenie ciąg dalszy

{
    function Car(name, age, speed) {
        this.name = name;
        this.age = age;

        let risk = "small";
        if (age > 8 && age <= 15) {
            risk = "average";
        } else if (age > 15) {
            risk = "big"
        }

        this.status = risk;
    }

    const car1 = new Car("Fiat", 10, 120);
    console.log(car1); // {name: "Fiat", age: 10, status : "average"}
}