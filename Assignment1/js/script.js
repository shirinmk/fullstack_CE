// 1. Convert the following highlighted identifiers to Camel Case notation:

// let some_month
// function the Month()
// let current-month
// let summer_month
// let MyLibrary-function

// STEP 1 solutions
// let someMonth ;
// function theMonth()
// let currentMonth;
// let summerMonth;
// let myLibraryFunction;

// 2. Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

//STEP2 solution
// 3.9        // numeric literal
// "shirin"   // string literal
// true       // Boolean literal
// null       // null literal expression

// 3. Give me two examples of complex / variable expressions.

//STEP 3
// let name = "Shirin";
// let total = (100 + 90 ) / 2;


// 4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

// STEP 4
// let firstName, lastName, address, city;
// let strState, intZip, intAge, referralSource;

// 5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

// STEP 5
// let strState = "CA";
// let intZip = 19832;
// let firstName = "Shirin";

// or 
// let strState = "CA", intZip = 19832, firstName = "Shirin";

// 6. Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.

// STEP 6 
// let num ;
// console.log(num + 10 + "shirin");   // Returns NaNshirin

// 7. Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.

// STEP 7 
// let var1 = true;
// let var2 = 4;
// console.log(`The result boolean ${var1} and string ${"shirin"}is ${var1 + "shirin"}`); //Return The result boolean true and string shirinis trueshirin
// console.log(`The result boolean ${true} and number ${var2} is ${var2 + true}`); //Return The result boolean true and number 4 is 5

// 8. Is the following string literal valid? If not, how would you fix it?

// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// console.log(someString)

// STEP 8.
// no it should be like this
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
// console.log(someString);

// 9. Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.

// STEP 9
// let var1 = null;
// let var2;
// console.log(`variable is null is ${var1}. variable is undefined is ${var2}`)


// 10. Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

// STEP 10.
// let var1
// console.log(typeof "Shirin")
// console.log(typeof 4)
// console.log(typeof true)
// console.log(typeof null)
// console.log(typeof var1)

// 11. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// STEP 11.
// let name = 'Zak Ruvalcaba,'
// let className = "JavaScript";
// alert('Hello  welcome, ' + name + ' to the '+ className + ' class!')


// 12. Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

// STEP 12. 
// let name = "shirin"
// alert('Hello ' + name +', welcome to the JavaScript class!')

// 13. Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.

// STEP 13 
// let name = "shirin"
// alert('Hello ' + name +', welcome to the JavaScript class!')

// 13. Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// STEP 13. 
// let name = 'shirin'
// let course = prompt('name of course is ')
// alert('Hello ' + name +', welcome to the ' + course + 'class!')

// 14. Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!

// STEP 14. 
// let name = 'shirin'
// let course = prompt('name of course is ')
// alert('Hello ' + name +'. \nwelcome to the ' + course + ' class!')

//15. Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.

// STEP 15
// let name = prompt("what is your name")
// let course = prompt('name of course is ')
// alert('Hello ' + name +'. \nwelcome to the ' + course + ' class!')

//16. Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

// STEP16
// let name = prompt("what is your name")
// let course = prompt('name of course is ')
// alert('Hello ' + name +'. \nwelcome to the ' + course + ' class!')

//17. Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.

// STEP 17.
// let x = 10
// let y = 20
// console.log(`sum of ${x} and ${y} is ${x + y}`)

//18. Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.

// STEP 18 
// let x = 20
// console.log(`add 20 to variabe x is ${x + 20}`)

//19. Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.

// STEP 19
// let x = 20
// console.log(`varaiable x which is ${x} multiply 5 is ${5 * x}`)

//20. Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.

// STEP 20  ???
// let x = 20 % 3
// console.log(`varibalei is ${x} divid and assign 1 to it is ${x + 1}`)

//21. Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

// STEP 21
// let x = 5
// let y = 10/2
// console.log(x == y)

//22. Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

// STEP 22 
// let x = 5 - 4
// let y = "1"
// console.log(x === y)
