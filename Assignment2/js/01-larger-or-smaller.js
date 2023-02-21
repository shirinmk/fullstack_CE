// Larger or Smaller?

// Usage: Use simple conditional statements

// Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.



// Ask user to enter two integer
let num1 = parseInt( prompt("Please enter first integer"));
let num2 = parseInt( prompt("Please enter second integer"));

if(num1 > num2){
    document.write(`two integers are ${num1} and ${num2} and the largest integer is ${num1}`);
}else if(num2 > num1){
    document.write(`two integers are ${num1} and ${num2} and largest integer is ${num2}`);
}else{
    document.write(`Two integers are equal ${num1}`);
}