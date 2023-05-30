Moveworks interview

// import React, { useEffect, useState } from "react";
// import fetch from "./fetch";
// import "./styles.css";

// async function start() {
//   const data = await fetch("/");
//   return data;
// }

// export default function App() {
//   const [data, setData] = useState({});

//   useEffect(
//     () =>
//       async function () {
//         const apiData = await start();
//         setData(apiData);
//       },
//     []
//   );

//   // {
//   //   company: "matter inc",
//   //   year: [2014, 2015, 2016, 2017, 2018, 2019],
//   //   quarters: ["Q1", "Q2", "Q3", "Q4"],
//   //   incomes: [
//   //     [27235, 20009, 20088, 30882],
//   //     [29349, 29933, 23948, 36499],
//   //     [24994, 29983, 29497, 39583],
//   //     [30239, 21097, 23984, 40092],
//   //     [29993, 22323, 19443, 40353],
//   //     [31932, 30388, 29488, 51231]
//   //   ]
//   // }

//   console.log(data);

//   return (
//     <div className="App">

//       {data.company}
//       {data.year}
//     </div>
//   );
// }

// /*

// Grid 1
// Year | Q1 | Q2 | Q3 | Q4 | Total |
//       input|input|input|
// 2014 | 27235 | 20009 | 20088 | 30882 | 98214
// 2015 | 29349 | 29933 | 23948 | 36499 | 119729
// 2016 | 24994 | 29983 | 29497 | 39583 | 124057
// 2017 | 30239  |21097 | 23984 | 40092 | 115412
// 2018 | 29993 | 22323 | 19443 | 40353 | 112112
// 2019 | 31932 | 30388 | 29488 | 51231 | 143039
 
 
// Grid 2
// Year | 2014 |  2015 | 2016 | 2017 | 2018 | 2019
// Q1 | 27235 | 29349 | 24994 | 30239 | 29993 | 31932
// Q2 | 20009 | 29933 | 29983 | 21097 | 22323 | 30388
// Q3 | 20088 | 23948 | 29497 | 23984 | 19443 | 29488
// Q4 | 30882 |  36499 | 39583 | 40092 | 40353 | 51231
// Total | 98214 | 119729 | 124057 | 115412 | 112112 | 143039

// */
