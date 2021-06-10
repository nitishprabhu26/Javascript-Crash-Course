

// STRINGS
const myName = 'Nitish';
const age = 26;
// Concatenation
console.log('My name is ' + myName + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${myName} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
console.log(val)
// Split into array
val = s.split('');
console.log(val)



// ARRAYS - Store multiple values in a variable

// using array constructor
// const numbers = new Array(1,2,3,4,5);

// dynamically typed. not like below 
// const name:string -- typescript

const numbers = [1,2,3,4,5];
// values can be of any data type
const fruits = ['apples', 'oranges', 'pears', 'grapes', true, 22];
console.log(numbers, fruits);
// an array cant be reassigned

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangoes');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));

// when declared as const, it cant be reassigned
// fruits = []
console.log(fruits);