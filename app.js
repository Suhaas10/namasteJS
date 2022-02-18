////episodes are +! here than YT videos as there is intro is E1 on YT

//!VanshSharma gumroad https://vanshsharma.notion.site/Namaste-JavaScript-266c18ecb0de4e5e998ecdc71369f495
//!Saksham Bhatt https://sakshambhatt.hashnode.dev/notes-or-namaste-javascript-by-akshay-saini#heading-footnotes

//!Javascript is synchronous,single threaded,non-blocking?, weakly typed languages(but coercion can be done).
//!multi paradigm programming.
//! e1,12,e3

// var n = 2;

// const square = (num) => {
//   var ans = num * num;
//   return ans;
// };

// var square2 = square(n);
// var square4 = square(4);

//!e4 hoisting, let and const are not hoisted//are actually hoisted but are in temporal dead zone - check javascript info/MDN
//*refer javascript info and obvi MDN
//?cannot access 'a' before initialisation

// var x = 7;

// function getName() {
//   console.log("namaskara JS");
// }

// const getNameArrowSyntax = () => {
//   console.log("namaskara JS");
// };

// getName();
// console.log(x);
// console.log(getName);

///////////

// getName();
// console.log(x);
// console.log(getName);

// var x = 7;

// function getName() {
//   console.log("namaskara JS");
// }

// const getName = () => {
//   console.log("namaskara JS");
// };

//!e5 - functions and variable environment

//?this code explains exactly how memory and thread of execution GEC,LEC
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

//!e6 - window and this keyboard
//?global space
// var a = 10;

// function b() {
//   var x = 10;
// }

// console.log(window.a);
// console.log(x);
// console.log(this.a);

//!e7 undefined vs not defined
//? memory has been allocated to undefined and it's a keyboard

// console.log(a);
// var a = 7;

// console.log(x);

//? == vs ===
// var a;
// if (a == undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is not undefined");
// }

//? Dynamically/loosely/weakly typed /but coercion can be done

// var a;
// console.log(a);
// a = 10;
// console.log(a);
// a = "hello world";
// console.log(a);

//? dont do this , it's not a mistake but not a good practice 😜 Akshay saini 9:47
// a = undefined;
// console.log(a);

//!e8 - scope chain(node list of GEC,LEC1,LEC2 or chain of lexical envts), scope(global/local) and lexical environment
//!lexical envt - reference to immediate outer scope and it's memory
//*step1
// function a() {
//   console.log(b);
// }

// var b = 10;
// a();

//*step2

// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// var b = 10;
// a();

//*step3 - you can see CLOSURE here

// function a() {
//   var b = 10;
//   c();
//   function c() {
//     console.log(b);
//   }
// }

// a();

//*step4

// function a() {
//   var b = 10;
//   c();
//   function c() {}
// }

// a();
// console.log(b);

//!e9 - let,const(es6), closure, temporal dead zone
//! syntax error, type error, reference error
//!memory is allocated even before 1 line of code is executed/ correct right check execution context diagram
//!e4 hoisting, let and const are not hoisted//are actually hoisted but are in temporal dead zone - cannot access a before initialisation
//! let and const are block scoped  , var is global scoped/function scoped
//! hoisted means it has been allocated memory
//!lexical - one inside another

//*1

// console.log(a);
/***
 * 
 temporal dead zone *
 */
// let a = 100; //cannot access a before initialistaion //reference error
// var b = 10; //undefined

//*2
// let a = 100; //do window.a //let is stricter than var
// console.log(a);
// var b = 10; //do window.b

//*3

// console.log("sadsaddsas");
// let a = 10;
// let a = 100; //syntax error

//*4

// let a = 10;
// var a = 10; //!let is fucking strict
//*5

// var a = 10;
// var a = 100;

//*6
//!const is fucking fucking strict// it has to be declared and initialized at inception

// let a;

// a = 10; // totally

// const b;

// b= 100; // can't do // missing initiaLizer in const declaration

//*7

// const a = 1000;

// a = 1000000;//type error // because it's const type

//!e10 block scope and shadowing and block

//*1
// {
//this is a block or compound statement
// }

// if (true) true;
// if (true) {
//   console.log("this is a block");
//   console.log("multiple lines");
// }

//*2

// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//*3 //block scope and script scope
// var a = 20;
// let b = 200;
// const c = 2000;
// {
//   var a = 10;
//   let b = 100;
//   const c = 2000;
//   console.log(a);
//   console.log(b);
//   console.log(d);
// }

// console.log(a);
// console.log(b);
// console.log(c);

//*4 shadowing
//? let can be shadowed by let, var by var, let cannot be shadowed by var because it's fucking strict but otherwise can be shadowed(var by let)

// var a = 20;
// let b = 200;
// const c = 2000;
// {
//   var a = 10;
//   let b = 100;
//   const c = 1000;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

//*illegal shadowing
// let d = 20;
// {
//   var d = 20;
// }

// const a = 1;
// {
//   const a = 10;
//   console.log(a);
//   {
//     const a = 20;
//     console.log(a);
//     {
//       const a = 200;
//       console.log(a);
//     }
//   }
// }
// console.log(a);
// {
//   let a = 10;
//   {
//     console.log(a);
//   }
// }

// console.log(a);

// const a = 1;
// {
//   const a = 10;
//   {
//     const a = 20;
//     console.log(a);
//     {
//       const a = 200;
//       console.log(a);
//     }
//   }
// }
// console.log(a);

