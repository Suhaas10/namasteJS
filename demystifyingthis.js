let counter = {
  count: 0,
  incrementCount: function () {
    return ++this.count;
  },
};

let count = counter.incrementCount();

//Global Context
//console.log(this);

//!=======Function Context=========

//! ---- 4 ways to invoke a function
//!---------------------------------
//* ---- 1 ----  Function invocation

function show() {
  "use strict";
  console.log(this === undefined); //true
}

// show();
//* ---- 2 ----  method invocation

// let car = {
//   brand: "tata",
//   model: "nexon",
//   introduceCar: function () {
//     console.log("Hi I am " + this.brand + " " + this.model + " car");
//   },
//   paintCarRed: function (tint, wheelColor) {
//     console.log(
//       this.brand +
//         " " +
//         this.model +
//         " car painted red" +
//         " tint " +
//         tint +
//         " wheels " +
//         wheelColor
//     );
//   },
// };

// car.introduceCar();
// car.paintCarRed();

// let car2 = {
//   brand: "tata",
//   model: "harrier",
// };

//* ---- 3 ----  constructor invocation

function Car(brand, model) {
  //   console.log(this);
  this.brand = brand;
  this.model = model;
  this.paintCarRed = function () {
    const arrow = () => {
      console.log("arrow " + this.brand + this.model + "painted red");
    };
    arrow();
  };
}

//? or

// Car.prototype.paintCarRed = function () {
//   return this.brand + this.model + "painted red";
// };

let tataCar = new Car("tata", "nexon");
// console.log(tataCar);
tataCar.paintCarRed();

// let mahindraCar = new Car("mahindra", "thar");
// console.log(mahindraCar);

// console.log(tataCar instanceOf Car)

//* ---- 4 ----  indirect invocation

// let paintHarrierRed = car.paintCarRed.bind(car2);
// paintHarrierRed("white", "silver");

// car.paintCarRed.call(car2, "yellow", "black");

// car.paintCarRed.apply(car2, ["pink", "gold"]);

//!================Arrow functions=============  don't have their this  keyword
