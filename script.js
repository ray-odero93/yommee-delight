// business logic

var sizePrice, crustPrice, toppingsPrice;
let total = 0;

function eatPizza(size, crust, topping, total) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// user interface logic

$(document).ready(function () {
  $("button.proceed").click(function (event) {
    let sizePizza = $("#sizes option:selected").val();
    let crustPizza = $("#crusts option:sewlected").val();
    let toppingPizza = [];
    $.each($("input[name='toppings']:checked"), function () {
      toppingPizza.push($(this).val());
    });

    console.log(toppingPizza.join(", "));

    switch (sizePizza) {
      case "0":
        price = 0;
        break;
      case "large":
        price = 14.99;
        console.log(price);
        break;
      case "medium":
        price = 11.99;
        console.log(price);
        break;
      case "small":
        price = 4.79;
        console.log(price);
        break;
      default:
        console.log("ERROR!");
    }
  })
})