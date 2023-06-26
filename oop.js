let dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
};
dog.age = 6;
//add method to obj, it is a F
dog.bark = function() {
    console.log("Woof woof! My name is " + this.name + "!");
};
// console.log(dog);
dog.bark();
//sharing method between multiple objects

let speak = function() {
    console.log(this.sound + "! My name is " + this.name + "!");
};
let  cat = {
    sound: "Miaow",
    name: "Mittens",
    speak: speak
};

cat.speak();

var pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
    };
var horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
    };
pig.speak();
horse.speak();
    