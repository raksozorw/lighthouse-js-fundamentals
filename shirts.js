/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// Write your if/else code here

if (shirtWidth >= 18 && shirtWidth <20 && shirtLength >=28 && shirtLength < 29 && 
shirtSleeve >= 8.13 && shirtSleeve < 8.38) { 
  console.log("S")
  } else if (shirtWidth >= 20 && shirtWidth <22 && shirtLength >=29 && shirtLength < 30 && 
    shirtSleeve >= 8.38 && shirtSleeve < 8.63) { 
    console.log("M") 
  } else if (shirtWidth >= 22 && shirtWidth <24 && shirtLength >=30 && shirtLength < 31 && 
    shirtSleeve >= 8.63 && shirtSleeve < 8.88) { 
    console.log("L")
    } else if (shirtWidth >= 24 && shirtWidth <26 && shirtLength >=31 && shirtLength < 33 && 
      shirtSleeve >= 8.88 && shirtSleeve < 9.63) { 
      console.log("XL") 
      } 

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = /* your code goes here */

var category = (eatsPlants && eatsAnimals ? "omnivore" : ( 
  eatsPlants && !eatsAnimals ? "herbivore" : (
   eatsAnimals && !eatsPlants ? "carnivore" : undefined)))


console.log(category);

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch (education) {
  case 'no high school diploma':
    salary = 25636;
    break;
  case 'a high school diploma':
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396
}
console.log("In 2015, a person with " + education +
 " earned an average of $" + salary.toLocaleString("en-US")+ " /year.")