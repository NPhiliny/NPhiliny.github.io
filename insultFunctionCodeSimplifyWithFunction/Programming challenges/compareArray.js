// #2: ARE THESE ARRAYS THE SAME?
// cool different solutions for propblem https://www.freecodecamp.org/news/how-to-compare-arrays-in-javascript/

var areArraysSame = function (ar1, ar2) {
    if (ar1.length !== ar2.length) {
        return false;
    } else {   
        for (var i = 0; i < ar1.length; i++) {
            // console.log("V:",  ar1[i], ' ', ar2[i], ar1[i] !== ar2[i]);
            // console.log(i, ar1, ar2);
                if (ar1[i] !== ar2[i]) {
                    return false;
                }
         }
        return true;       
    }
};

console.log(areArraysSame([1, 2, 3], [4, 5, 6])); //false
console.log(areArraysSame([1, 2, 3], [1, 5, 6])); //
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); //true
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); //false