/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance===false) {
  console.log("Thank you. Have a nice day!")
} else if (checkBalance === true && isActive === true && balance > 0) {
  console.log(balance)
} else if (checkBalance === true && isActive === false) {
  console.log("Your account is no longer active")
} else if (checkBalance === true && isActive === true && balance === 0) {
  console.log("Your account is empty.")
} else if (checkBalance === true && isActive === true && balance < 0) {
  console.log("Your balance is negative. Please contact bank.")
}

if (colt === "not busy") {
  if (weather === "nice") { 
    console.log("go to the park")
  }
}

