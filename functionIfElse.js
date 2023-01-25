// rules are if 13 or over - allowed to enter if less than only with parents
function enterR(){
  var enteredAge = 12;
  var compAge = 12;
  var noComp = false;
  var comp = true;  
  if (enteredAge > compAge && (comp || noComp)) {
    return "u r welcome"
  } else if (enteredAge >= 12 && comp) {
    return "only with parents"
  }
};
console.log(enterR())
