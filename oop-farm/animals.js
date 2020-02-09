class Animal {
  constructor(age) {
    this.age = age;
  }

  getValueInEuros() {
    return this.age * this.getWeightInKg();
  }
}
class Pig extends Animal {
  constructor(age) {
    super(age);
    this.price = 4;
  }
  getWeightInKg() {
    return Math.min(700, this.age * 2.3);
  }
}

class Cow extends Animal {
  constructor(age) {
    super(age);
    this.price = 5;
  }

  getWeightInKg() {
    return Math.min(1200, this.age * 1.5);
  }
}
class Horse extends Animal {
  constructor(age) {
    super(age);
    this.price = 10;
  }
  getWeightInKg() {
    return Math.min(1000, this.age * 1.7);
  }
}
module.exports = { Pig, Cow, Horse };

// Weight of a cow in KG  (1200)= AGE x 1.5
// Weight of a pig in KG (700)= AGE x 2.3
// Weight of a horse in KG (1000)= AGE x 1.7
// Math.min

// // Prices are:
// //  €5/kg for the cow
// //  €10/kg for the horse
// //  €4/kg for the pig
