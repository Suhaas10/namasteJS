let counter = 0;
const getData = () => {
  console.log("fetching data...." + counter++);
};

let throttle = function (fn, interval) {
  let callFalg = true;
  return () => {
    let context = this;
    let args = arguments;
    if (callFalg) {
      fn.apply(context, args);
      callFalg = false;
      setTimeout(() => {
        callFalg = true;
      }, interval);
    }
  };
};

const betterFunction = throttle(getData, 2000);
