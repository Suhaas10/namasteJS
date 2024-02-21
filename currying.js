let multiply = function (x, y) {
  console.log(x * y);
};

multiplyby2 = multiply.bind(this, 2);

multiplyby2(5);

// let multiply = function (x) {
//   return function (y) {
//     return x * y;
//   };
// };

// multiplyby3 = multiply(3);
// console.log(multiplyby3(10));

Function.prototype.mybind = function (...args) {
  let params = args.slice(1);
  let fn = this;
  return function (...args2) {
    fn.apply(args[0], [params, ...args2]);
  };
};

multiplyby4 = multiply.mybind(this, 4);
multiplyby4(6);