// var a = 1;
// {
//   var a = 10;
//   console.log(a);
//   {
//     var a = 20;
//     console.log(a);
//     {
//       var a = 200;
//       console.log(a);
//     }
//   }
// }
// console.log(a);

//!e11  - closure, 11:39 green tea

// function x() {
//   var a = 7;

//   // function y() {
//   //   console.log(a);
//   // }
//   // return y;
//   //*or

//   return function y() {
//     console.log(a);
//   };
// }

// var z = x();
// console.log(z);
// /*  ......
// .....1000 lines...
// .......*/
// z();

//!gotchaaaaas //garbage collection

// function x() {
//   var a = 7;

//   function y() {
//     console.log(a);
//   }

//   a = 100;
//   return y;
// }

// var z = x();
// console.log(z);
// z(); //?prints 100 as you know memory is allocated first even before 1 line of code is run thus a = 7 is shadowed by a=100 during memory allocation
// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;

//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

//!Uses of closures:
//?--------- 0 Data hiding
//? -------- 1 module design pattern
//? -------- 2 currying
//? -------- 3 functions like once
//? -------- 4 memoize
//? -------- 5 maintaining state in async world
//? -------- 6 setTimeouts
//? -------- 7 iterators
//? -------- 8 and many more .....

//!e12 https://www.youtube.com/watch?v=eBTBG4nda2A&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=14

//! time, tide and javascript waits for none
//!this code makes js asynchronous but double threaded????
// function x() {
//   var i = 1;
//   setTimeout(() => {
//     console.log(i);
//   }, 3000);
//   console.log("namaskara JS");
// }

// x();

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//!solving with var using closure
// for (var i = 0; i < 5; i++) {
//   function close(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   }
//   close(i);
// }

//!JS interview

//? what is constructor
//todo
//? disadvantages of closure
//? garbage collector

//!es13 -First class functions

// a();
// b();
//? Function statement or Function declaration

// function a() {
//   console.log("a called");
// }

//? Function expression
// var b = function () {
//   console.log("b called");
// };

//? difference between these the above 2 - answer is hoisting

//?Anonymous Function

// function() {

// }

//? Named function expression

// var b = function xyz() {
//   console.log("b called");
// };

//!gotchaaa
// b();
// xyz();

//?parameters vs arguments

//?First class functions -
//! the ability of function to be used as values, can be passed as arguments and can be returned from another function

//!https://www.youtube.com/watch?v=btj35dh3_U8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=16
//!Callbacks/setTimeout makes it asynch i.e. the function passed as argument to setTimeout will be executed after timer expires, the next lines don't wait to execute. This is asynch

//? what is a callback function
//* y is a callback function
//*callback
//* check on call stack how setTimeout callback fn. pops up in call stack
// setTimeout(() => {
//   console.log("hello");
// }, 10000);

//*function being passed as argument to another function

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

//? main thread and
//? JavaScript is a synchronous and single-threaded, blocking - non-blocking thread
//? blocking the main thread - never block main thread use asynch fns. instead

//?garbage collection & remove event listeners

// function attachEventListener() {
//   let count = 0;
//   document
//     .getElementById("button-click-me")
//     .addEventListener("click", function xyz() {
//       console.log("button clicked", count++);
//     });
// }

// attachEventListener();

//!https://www.youtube.com/watch?v=8zKuNo4ay8E&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=17
//!event loop

//!callstack

//!LIFO - callstack -GEC holds function a then LEC holds function call then popped of after "a" is console logged

// function a() {
//   console.log("a");
// }

// a();
// console.log("end");

////!callstack is inside in JS engine is inside Browser

//!Browser
//? Timer
//? search engine
//? local storage
//? callstack
//? DOM
//? bluetooth
//? geolocation
//? Devtools (console,source, elements ....)

//? WEB APIs gives us access to all the above
//? WEB APIs - setTimeout, console.log, DOM APIs(document.), fetch() - which lets us call servers
//? window is the global object - outermost scope also the tab that you see
//? window.setTimeout, window.localstorage, window.console.log

// console.log("start");

// setTimeout(() => {
//   console.log("callback");
// }, 5000);

// console.log("end");

//! for above there is an async callback , callbacks are not pushed into callstack directly
//! but through the callback queue then into callstack
//! eventloop(superhero) pushes cb inside cb queue into callstack after 5000ms
//! even the eventlistener callbacks are pushed inside callback queue first

// document
//   .getElementById("button-click-me")
//   .addEventListener("click", function callbackfn() {
//     console.log("callback");
//   });

//! how does fetch work

//! fetch callbacks go inside microtask queue //? fetch is a promise

//! microtask queue gets better preference than callback queue , execute below and check

//! the callback function coming from promises(fetch) and mutation observer go to microtask queue

//! all other callbacks(settimeout, eventlisteners) go to callback queue(task queue)

//! starvation of callback queue because of lot of tasks inside microtask queue
// console.log("start");

// setTimeout(() => {
//   console.log("callback fn of timeout called");
// }, 5000);

// fetch("https://randomuser.me/api").then(() => {
//   console.log(
//     "callback fn of fetch which is called only after server responds with randomusers"
//   );
// });

// console.log("end");

//! don't forget that callstack is inside JS Engine, ultimately tasks inside task queue(callback queue) and microtask queue has to be executed in call stack only

//!mutation observer Mutation Observer: MutationObserver is a built-in object that observes a DOM element and fires a callback when it detects a change.

// const mutationObserver = new MutationObserver((entries) => {
//   console.log(entries);
// });

// const parent = document.querySelector(".parent");

// mutationObserver.observe();
