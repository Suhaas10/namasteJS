//!call, apply and bind

// let car = {
//   brand: "tata",
//   model: "2022",
// };

// function carTagLine(color, fuel) {
//   console.log(
//     this.brand +
//       " car of " +
//       this.model +
//       " - color " +
//       color +
//       " - runs on " +
//       fuel
//   );
// }

// carTagLine.call(car, "red", "electicity");

// let car2 = {
//   brand: "mahindra",
//   model: "2021",
// };

// carTagLine.call(car2, "blue", "hydrogen");

// carTagLine.apply(car2, ["blue", "hydrogen"]);

// let car2TagLine = carTagLine.bind(car2, "blue");

// car2TagLine("hydrogen");

//! polyfill for bind

// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   params = args.slice(1);
//   return function (...args2) {
//     obj.apply(args[0], [...params, ...args2]);
//   };
// };

// let car2TagLineMyBind = carTagLine.mybind(car2, "blue");

// car2TagLineMyBind("hydrogen");

// //!prototypal inheritance

// let arr = [1, 2, 3];

// //!pass by value and pass by reference.

// let a = 2;
// let b = a;

// // let b = [1, 2, 3];
// // b.push(4);

// console.log(`a is ${a}`);
// console.log(`b is ${b}`);
// console.log(a === b);

//! setInterval

// const decrementCounter = (count) => {
//   setInterval(() => {
//     if (count == 0) {
//       return;
//     }
//     console.log(count--);
//   }, 1000);
// };

// decrementCounter(5);

//! debouncing and throttling
//? for limiting rate of function calls/execution
//* search bar

//debouncing - search bar on mostly on e-commerce amazon flipkart meesho
//also to track resize of the window
//if there is a pause of 300ms after a keystroke then only make a call to API instead of on each keystroke

//throttling -
//after 1 call is made, wait for 'x' ms to make the next call

//3 examples
///----1 on search bar
///----2 on window resize
///----3 on button clicks - shooting game - on mouse click to shoot
// machine gun - throttling works better
//small pistol - debouncing works better
///----4 on scroll

// let counter = 0;
// getData = () => {
//   console.log("fetching data..." + counter++);
// };

// const debounce = function (fn, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn(arguments);
//     }, delay);
//   };
// };

// const throttle = (fn, delay) => {
//   let last = 0;

//   return (...args) => {
//     const now = new Date().getTime();

//     if (now - last < delay) {
//       return;
//     }
//     last = now;
//     return fn(...args);
//   };
// };

// const betterFunction = debounce(getData, 300);
// const betterFunction = throttle(getData, 3000);

// const debounce = (fn, delay) => {
//   let timer;
//   return () => {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn(arguments);
//     }, delay);
//   };
// };

// const betterFunction = debounce(getData, 700);

// let person = {
//   name: "Suhaas",
//   age: 25,
// };

// let getIntro = function (country, city) {
//   console.log(
//     `name : ${this.name} , age : ${this.age} , country : ${country} , city : ${city}`
//   );
// };

// getIntro.call(person, "India", "Bengaluru");
// getIntro.apply(person, ["India", "bengaluru"]);

// let person2 = {
//   name: "brendan eich",
//   age: 60,
// };

// getIntro.call(person2, "USA", "New york");

// let getIntroPerson = getIntro.bind(person);

// getIntroPerson("India", "Bengaluru");

// Function.prototype.mybind = function (...args) {
//   let obj = this;
//   return function (...args2) {
//     obj.apply(args[0], [args2[0], args2[1]]);
//   };
// };

// let getIntroPersonMyBind = getIntro.mybind(person);

// getIntroPersonMyBind("India", "Bengaluru");

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// multiply(2, 3);

// let multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);

// let multiply = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// let multiplyByTwo = multiply(2);

// multiplyByTwo(3);
// console.log("recursion");

// let a = [5, 6, 78, 45, 23, [2, 4, 12, 1, [3, 8, [56, 34]]], [20, 54, 10]];

// function solve(arr) {
//   let b = [];
//   flatten(arr);
//   function flatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] == "object") {
//         flatten(arr[i]);
//       } else {
//         b.push(arr[i]);
//       }
//     }
//   }
//   return b;
// }
// let b = [];
// function flatten(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "object") {
//       flatten(arr[i]);
//     } else {
//       b.push(arr[i]);
//     }
//   }
//   return b;
// }

// console.log(solve(a));

// let flatArray = a.flat();

// console.log(flatArray);

// const flatten = (nested) => {
//   const flat = [];
//   const handleFlat = (array) => {
//     let counter = 0;
//     while (counter < array.length) {
//       const val = array[counter];
//       if (Array.isArray(val)) {
//         handleFlat(val);
//       } else {
//         flat.push(val);
//       }
//       counter++;
//     }
//   };
//   handleFlat(nested);
//   return flat;
// };

// console.log(flatten(a));
