// Parent class
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }

  stop() {
    console.log(`${this.brand} ${this.model} is stopping...`);
  }
}


class PetrolCar extends Car {
  constructor(braned, model, fuelCapacity) {
    super(braned, model);   
    this.fuelCapacity = fuelCapacity;
  }

  refuel() { 
    console.log(`${this.brand} ${this.model} refueled with petrol.`);
  }
}


class ElectricCar extends Car {
  constructor(brand, model, batteryCapacity) {
    super(brand, model);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log(`${this.brand} ${this.model} is charging.`);
  }
}

// Usage
const petrolCar = new PetrolCar("Honda", "City", 50);
console.log(petrolCar);
// petrolCar.start();     
// petrolCar.refuel();     

// const electricCar = new ElectricCar("Tesla", "Model 3", 75);
// electricCar.start();    
// electricCar.charge();  
