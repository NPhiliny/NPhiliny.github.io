// #1: DOING ARITHMETIC WITH FUNCTIONS
// Create two functions, add and multiply. Each should take two arguments. The add function should
// sum its arguments and return the result, and multiply should multiply its arguments.
// Using only these two functions, solve this simple mathematical problem:
// 36325 * 9824 + 777


var multiplyF = function (x, y) {
    return x * y;    
} 
console.log(multiplyF(9824, 36325));
// var mResult = multiplyF(9824, 36325);
var addF = function (a, b) {
    return a + b;
}
console.log(addF(multiplyF(9824, 36325), 777));

