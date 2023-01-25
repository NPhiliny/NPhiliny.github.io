
// Use Join it with " "
var yY = ["Your"];
var iI = ["is more"];
var tT = ["than"];
var body = ["head", "hand", "face", "mouse"];
var adj = ["hairy", "colorful", "huge", "nice"];
var animal = ["bear", "mouse", "cat", "giraf"];
var s = ["'s"];
var bR = body[Math.floor(Math.random() * body.length)];
var adjR = adj[Math.floor(Math.random() * adj.length)];
var animalR = animal[Math.floor(Math.random() * animal.length)]
var anmRpOfB = body[Math.floor(Math.random() * body.length)];
var conR = yY.concat(bR, iI, adjR, tT, animalR, s, anmRpOfB);
console.log(conR)