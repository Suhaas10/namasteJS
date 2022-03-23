let counter = 0;
const getData = () => {
  console.log("fetching data..." + counter++);
};

const doSomeMagic = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    let context = this;

    let args = arguments;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const betterFunction = doSomeMagic(getData, 300);
