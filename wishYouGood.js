// wish you good :
var compliments = [
    "you are nice",
    "sweet potatoes",
    "favourite boy"
];
var greetings = [
    "hello",
    "bro",
    "hi"
];
var bye = [
    "have fun",
    "see you",
    "don't be so shy"
];
var ranCo = compliments[Math.floor(Math.random() * compliments.length)];
var ranGr = greetings[Math.floor(Math.random() * greetings.length)];
var ranBy = bye[Math.floor(Math.random() * bye.length)];

var random = "WElllll," + " " + ranCo + " " + ranGr + " "  + ranBy + "=))";

console.log(random);