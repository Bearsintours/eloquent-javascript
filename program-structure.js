////  Program structure (chapter 2) exercices: ////

// Looping a triangle //

var char = "";
for (var i = 1; i < 8; i++) {
  char += "#";
  console.log(char);
}
/* →
#
##
###
####
#####
######
#######
*/

// FizzBuzz //

var output;
for (var i = 0; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    output = "FizzBuzz";
  } else if (i % 3 == 0) {
    output = "Fizz";
  } else if (i % 5 == 0) {
    output = "Buzz";
  } else output = i;
  console.log(output);
}
/* →
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
[...]
*/

// Chess Board //

function grid(height, width) {
  var output = "";
  var char;
  var count1 = 0;
  var count2 = 0;
  for (var i = 1; i <= height; i++) {
    count1++;
    for (var j = 1; j <= width; j++) {
      count2++;
      if ((count1 + count2) % 2 == 0) {
        output += " ";
      } else {
        output += "#";
      }
    }
    output += "\n"
  }
  return output;
}

console.log(grid(8, 8));
/* →
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/
