//compose

function compose(...arrayOfFunctions) {
  return function (...args) {
    let res = Number(args);
    for (let i = arrayOfFunctions.length - 1; i >= 0; i--) {
      const currentFn = arrayOfFunctions[i];
      res = currentFn(res);
    }
    return res;
  };
}

function pipe(...arrayOfFunctions) {
  return function (...args) {
    let res = Number(args);
    for (let i = 0; i < arrayOfFunctions.length; i++) {
      const currentFn = arrayOfFunctions[i];
      res = currentFn(res);
    }
    return res;
  };
}

function addTen(number) {
  return number + 10;
}

function square(number) {
  return number * number;
}

let composedFn = compose(addTen, square, addTen);

// console.log(composedFn(30));

const sum = (a) => {
  console.log("a", a);
  return (b) => {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};
console.log("sum", sum);
console.log(sum(1)(2)());
//pipe

//memoize

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let n = args[0]; // just taking one argument here
    if (n in cache) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      let result = fn(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoize2 = (func) => {
  const cache = {};
  return (...args) => {
    console.log(cache);
    let strKey = args.join(",");
    if (!cache[strKey]) {
      console.log("adding to cache!");
      cache[strKey] = func.apply(this, args);
    }
    console.log("fetching from cache!");
    return cache[strKey];
  };
};
//tanvi baranwal signeasy
// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log("x" + x);
//   }
//   console.log(x);
//   console.log(y);
// })();
