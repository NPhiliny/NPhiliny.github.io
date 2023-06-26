
// sophisticated insult
var body = ["head", "hand", "face", "mouse"];
var adj = ["hairy", "colorful", "huge", "nice"];
var animal = ["bear", "mouse", "cat", "giraf"];
var animalBody = ["ass", "body", "skin"];

var bR = body[Math.floor(Math.random() * body.length)];
var adjR = adj[Math.floor(Math.random() * adj.length)];
var animalR = animal[Math.floor(Math.random() * animal.length)];
var anmRpOfB = animalBody[Math.floor(Math.random() * animalBody.length)];

var answ = "Your" + " " + br + " " + "is more" + " " + adjR + " " + "than" 
+ " " + animalR + "'s" + " " + anmRpOfB + ".";

console.log(answ);



