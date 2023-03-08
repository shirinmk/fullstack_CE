// The Basic Calculator (25 points)

// In this part of the assignment you will build a simple calculator using the skills you’ve acquired in regards to functions and modules. You will ask the user for a number, a second number, and then finally ask them what kind of operation they want to perform, either add, subtract, multiply, or divide. Depending on what they select, you will perform that operation. To complete this part of the assignment follow the steps outlined here:

// Create a module that abstracts away the main calculation logic of your application. This module will have a private function called calculate and expose four different functions (add, subtract, multiply, and divide). The shell of this module with some basic instruction has already been outlined for you.
// In the main script, prompt the user for a number and store that in a variable. Convert that to a number.
// Then, prompt the user for a second number and store that in a variable. Convert that to a number.
// Finally, prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and store that in a variable.
// Use a switch statement to evaluate the operation parameter being passed in. Depending on what it is, perform that operation by calling the appropriate function from the module.
// Display the result of the calculation within an alert.
// Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide, they are displayed an alert message telling them that. Then you’ll have to rerun the application so that the application asks the user for the numbers and operation once more. You’ll have to add this functionality within a do while loop similarly how the labs were done in the previous lecture.
// IMPORT THE MODULE

// COLLECT FIRST NUMBER FROM USER
// COLLECT SECOND NUMBER FROM USER
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION


// NOT COMPLETED *****************
import {Add}  from "./modules/calculator.js";

console.log("Calculating two numbers with +,-,*,/: ");
// console.log(my);
// console.log(Add(3,5));
let number1 = parseFloat(prompt("please enter first number"));
let number2 = parseFloat(prompt("please enter first number"));
let operation = prompt("What operation you want to perform: +,-,*,/");
let result
switch (operation) {
  case "+":
     result = Add(number1, number2);
    console.log(`result of ${number1} ${operation} ${number2} = ${result}`);
    break;
  case "-":
    console.log("subtract");
    result = Subtract(number1, number2);
    console.log(`result of ${number1} ${operation} ${number2} = ${result}`);
    break;
  case "*":
    console.log("*");
    result = Multiply(number1, number2);
    console.log(`result of ${number1} ${operation} ${number2} = ${result}`);
    break;
  case "/":
    console.log("/");
     result = Divide(number1, number2);
    console.log(`result of ${number1} ${operation} ${number2} = ${result}`);
    break;

  default:
    break;
}

// // main.js
// import { myValue } from "./modules/calculator.js";
// import * as myModule from "./modules/calculator.js";

// console.log(myValue); // 1
// console.log(myModule.myValue); // 1
// setTimeout(() => {
//   console.log(myValue); // 2; my-module has updated its value
//   console.log(myModule.myValue); // 2
//   myValue = 3; // TypeError: Assignment to constant variable.
//   // The importing module can only read the value but can't re-assign it.
// }, 1000);
