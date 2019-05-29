// class Person {
//     constructor (name) {
//         this.name = name;
//     }
//     teach(subject) {
//         console.log(`${this.name} is now teaching ${subject}`)
//     }
// }
// const teacher = new Person('Eli');
// teacher.teach('math');

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     describe() {
//         console.log(`${this.name}, ${this.age} years old.`)
//     }
// }
// const john = new Person('John', 19);
// john.describe();

//////// FUNCTION CONTEXT /////////

// var person = {
//     firstName : "John",
//     lastName : "Smith",
//     age : 23
// };

// function printFullName() {
//     console.log(this.firstName + " " + this.lastName);
// }

// function printDetails() {
//     console.log(this.firstName + " is " + this.age + " years old");
// }
// // TODO: create bound copies of printFullName and printDetails.
// var boundPrintFullName = printFullName.bind(person);
// var boundPrintDetails = printDetails.bind(person);

// boundPrintFullName();
// boundPrintDetails();