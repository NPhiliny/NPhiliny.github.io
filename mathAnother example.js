    // arrays
var laundery = ["machine for washing", "boiler", "food", "clothes", "instruments"];
var kitchen = ["fridge", "plate", "fork", "knife"];
var enterance = ["shoes", "coat", "hat"]; 
//     // random search
var lS = laundery[Math.floor(Math.random() * laundery.length)];
var kS = kitchen[Math.floor(Math.random() * kitchen.length)];
var eS = enterance[Math.floor(Math.random() * enterance.length)];
    // answer
var ques = "what we have in Laundery, tell 1 item:" + " " + lS + " " +
"ok" + " " + "why kitchen is full of:" + " " + kS + "s" + " " + "go and bring me" + " " + eS + " " + "thanks";

console.log(ques);