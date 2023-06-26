// #1 p. 122 awesome animals; for loop; task: add to array item "awesome"
// var animals = ["pinguin", "crocodile", "straus"];
// var a = "awesome ";
// for (var i = 0; i < animals.length; i++) {
//     var s = animals[i] = a + animals[i];
//     console.log(s);
// }
//#2 p.122 random string generator
// var alph = "abcdefghijklmnopqrstuvwxyz";
// // console.log(alph[0]);
// var random = "";
// while (random.length < 6) {
// var x  = alph[Math.floor(Math.random() * alph.length)];
// var random = random + x;
// };
// console.log(random);

// #3replace 4-A; 3-E; 1-I; 0-O; and switch toUpperCase
var input = "javascript is awesome";
var output = "";
for(var i = 0; i < input.length; i++ ) {
    if (input[i] == "i") {
        output += "1";
    } else if (input[i] == "a") {
        output +="4";
    } else if (input[i] == "o") {
        output +="0";
    } else if (input[i] == "e") {
        output +="3";
    } else {
        output += input[i];
    }
    var outputResult = output.toUpperCase();
}
console.log(outputResult);
 