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
    
  })
})