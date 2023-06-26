// transform insult from v2 into function
var generateRandomInsult = function (pickRandomWord) {
    var body = ["head", "hand", "face", "mouse"];
    var adj = ["hairy", "colorful", "huge", "nice"];
    var animal = ["bear", "mouse", "cat", "giraf"];
    var animalBody = ["ass", "body", "skin"];
    // Join random string into sentence
    var randomString = "Your" + " " + pickRandomWord(body) + " " + "is more" + " " + pickRandomWord(adj) + " " + "than" 
    + " " + pickRandomWord(animal) + "'s" + " " + pickRandomWord(animalBody) + ".";
    return randomString;    
}
console.log(generateRandomInsult(pickRandomWord));