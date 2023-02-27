// Countdown

// Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.

let user_num = parseInt(prompt("enter the number"));
for(let i = user_num; i > 0; i-- ){
    console.log(i);
}