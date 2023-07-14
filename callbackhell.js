console.log("%c callback hell", "background: #222; color: #bada55");
console.log("callback hell");

//good part of callbacks and bad parts;
//callback hell and inversion of control
//precursor to understand promises
//JS is single threaded - doesn't wait for time and tide
//but AJAX
//time, tide and javascript waits for none;

console.log("namaste");

setTimeout(() => {
  console.log("javascript");
}, 2000);

console.log("season 2");

const cart = ["shoes", "shirts", "boots"];

//first create an order
//then checkout
/*
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary();
  });
});

call back hell above, this is called pyramid of doom(the shape of code is pyramid lol) - so hard to read

*/

//only after order is created we should call proceedtopayment thus async thus use callback

//!Inversion of control - lose control pf our code in a callback hell;

// api.createOrder(cart, function () {
//   api.proceedToPayment();
// });

//* here we are blindly trusting createorder api, here it's createorder behaves crazily then proceed to payment gets fucked - losing control man

//Two issues with call
//* 1. callback hell
//* 2. pyrmaid doom
