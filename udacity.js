/* FINALLY SOLVED
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "ballroom";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved ; 

if (room === "dining room" && suspect === "Mr. Parkes") { solved = true; 
} else if (room === "gallery" && suspect === "Ms. Van Cleve") { solved = true;
} else if (room === "billiards room" && suspect === "Ms. Sparr") { solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") { solved = true;
} else {solved = false}

if (room === "dining room") { weapon = "knife";
    
} else if (room === "gallery") { weapon = "trophy";
    
} else if (room === "billiards room") { weapon = "pool stick"; 
    
} else { weapon = "poison"; 
    
}

if (solved === true) {
	console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} else {console.log(solved)
    
}