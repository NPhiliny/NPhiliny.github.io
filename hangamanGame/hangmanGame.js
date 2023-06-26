// https://sebhastian.com/javascript-console-input/
// Nadi instalirai s npm install prompt-sync
const prompt = require("prompt-sync")();

var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "lionchik"
];
words.push("dinosavrik");
console.log(words);

// pick a random word
var words = words[Math.floor(Math.random() * words.length)];

// setup the answer array
var answerArray = [];
for (var i = 0; i < words.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = words.length;
var numberOfAttempts = 0;
// the game loop
while (remainingLetters > 0 && numberOfAttempts < words.length + 2) {
    // show  the player their progress
    console.log(answerArray.join(" "));
    // Get a guess from player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    console.log(guess);
    guess = guess.toLowerCase();
    
    if (guess === null || guess == '') {
        // exit the game loop
        break;
    } else if (guess.length !== 1) {
        console.log("please enter a single letter.");
    } else {
        numberOfAttempts++;
        console.log(numberOfAttempts);
        // update the game state with guess
        for (var j = 0; j < words.length; j++) {
            if (words[j] === guess && answerArray[j] == "_") {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    // the end of the game loop
}

if (remainingLetters == 0) {
    // show the answer and congratulate the player
    console.log(answerArray.join(" "));
    console.log("Good job! The answer was " + words);
} else {
    console.log(`Sorry! The answer was ${words}`);
}