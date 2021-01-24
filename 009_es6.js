
// ES6 CLASSES
class Person1 {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // adds it to prototype
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  const persons1 = new Person1('John', 'Doe', '7-8-80');
  console.log(persons1.getBirthYear());