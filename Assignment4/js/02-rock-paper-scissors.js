// The Rock, Paper, Scissors Game (20 points)

// Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors. The possible outcomes include:

// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// Our code will break the game into 3 phases:

// User makes a choice. How will we collect the user’s choice?
// Computer makes a choice. How will we collect the computer’s choice?
// A conditional that determines who wins.
// You will be responsible for figuring out some of the logic. These next steps will attempt to guide you down the right path:

// Begin by prompting the user for their choice.
// Create the computer’s choice. This will be generated similarly to the coin flip that you did in the last assignment. Remember though, rather than 2 options, there will be 3 here.
// Depending on what the numeric value of the computer’s choice is, reset it to a string value of rock, paper, or scissors instead.
// Create a conditional statement that checks the user’s choice in relation to the computer’s choice. Once a winner is defined, display a message within an alert box indicating who the winner is.
// What if the result ends in a tie? Figure out how to handle that as well.
// What if the user enters something other than rock, paper, or scissors into the prompt? Figure out how to handle that as well.
let flag = true;
let user_choice;
console.log('1: rock 2:sciessors 3: paper')

do {
     user_choice = parseInt(prompt("choose 1:rock, 2: scisors, 3:paper"));
    if(user_choice === 1 || user_choice === 2 || user_choice === 3 ){
        // console.log('hellow')
        flag = false
    }else{
        console.log('no try again')
        flag = true
    }
} while (flag == true);

let computer_choice = Math.floor(Math.random() * 3 + 1);
console.log(`${user_choice} ${computer_choice}`);
switch (user_choice) {
  case 1:
    if(computer_choice == 1){
        console.log(`You choose ${user_choice} and computer choose ${computer_choice} tie`)
    }else if(computer_choice == 2){
        console.log(`You choose ${user_choice} and computer choose ${computer_choice}win`)
    }else{
        console.log(`You choose ${user_choice} and computer choose ${computer_choice} lose`)
    }
    break;
  case 2:
    if(computer_choice == 2){
        console.log(`You choose ${user_choice} and computer choose ${computer_choice} tie`)
    }else if(computer_choice == 3){
        console.log(` You choose ${user_choice} and computer choose ${computer_choice}win`)
    }else{
        console.log(`You choose ${user_choice} and computer choose ${computer_choice}lose`)
    }
    break;
  case 3:
    if(computer_choice == 3){
        console.log(`You choose ${user_choice} and computer choose ${computer_choice}tie`)
    }else if(computer_choice == 1){
        console.log(`You choose ${user_choice} and computer choose ${computer_choice}win`)
    }else{
        console.log(`You choose ${user_choice} and computer choose ${computer_choice}lose`)
    }
    break;

  default:
    break;
}
