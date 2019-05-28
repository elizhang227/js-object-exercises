// function Parent (firstName, lastName, eyeColor, hairColor) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.eyeColor = eyeColor;
//     this.hairColor = hairColor;
// }

// function Child (firstName, lastName, eyeColor, hairColor) {
//     Parent.call(this, firstName, lastName, eyeColor, hairColor);
// }

// Child.prototype = Object.create(Parent.prototype);

// const mom = new Parent('Alice', 'Wong', 'brown', 'black')
// const daughter = new Child('Ilene', mom.lastName, mom.eyeColor, 'brown');

// console.log(mom);
// console.log(daughter);

function Person(name) { 
    this.name = name; 
    this.friends = []; 
} 

Person.prototype.addFriend = function(friend) { 
    this.friends.push(friend); 
}; 

Person.prototype.createGreeting = function(other) { 
    return 'Yo ' + other.name + '! from ' + this.name + '.'; 
};

Person.prototype.greet = function(other) {
    console.log(this.createGreeting(other)); 
};

class Person {
    constructor (name) {
        this.name = name;
    }
    addFriend 
}