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
// upon clicking the continue button

$(document).ready(function () {
  $("button.continue").click(function (event) {
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
        break;
    };
    switch (crustPizza) {
      case "0":
        crustPrice = 0;
        break;
      case "Crispy":
        crustPrice = 3.00;
        break;
      case "Stuffed":
        crustPrice = 2.49;
        break;
      case "Gluten-free":
        crustPrice = 1.49;
        break;

      default:
        console.log("No charge.");
        break;
    };

    let toppingValue = toppingPizza.length * 50;
    console.log("toppings value " + toppingValue);

    total = price + crustPrice + toppingValue;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal += total;

    $("#pizzaSize").html($("#sizes option:selected").val());
    $("#pizzaCrusts").html($("#crusts option:selected").val());
    $("#pizzaToppings").join(", "));
  $("#totalCost").html(total);

  $("button.morePizza").click(function () {
      let sizePizza = $("#sizes option:selected").val();
      let crustPizza = $("#crusts option:selected").val();
      let toppingPizza = [];
      $.each($("input[name='toppings']:checked"), function(){            
          toppingPizza.push($(this).val());
      });
      console.log(toppingPizza.join(", "));
      switch(sizePizza){
        case "0":
          price =0;
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
         default:
           console.log("ERROR!"); 
       }
       switch(crustPizza){
          case "0":
            crustPrice = 0;
          break;
          case "Crispy":
            crustPrice = 3.00;
          break;
          case "Stuffed":
            crustPrice = 2.49;
          break;
          case "Gluten-free":
            crustPrice = 1.49;
          break;
          default:
            console.log("No charge."); 
        }
        let toppingValue = toppingsPizza.length*50;
        console.log("toppings value" + topping_value);
        total = price + crustPrice + toppingValue;
        console.log(total);
    
        checkoutTotal += total;
    console.log(checkoutTotal);
    
    var newOrder = new eatPizza(size, crust, topping, total);

    $("#orderGiven").append('<tr><td id="pizzaSize">' + newOrder.size + '</td><td id="pizzaCrust">' + newOrder.crust + '</td><td id="pizzaTopping">' + newOrder.topping + '</td><td id="totalCost">' + newOrder.totalCost + '</td></tr>');
    console.log(newOrder);
  });
  });
};
  