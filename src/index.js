import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//---------------------------
const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers);

//same thing with foreach()
//---------------------------
// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
//---------------------------
const mapNum = numbers.filter(function (num) {
  return num > 10;
});
console.log(mapNum);

//same thing with foreach()
//---------------------------
// var arrayNum = [];
// numbers.forEach(function (num) {
//   if (num > 10) arrayNum.push(num);
// });
// console.log(arrayNum);

//Reduce - Accumulate a value by doing something to each item in an array.
//---------------------------

const numReduce = numbers.reduce(function (accumulator, currentnumber) {
  return accumulator + currentnumber;
});
console.log(numReduce);
//same thing with foreach()
//---------------------------

// var numReduce = 0;
// numbers.forEach(function (currentNum){
//   numReduce += currentNum;
// })
// console.log(numReduce);

//Find - find the first item that matches from an array.
const find = numbers.find(function (num) {
  return num > 10;
});
console.log(find);
//FindIndex - find the index of the first item that matches.
const findIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(findIndex);

//challenge.
const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
