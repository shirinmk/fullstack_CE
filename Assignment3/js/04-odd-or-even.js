// Odd or Even?

// Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

let user_num;
for (let i = 0 ; i<16 ; i++){
    user_num = parseInt(prompt("enter number "));
    // console.log(user_num);
    // console.log(user_num/2);
    if(user_num%2 == 0){
        console.log(`${user_num} is even`)
    }else{
        console.log(`${user_num} is odd`);
    }
}