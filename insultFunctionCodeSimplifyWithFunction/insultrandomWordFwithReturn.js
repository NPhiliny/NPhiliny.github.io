// book example
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)]
};
var randomWords = ["Planet", "Worm", "Flower", "Computer"];

console.log(pickRandomWord(randomWords));
console.log(pickRandomWord(["Charlie", "Raj", "Kate", "Sandy"]));

// make a function from anmRpOfB, test book example
// var animalBody = ["ass", "body", "skin"];
// var anmRpOfB = function (animalBody) {
//     return animalBody[Math.floor(Math.random() * animalBody.length)];
// };
// console.log(anmRpOfB(animalBody))