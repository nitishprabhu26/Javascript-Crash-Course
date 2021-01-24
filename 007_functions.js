// FUNCTIONS
function greet(greeting = 'Hello', name) {
    if(!name) {
      // console.log(greeting);
      return greeting;
    } else {
      // console.log(`${greeting} ${name}`);
      return `${greeting} ${name}`;
    }
  }
  
  console.log('Howdy', "Nitish")
  
  // ARROW FUNCTIONS - mentionng return not needed
  const greeting = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
  console.log(greeting('Hi'));