//! different ways of including js in HTML, advantage of sourcing it from separate JS file

//! https://javascript.info/structure - JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.That’s because JavaScript does not assume a semicolon before square brackets [...].

// alert(3 + 1 + 2);

//!https://javascript.info/strict-mode

"use strict";

//this code works the modern way

//!https://javascript.info/types

//? Number data type include both integer and float
//? special numeric values - infinity, -infinity and NaN
//? NaN represents a computational error

//?NaN is sticky

//?undefined vs null vs not defined
//?undefined - value is undefined
//? null - value is empty,non-existing , value is nothing, and null is an object

//? string, number and boolean are primitive data types - their values can contain only single thing

//?objects and symbols - these are special data types/ not primitive

//?symbols

//? typeof is an operator not a function

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof Infinity);
// console.log(typeof NaN);
// console.log(typeof Math);
// console.log(typeof alert);
// console.log(typeof (2 + 2));
// console.log(typeof x);

//!https://javascript.info/alert-prompt-confirm

//alert("alert"); //modal window
// let name = prompt("what is your name", ["John Doe"]);
// alert("Hi " + name);
// alert(`Hi ${name}`);

// let result = confirm("question");
// alert(result);

//!All these methods are modal: they pause script execution

//! https://javascript.info/type-conversions
//!Type conversions

// console.log(typeof ("6" / "2"));

//!basic operators - maths
//! unary and binary/ operands / operators

// alert(4 ** 2);

//!string conactenation with binary +

// alert("my" + "name");

//!Coercion
//!Coercion priority order SNB (string, number, boolean)
// alert("2" + 7);
// alert(true - 1);

//!OPEERATOR  precedence unary > binary
//! check table of precedence here https://javascript.info/operators

//! chaining assignments

//! BITWISE operators

//!lexicographical

//call, apply and bind

//callbacks, promises, fetch , async-await

// let p = new Promise((resolve, reject) => {
//   let a = 2 + 1;
//   if (a == 2) {
//     resolve("promise rsolved - success");
//   } else {
//     reject("promised not resolved - failed");
//   }
// });

// p.then((message) => {
//   console.log("this is in the then ------" + message);
// }).catch((message) => {
//   console.log("this is in the catch ------" + message);
// });

// Promise.all

// Promise.race

///async await --- errors are handles using try catch block

// async function doWork(){
//     try{
//         const response = await getResponse()
//     }catch(err){

//     }
// }

//fetch

// fetch("https://randomuser.me/api")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       console.log("error");
//     }
//   })
//   .then((data) => {
//     console.log(data.info);
//   })
//   .catch((err) => console.log(err));

//!pure functions

// let person = {};

// Array.prototype.cube = function (arr) {
//   return arr.map((x) => x ** 3);
// };

// let arr = [1, 2];
// console.log(arr.cube(arr));

// let bob = {
//   clothingChoice: "cargo shorts",
//   complimentSelf: function () {
//     console.log(`${this.clothingChoice} are very stylish, so I am stylish.`);
//   },
// };

// bob.complimentSelf();

// let complimentBob = bob.complimentSelf.bind(bob);
// complimentBob();

// Function.prototype.mybind = function (args) {
//   let fn = this;
//   console.log(this);
//   return function (...args2) {
//     fn.apply(args, [...args2]);
//   };
// };

// let complimentBob = bob.complimentSelf.mybind(bob);
// complimentBob();
// const urls = [
//   "https://jsonplaceholder.typicode.com/todos/1",
//   "https://jsonplaceholder.typicode.com/todos/2",
//   "https://jsonplaceholder.typicode.com/todos/3",
// ];

// async function callUrls(url) {
//   for (let i = 0; i < url.length; i++) {
//     console.log(url[i]);
//     let response = await fetch(url[i]);
//     console.log(response);
//   }
// }

// callUrls(urls);

// const user = {
//   name: "Marium",
//   yearOfBirth: 1999,
//   calcAge: function () {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.yearOfBirth;
//   },
// };
