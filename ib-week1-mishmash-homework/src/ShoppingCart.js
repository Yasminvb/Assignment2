module.exports = class ShoppingCart {
  constructor() {
    this.cart = [];
  }

  getItems() {
    return this.cart;
  }

  addItem(itemName, quantity, price) {
    this.cart.push({
      name: itemName,
      pricePerUnit: price,
      quantity: quantity
    });
    // console.log(this.cart);
  }

  clear() {
    this.cart = [];
  }

  total() {
    return this.cart.reduce((totalOfCart, item) => {
      return totalOfCart + item.quantity * item.pricePerUnit;
    }, 0);
  }
};
