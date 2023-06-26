var body = ["head", "hand", "face", "mouse"];
var adj = ["hairy", "colorful", "huge", "nice"];
var animal = ["bear", "mouse", "cat", "giraf"];
var animalBody = ["ass", "body", "skin"];

var pickRandomWord = function(word) {
    return word[Math.floor(Math.random() * word.length)];
};

var answ = "Your" + " " + pickRandomWord(body) + " " + "is more" + " " + pickRandomWord(adj) + " " + "than" 
+ " " + pickRandomWord(animal) + "'s" + " " + pickRandomWord(animalBody) + ".";

console.log(answ);