  // HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
    console.log(`${i + 1}: ${todo.text}`);
    console.log(myTodos);
  });
  
  // map() - Loop through and create new array - "returns an array"
  const todoTextArray = todos.map(function(todo) {
    return todo.text;
  });
  
  console.log(todoTextArray);
  
  // filter() - Returns array based on condition
  const todo1 = todos.filter(function(todo) {
    // Return only todos where its completed
    return todo.isComplete === true; 
  });
  console.log(todo1);

//   combination of map and filter
  // filter() - Returns array based on condition
  const todo2 = todos.filter(function(todo) {
    // Return only todos where its completed
    return todo.isComplete === true; 
  }).map(function(todo){
    return todo.text;
  })
  console.log(todo2);