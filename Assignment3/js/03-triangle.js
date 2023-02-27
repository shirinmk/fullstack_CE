// Looping a Triangle

// Write a loop that displays the following triangle within a console window:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for(let i = 1; i<8; i++){
  for(let j = i; j>0; j--){
    console.log("#");
  }
  console.log("\n");
}