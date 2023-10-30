var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.
const filterNum = numbers.filter(function (num) {
  return num > 10;
});
console.log(filterNum);
//Reduce - Accumulate a value by doing something to each item in an array.

var redNumber = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});
console.log(redNumber);
//Find - find the first item that matches from an array.
const greatNumber = numbers.find(function (x){
  return x<10;
})
console.log(greatNumber);
//FindIndex - find the index of the first item that matches.
const indexNumber = numbers.findIndex(function(x) {
  return x>2;
})
console.log(indexNumber);