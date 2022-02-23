//! 1------------ let vs const
//! both are variables and block scoped, both are hoisted but not initialed both can be used for binding
//! let can be reassigned but not const.(don't confuse this with immutability as const obj can be reassigned)

//! does work with objects

// const a = {};

// a.some = 5;

// console.log(a);

//! 2---------- when should you use redux

//! 3----------dangerouslySetInnerHTML(directly updates real DOM in react) vs innerHTML - webaxn

//! 4----------how to center a div

//! 5----------invert a binary tree

//        a
//     /     \
//    b      c
//   /  \   /   \
//  d    e  f

// let obj = {
//   val: "A",
//   left: {
//     val: "B",
//     left: {
//       val: "D",
//     },
//     right: {
//       val: "E",
//     },
//   },
//   right: {
//     val: "C",
//     right: {
//       val: "F",
//     },
//   },
// };
// console.log(JSON.stringify(obj));

// function invertTree(node) {
//   if (node.left) {
//     let left = node.left;
//     let right = node.right;
//     node.right = left;

//     node.left = right;
//     invertTree(left);
//     invertTree(right);
//   }

//   return node;
// }

// console.log(invertTree(obj));
// console.log(JSON.stringify(obj));

//! 6----------rabbit question
