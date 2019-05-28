////////// INHERITANCE EXERCISE ////////////

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

////////// PERSON EXERCISE ////////////

class Person {
    constructor (name) {
        this.name = name;
        this.friends = [];
    }
    addFriend(friend) {
        this.friends.push(friend)
    }
    createGreeting(other) {
        console.log(`Yo ${other.name}! from ${this.name}.`);
    }
    greet(other) {
        this.createGreeting(other);
    }
    lazyGreet(other) {
        setTimeout(()=> {
            this.greet(other)
        }, 2000);
    }
    createGreetingforFriends() {
        this.friends.map(friend => {
            this.createGreeting(friend)
        });
    }
}

const name1 = new Person('Eli');
const name2 = new Person('RJ');
const name3 = new Person('JC');
//test.addFriend(test2);
//test.createGreeting(test2);
//test.greet(test2);
//name1.lazyGreet(name2);
name1.addFriend(name2);
name1.addFriend(name3);
name1.createGreetingforFriends();