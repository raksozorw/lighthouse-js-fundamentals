/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames")
    } else if (x % 3 === 0) {
            console.log("Julia")
        } else if (x % 5 === 0) {
            console.log("James")
        } else {
            console.log(x)
        }
      x = x + 1;
}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num > 0) {
  if ( num > 2) {
    console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..." + (num-1) + " bottles of juice on the wall!")
  } else if (num ===2) {
    console.log( num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around..." + (num -1) + " bottle of juice on the wall!")
  } else if (num ===1) {
    console.log( num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around..." + (num -1) + " bottles of juice on the wall!"); 
  }
  num = num - 1
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

var T = 60

while (T >= 0) {
    if (T === 50) {
      console.log("Orbiter transfers from ground to internal power.")
    } else if (T === 31) {
      console.log("Ground launch sequencer is go for auto sequence start.")
    } else if (T === 16) {
      console.log("Activate launch pad sound suppression system.")
    } else if (T === 10) {
      console.log("Activate main engine hydrogen burnoff system")
    }else if (T === 6) {
      console.log("Main engine start.")
    }else if (T === 0) {
      console.log("Solid rocket booster ignition and liftoff!")
    }else {
      console.log("T-" + T + " seconds.");
      T = T - 1;
    }
    }


for ( start; stop; step ) {
      // do this thing
    }


for (var x = 12; x > 0; x = x - 1) {
  console.log(x)
}

for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
//Prints:
0, 0
0, 1
0, 2
1, 0
