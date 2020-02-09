module.exports = class ShoppingCart {
  constructor() {
    this.cart = [];
  }
};

getItems (){
  return this.cart;
}

addItem (itemName, quantity, price)
return this.cart.push { name: itemName, pricePerUnit: price, quantity.quantity}

clear (){
  this.cart = []
}

total(){
  const cartTotal = this.cart.reduce(function(totalSum, item))
{
  totalSum += item.pricePerUnit * item.quantity;
  return totalSum;
}0);
return cartTotal
}
};


class Farm {
  constructor(name) {
    this.name = name;
    this.crops = [];
  }
  addCrop(crop) {
    this.crops.push(crop);
  }
  }

  calculateIncome() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((a, b) => a + b, 0);
  }

  addAnimal(Animal) {
    this.animals.push(animal);

    calculateIncome(){
      return this.animals
      .map(animal => animal.getValueinEuros())
      .reduce ((a,b,c)) => a + b + c, 0);
    }
}
module.exports.Farm = Farm;