const prompt = require("prompt-sync")();
var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "lionchik"
];
// pick a random word
var pickWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};
var pickWordR = pickWord(words);
    console.log(pickWordR);

// setup the answer array
var setupAnswerArray = function () {
    var answerArray = [];
    for (var i = 0; i < pickWordR.length; i++) {
        answerArray[i] = "_";
    }
    return answerArray;
};
var showPlayerProgress = function (answerArray) {
    console.log(answerArray.join(" "));
};
var getGuess = function () {
    var guess = prompt("Guess a letter, or click Cancel to stop playing.");
    return guess.toLowerCase();
};
var updateGameState = function (guess, words, answerArray) {
    var  guessAppeared = 0;
    for (var j = 0; j < words.length; j++) {
        if (words[j] === guess && answerArray[j] == "_") {
            answerArray[j] = guess;
            guessAppeared += 1;
        }
    }
    return guessAppeared;
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    // show the answer and congratulate the player
    var word = answerArray.join(" ");
    console.log("Good job! The answer was " + word);
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null || guess == "") {
        break;
    } else if (guess.length !== 1) {
        console.log("Please enter a single letter.");
    } else {
        var correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
}
showAnswerAndCongratulatePlayer(answerArray);
