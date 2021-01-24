
// CONDITIONALS

// Simple If/Else Statement
const num = 30;

// triple equals matches data type as well
if(num === 10) {
  console.log('num is 10');
} else if(num > 10) {
  console.log('num is greater than 10');
} else {
  console.log('num is less than 10')
}

// Switch
color = 'blue';

// if break not WebGLActiveInfo, all following statements will execute
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue')
    break;
}

// Ternary operator / Shorthand if
const zk = color === 'red' ? 10 : 20;