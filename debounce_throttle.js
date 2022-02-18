// console.log("deb throt");

// let counter = 0;
// let getData = () => {
//   console.log("getdata called-----" + counter++);
// };

// let debounce = function (fn, delay) {
//   let timer;
//   return function () {
//     let context = this;
//     args = arguments;
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(context, arguments);
//     }, delay);
//   };
// };

// // let betterFunction = debounce(getData, 300);

// let throttle = function (fn, interval) {
//   let callFalg = true;
//   return () => {
//     if (callFalg) {
//       fn();
//       callFalg = false;
//       setTimeout(() => {
//         callFalg = true;
//       }, interval);
//     }
//   };
// };

// let betterFunction = throttle(getData, 1000);
