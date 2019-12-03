function Car(brand, color) {
    this.brand = brand;
    this.color = color;
}

//tworzę nowe obiekty
const car1 = new Car("Fiat", "czerwony");
const car2 = new Car("BMW", "czarny");

//dodajemy nowe właściwości i metody
Car.prototype.print = function () {
    console.log(this.brand + ' koloru ' + this.color);
}

car1.print(); //Fiat koloru czerwony
car2.print(); //BMW koloru czarny