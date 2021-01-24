// OOP

// Constructor Function
function Person(firstName, lastName, dob) {
    // Set object properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using Date constructor
    
    // instead we use prototype
    // this.getBirthYear = function(){
    //   return this.dob.getFullYear();
    // }
    // this.getFullName = function() {
    //   return `${this.firstName} ${this.lastName}`
    // }
  }
  
  // Get Birth Year
  Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  
  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
  
  
  // Instantiate an object from the class
  const person1 = new Person('John', 'Doe', '7-8-80');
  const person2 = new Person('Steve', 'Smith', '8-2-90');
  
  console.log(person2);
  
  
  console.log(person1.dob.getFullYear());
  console.log(person1.getBirthYear());
  console.log(person1.getFullName());
  
  
  
  // Built in constructors
  const nameObj = new String('Kevin');
  console.log(typeof nameObj); // Shows 'Object'
  const numbr = new Number(5);
  console.log(typeof numbr); // Shows 'Object'