// console.log("immutable");

// let a = [1, 2, 3];

// let b = a;

// let c = "test";
// let d = "test";
// d = "testest";

// // d = [...b];
// // console.log(c);
// // console.log(d);

// const dog1 = {
//   name: "kobe",
//   age: 2,
// };

// const dog2 = {
//   name: "rio",
//   age: 2,
//   nutrition: {
//     protein: 10,
//     carbs: 20,
//   },
// };
// Object.freeze(dog1); // making person Obj immutable
// Object.seal(dog2); // making person Obj quasi-immutable

// dog1.name = "kubala";
// dog1.favfood = "moody fucker";

// dog2.name = "sonam";
// dog2.favfood = "everything";

// console.log(dog1);
// console.log(dog2);
// console.log(dog1.nutrition.protein);

// let fruit1 = {
//   name: "orange",
//   price: 10,
// };

// let fruit2 = {
//   name: "watermelon",
//   price: 50,
// };

// let fruit3 = { ...fruit1 };

// console.log(fruit3 == fruit1);

// function shallowClone(objToBeCloned) {
//   let copiedObj = {};
//   // let keys = Object.keys(objToBeCloned);

//   for (const key in objToBeCloned) {
//     if (Object.hasOwnProperty.call(objToBeCloned, key)) {
//       copiedObj[key] = objToBeCloned[key];
//     }
//   }

//   return copiedObj;
// }

// let fruit4 = shallowClone(fruit2);
// console.log(fruit4 === fruit2);

// let arrA = [1, 2];
// let arrB = [1, 2];

// console.log(arrA === arrB);

let a = 10;
let b = 10;
let c = [1, 2];
let d = c;
d = [3, 4, 5];

console.log(c == d);
