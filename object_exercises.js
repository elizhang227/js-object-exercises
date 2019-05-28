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

// class Person {
//     constructor (name) {
//         this.name = name;
//         this.friends = [];
//     }
//     addFriend(friend) {
//         this.friends.push(friend)
//     }
//     createGreeting(other) {
//         console.log(`Yo ${other.name}! from ${this.name}.`);
//     }
//     greet(other) {
//         this.createGreeting(other);
//     }
//     lazyGreet(other) {
//         setTimeout(()=> {
//             this.greet(other)
//         }, 2000);
//     }
//     createGreetingforFriends() {
//         this.friends.map(friend => {
//             this.createGreeting(friend)
//         });
//     }
// }

// const name1 = new Person('Eli');
// const name2 = new Person('RJ');
// const name3 = new Person('JC');
// //test.addFriend(test2);
// //test.createGreeting(test2);
// //test.greet(test2);
// //name1.lazyGreet(name2);
// name1.addFriend(name2);
// name1.addFriend(name3);
// name1.createGreetingforFriends();

/////// JS Objects and Constructors ///////

// function Person(name, email, phone) { 
//     this.name = name; 
//     this.email = email; 
//     this.phone = phone; 
// } 

// Person.prototype.greet = function(other) { 
//     console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
// };

// const sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');
// const jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

// sonny.greet(jordan);
// jordan.greet(sonny);
// console.log(sonny.email, sonny.phone);
// console.log(jordan.email, jordan.phone);

/////// CARD CONSTRUCTOR //////

class Card {
    constructor (point, suit){
        this.point = point;
        this.suit = suit;
    }
}

Card.prototype.getImageUrl = function() {
    console.log('images/5_of_diamonds.png');
}

class Hand {
    constructor (){
        this.handhand = [];
    }
    addCard(card) {
        this.handhand.push(card)
    }
    getPoints() {
        let i = 0;
        while (i < this.handhand.length - 1) {
            if (this.handhand[i].point >= 10) {
                this.handhand[i].point = 10;
                }
            if (this.handhand[i+1].point >= 10) {
                this.handhand[i+1].point = 10;
                }
            let sum = this.handhand[i].point + this.handhand[i+1].point;
            console.log(sum)
            i++;
        }
    }
}


//const myCard = new Card(5, 'diamonds');
// console.log(myCard.point);
// console.log(myCard.suit);
//myCard.getImageUrl();
const myHand = new Hand();
myHand.addCard(new Card(6, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
myHand.getPoints()