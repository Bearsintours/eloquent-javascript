//// Functions (chapter 3) ////


// Minimum //

function min(arg1, arg2) {
  return Math.min(arg1, arg2);
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Recursion //

function isEven(num) {
  if (num == 1) return false;
  else if (num == 0) return true;
  else return isEven(num - 2);
}


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


// Bean counting //

function countBs(str) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "B") {
      counter++;
    }
  }
  return counter;
}

function countChar(str, char) {
  var counter = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
