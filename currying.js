// let multiply = function (x, y) {

//   console.log(x * y);
// };

// multiplyby2 = multiply.bind(this, 2);

// multiplyby2(5);

let multiply = function (x) {
  return function (y) {
    return x * y;
  };
};

multiplyby3 = multiply(3);
console.log(multiplyby3(10));
