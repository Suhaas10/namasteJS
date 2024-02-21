// Function.prototype.myBind = function mybind(obj) {
//   console.log(obj);
// };

//let obj = mew Object();
//Object.prototype === obj.__ptoto__

//mybind

//this keyword

//debounce

//multiply function currying = fn(a)(b)(c)

who = "outer";

const obj = {
  who: "inner",
  whoAmI: function () {
    console.log(this.who);
  },
  whoAmI2: () => {
    console.log(this.who);
  },
  whoAmI3: function () {
    const f = () => {
      console.log(this.who);
    };
    return f;
  },
  whoAmI4: (h = () => {
    function g() {
      console.log(this.who);
    }
    return g;
  })
};

obj.whoAmI();
obj.whoAmI2();
obj.whoAmI3()();
obj.whoAmI4()();

function x() {
  const c = 10;
}

//c = 100;
x();
console.log(c);
