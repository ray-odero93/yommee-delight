var size = ["small","medium","large"];
var crust = ["crispy","stuffed","gluten-free"];
var toppings = ["pepperoni","mushroom","extra-cheese"];
var contact = ["delivery","pick-up"];

function Order(size, crust, toppings, contact) {
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaTops = toppings;
  this.pizzaDelivery = contact;
};


