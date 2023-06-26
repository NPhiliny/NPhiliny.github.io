// book example
var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "the fifth letter of your name is " + name[4] + ".";
};
console.log(fifthLetter("Nadia"));
// case: name longer
console.log("case: name longer", fifthLetter("Nicholas"));
// case: name shorter
console.log("case: name shorter", fifthLetter("Nik"));
