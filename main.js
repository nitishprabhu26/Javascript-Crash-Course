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
// In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. 
// The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). 
// Consequently, null had 0 as type tag, hence the "object" typeof return value.
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




// OBJECT LITERALS
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }
  
//   pulling values out of an object - destructuring
  const {firstName, lastName, address:{city}} = person;
  console.log(firstName, lastName, city)

  // Get single value
  console.log(person.firstName)
  
  // Get array value
  console.log(person.hobbies[1]);
  
  // Get embedded object
  console.log(person.address.city);
  
  // Add property
  person.email = 'jdoe@gmail.com';
  
  // Array of objects
  const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];
  
  // Get specific object value
  console.log(todos[1].text);
  
  // Format as JSON
  console.log(JSON.stringify(todos));