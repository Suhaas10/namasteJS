console.log("%c promises", "background-color:#FFF;color:#bada55");

// const result = new Promise((resolve, reject) => {
//   console.log(resolve(2));
// });

// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

//promises come into picture when you gotta call some API - remeber web was just html and css, then synch JS came, then becuase of APIs, async JS AJAX came into picture in the first place

//! lets capture the promise;

// let promise = createOrder(cart);

// promise.then((res, rej) => {
//   if (res.ok === true) {
//     let orderId = res.orderId;
//     proceedToPayment(orderId);
//   } else {
//     throw new Error("create order API failed");
//   }
// });

//! .then gives control of our code;

// const HACKERNEWS_API = "https://hn.algolia.com/api/v1/search?query=react";

// const news = fetch(HACKERNEWS_API);

// console.log("promise obj", news);

// console.log(
//   news.then((res) => {
//     console.log(res.json());
//   })
// );

//! fetch returns a promise
//! promise states
//* 1. fulfilled
//* 2. rejected
//* 3, pending

//! promise objects are immutable, you cant edit this? what learn immutable;
//* what is promise ? promise is an object which holds state of Async calls;

// createOrder(cart)
//   .then(() => {
//     proceedToPayment(orderId);
//   })
//   .then(() => {
//     showOrderSummary(paymentInfo);
//   })
//   .then(() => {
//     updateWalletBalance(paymentInfo);
//   });

//*or

// createOrder(cart)
//   .then((orderId) => proceedToPayment(orderId))
//   .then((paymentInfo) => showOrderSummary(paymentInfo))
//   .then((paymentInfo) => updateWalletBalance(paymentInfo));

//! callback hell resolved
//! the above is promise chaining

//! producer - promises- people who write APIs

const cart = ["shoes", "shirts", "belts"];

//! this is how callback hell was resolved using promise chaining
createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    //! dont forget to return the promise here here to enable promise chaining
    return proceedToPayment(orderId);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
    //alert(err);
  })
  .then((oderId) => {
    console.log("no  matter what happens I will be definitely called");
  });

//!producer end API end

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    console.log(orderId);
    resolve("payment succesful");
  });
}

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("cart is not valid");
      reject(err);
    }

    const orderId = "12345";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 2000);
    }
  });

  return pr;
}

function validateCart(cart) {
  return true;
}
