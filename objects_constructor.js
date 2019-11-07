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