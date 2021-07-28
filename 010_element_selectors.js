// ELEMENT SELECTORS

// parent object of the browser
console.log(window)

// Single Element Selectors - selects only the first one
console.log(document.getElementById('my-form'));

// new one - works like jQuery
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

// Multiple Element Selectors

// can use id, class, tag anything - new one - returns nodelist - can use array methods on this
console.log(document.querySelectorAll('.item'));

// old - HTML Collection - cant use array methods on this - need to convert it manually to use array methods
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Nitish';
ul.lastElementChild.innerHTML = '<h1> WELCOME !!</h1>';
// innerText returns the visible text contained in a node, while textContent returns the full text. 
// For example, on the following HTML 
// <span>Hello <span style="display: none;">World</span></span>, 
// innerText will return 'Hello', while textContent will return 'Hello World'.
// https://www.geeksforgeeks.org/difference-between-textcontent-and-innertext/

const btn = document.querySelector('.btn');
btn.style.background = 'red';


ul.remove();