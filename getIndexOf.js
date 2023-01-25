var dino = [
    "rex", 
    "diplodocus", 
    "triceraptor", [
        "f",
        5
    ]
];
dino[0]="t-rex";
dino.push("makaka", "asa", "t-rex");

console.log(dino)

var newA = [];
newA.push("pencil", "pen");
newA.unshift("first","makol", 9);
var last = newA.pop(); last;
console.log(newA);
console.log(last);
console.log(newA.unshift("last"));
var s = dino.concat(newA);
var strJ = s.join(", ")
console.log(strJ);
console.log(s.indexOf("t-rex"));