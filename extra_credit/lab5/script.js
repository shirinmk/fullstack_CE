// Your job in this part of the assignment is to validate that entry. If it’s anything other than “y” or “n”, the prompt should simply reappear until the user enters a valid entry.

// *****************************************

let miles;
let gallons;
let mpg;
let again = "y";
let flag = true;

do {
  miles = parseFloat(prompt("Enter miles driven"));
  gallons = parseFloat(prompt("How many gallons does your car's tank hold"));
  if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
    mpg = miles / gallons;
    console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
  } else {
    alert("One or both entries are invalid.");
  }
  do {
    again = prompt("Run application again? (y or n)", "y");
    // console.log(`1 ${again}`);
    //   while (flag === true) {
    if (again == "y" || again == "n") {
      flag = false;
    } else {
      flag = true;
    }

    // console.log(`flag is ${flag}`);
  } while (flag === true);
  //   }
} while (again === "y");
console.log("Application has exited.");
