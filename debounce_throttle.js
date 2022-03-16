// console.log("deb throt");

let counter = 0;

let getData = () => {
  console.log("getdata calls-----" + counter++);
  //   console.log("getdata debounce calls-----" + debounceCounter++);
  //   console.log("getdata debounce calls-----" + throttleCounter++);
};

let debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, arguments);
    }, delay);
  };
};

let debounceFunction = debounce(getData, 300);

let throttle = function (fn, interval) {
  let callFalg = true;
  return () => {
    if (callFalg) {
      fn();
      callFalg = false;
      setTimeout(() => {
        callFalg = true;
      }, interval);
    }
  };
};

let throttleFunction = throttle(getData, 1000);
