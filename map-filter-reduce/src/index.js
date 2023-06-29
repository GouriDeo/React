import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);
// console.log(newNumbers);

const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

// var newNum = [];
// function double(x) {
//   newNum.push(x * 2);
// }
// numbers.forEach(double);
// console.log(newNum);

// var newNum = [];
// numbers.forEach(function (x) {
//   newNum.push(x * 2);
// });
// console.log(newNum);

//Filter - Create a new array by keeping the items that return true.

const newNum = numbers.filter(function (num) {
  return num > 10;
});
console.log(newNum);

// var newNumber = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumber.push(num);
//   }
// });
// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNums = 0;
// numbers.forEach(function (num) {
//   newNums += num;
// });
// console.log(newNums);

var newNums = numbers.reduce(function (accumulator, cunrrentNumber) {
  return (accumulator += cunrrentNumber);
});
console.log(newNums);

//Find - find the first item that matches from an array.

const newN = numbers.find(function (num) {
  return num > 10;
});
console.log(newN);

//FindIndex - find the index of the first item that matches.

const newNm = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNm);

console.log(emojipedia);
