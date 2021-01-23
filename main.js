// LOGGING OUTPUT
// alert('Hello World'); 
// Do not use for debugging. Stops script and only strings

// https://developer.mozilla.org/en-US/docs/Web/API/console
console.log("HI !")
console.error("This is an error")
console.warn("This is a warning")
// https://developer.mozilla.org/en-US/docs/Web/API/console


// VARIABLES - var, let, const

// Var- globally scoped
// let, const- globally scoped
// Const - cant reassign value, use only if you wont reassign value, 

let age = 30;
// let can be re-assigned, const can not
age = 31;


// Data types- String, Number, Boolean, null, undefined
// Primitive - directly assigned to memory
// string
const name = 'Nitish';
// number
age = 26;
const rating = 3.5;
// boolean
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type

// object is output, but its null
// Null. In JavaScript null is "nothing". ... Unfortunately, in JavaScript, the data type of null is an object. 
// You can consider it a bug in JavaScript that typeof null is an object.
console.log(typeof x);
console.log(typeof z);


// STRINGS

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

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
