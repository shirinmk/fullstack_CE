// The “Grade Assigner” Application

// Usage: Use else if or switch statements

// Collect the a number between 1 and 100 from the user.
// Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
// If the score is between 60 and 69, write out “You received a D” into the console.
// If the score is between 70 and 79, write out “You received a C” into the console.
// If the score is between 80 and 89, write out “You received a B” into the console.
// If the score is between 90 and 100, write out “You received an A” into the console.
// If the score is less than 60, write out “You received an F” into the console.

let userGrade = parseFloat(prompt("what grade did you get?"))
if((userGrade < 0 )|| (userGrade> 100)){
    alert("grade must be between 1 and 100");
    userGrade = parseFloat(prompt("what grade did you get?"))
}
console.log(`user choise ${userGrade}`)
console.log(parseFloat(userGrade/10))
console.log(Math.floor( parseFloat(userGrade/10)))
let letterGrade;
switch (Math.floor( parseFloat(userGrade/10))){
    case 9:
        letterGrade="A";
        break;
    case 8:
        letterGrade = "B"
        break
    case 7:
        letterGrade = "C"
        break
    case 6:
        letterGrade = "D"
        break
    default:
        letterGrade = "F"
        break
}
document.write(`You recieved ${letterGrade}`)
