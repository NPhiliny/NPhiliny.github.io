
// sophisticated insult
var body = ["head", "hand", "face", "mouse"];
var bR = body[Math.floor(Math.random() * body.length)];
var adj = ["hairy", "colorful", "huge", "nice"];
var adjR = adj[Math.floor(Math.random() * adj.length)];
var animal = ["bear", "mouse", "cat", "giraf"];
var animalR = animal[Math.floor(Math.random() * animal.length)];
var animalBody = ["ass", "body", "skin"];
var anmRpOfB = animalBody[Math.floor(Math.random() * animalBody.length)];
var answ = "Your" + " " + bR + " " + "is more" + " " + adjR + " " + "than" 
+ " " + animalR + "'s" + " " + anmRpOfB + ".";

console.log(answ);