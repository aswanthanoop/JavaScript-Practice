import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

const newNumbers = numbers.map((x) => {
  return x * x;
});
const otherMethod = numbers.map((x) => x * x);
console.log(newNumbers);
console.log(otherMethod);

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
const newNum = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const newN = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
var reduc = numbers.reduce(
  (accumulator, currentNum) => accumulator + currentNum
);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
var findI = numbers.find((x) => x > 10);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const findIndo = numbers.findIndex((num) => num > 10);
