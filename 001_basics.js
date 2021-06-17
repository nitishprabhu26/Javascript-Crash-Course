// LOGGING OUTPUT
// alert('Hello World'); 
// Do not use for debugging. Stops script and only strings

// https://developer.mozilla.org/en-US/docs/Web/API/console
console.log("HI !")
console.error("This is an error")
console.warn("This is a warning")
// https://developer.mozilla.org/en-US/docs/Web/API/console


// VARIABLES - var, let, const

// Var- function or globally scoped
// let, const- block level scoped
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
// In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. 
// The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). 
// Consequently, null had 0 as type tag, hence the "object" typeof return value.
console.log(typeof x);
console.log(typeof z);


// Hoisting
// let - not hoisted
// var - declaration of variable hoisted to top of the code. (not initializations)
