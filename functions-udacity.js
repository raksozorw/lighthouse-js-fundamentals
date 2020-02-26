function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);
console.log(avg)

// x and y are parameters in this function declaration
function add(x, y) {
  // function body
  var sum = x + y;
  return sum; // return statement
}

// 1 and 2 are passed into the function as arguments
var sum = add(1, 2);

/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here

function laugh1() {
  return "hahahahahahahahahaha!"
}

console.log(laugh1());


/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

function laugh(num) {
  var times = ""; // place to add the text generated inside the for loops
for(var x = 1; x<= num; x++) {
 times += "ha" // times += is the same as times + times + "ha"
} return times 
} 
console.log(laugh(1)+"!");

// must take a number equal to the widest line (done for us)
// return that line of asterisks (done for us)
// print out a line with 1 less asterisk - run the makeLine function with number -1 and return the output
//repeat until at only 1 asterisk
//return the value of triangle


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}
//need code to decrease the amount of *s.. need a for loop that each time subtracts makeLine -1
// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(size) {
  var triangle = ""; 
  for (var x = 1; x<= size; x++){
  triangle += makeLine(size - x);
}
return triangle;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));

/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression

emotions("Happy", function(num) {
  var times = ""; // place to add the text generated inside the for loops
for(var x = 1; x<= num; x++) {
 times += "ha" // times += is the same as times + times + "ha"
} return times 
})