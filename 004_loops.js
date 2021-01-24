// LOOPS

// For
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
  }
  
  // While
  let i = 0
  while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
  }
  
  // Loop Through Arrays
  // For Loop
  for(let i = 0; i < todos.length; i++){
    console.log(` Todo ${i + 1}: ${todos[i].text}`);
  }
  
  // For...of Loop
  for(let todo of todos) {
    console.log(todo.text);
  }
  

