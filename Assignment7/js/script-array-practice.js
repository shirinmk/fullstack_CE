//STEP 1

//STEP 2

//STEP 3

//STEP 4

//STEP 5

//STEP 6

//STEP 7

//STEP 8

//STEP 9

//STEP 10

//STEP 11

//STEP 12

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17

// M8 Assignment - Part 1, Practice with Arrays (20 points)

//*************STEP1**************************** */
// Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
// let arrayStringMovie = ['movie1', 'movie2','movie3', 'movie4', 'movie5'];
// console.log(arrayStringMovie[1]);

//*************STEP2**************************** */
// Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
// let movies = new Array(5);
// movies[0] = 'movie1';
// movies[1] = 'movie2';
// movies[2] = 'movie3';
// movies[3] = 'movie4';
// movies[4] = 'movie5';
// console.log(movies[0])

//**************STEP3*************************** */
// Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
// let movies = new Array(5);
// movies[0] = 'movie1';
// movies[1] = 'movie2';
// movies[2] = 'movie3';
// movies[3] = 'movie4';
// movies[4] = 'movie5';
// console.log(movies[0]);
// console.log(movies.length)
// movies[2] = 'movie33';
// console.log(movies.length)

// ????not showing 6 Element not understand question

//****************STEP4************************* */
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
// let movies = [];
// movies[0] = 'movie1';
// movies[1] = 'movie2';
// movies[2] = 'movie3';
// movies[3] = 'movie4';
// movies[4] = 'movie5';
// delete movies[0];
// movies.forEach((movie) =>{
//     console.log(movie)
// })

//****************STEP5************************* */
// Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window.
// let movies = [];
// movies[0] = 'movie1';
// movies[1] = 'movie2';
// movies[2] = 'movie3';
// movies[3] = 'movie4';
// movies[4] = 'movie5';
// movies[5] = 'movie6';
// movies[6] = 'movie7';
// for(let movie in movies){
//     console.log(movies[movie]) //ATTENTIN MOVIE IS INDEX
// }

//****************STEP6************************* */
// Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.
// let movies = [];
// movies[0] = 'movie1';
// movies[1] = 'movie2';
// movies[2] = 'movie3';
// movies[3] = 'movie4';
// movies[4] = 'movie5';
// movies[5] = 'movie6';
// movies[6] = 'movie7';
// for(let i of movies){
//     console.log(i)
// }

//****************STEP7************************* */
// Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.
// let movies = [];
// movies[0] = 'bmovie1';
// movies[1] = 'movie2o';
// movies[2] = 'jmovie3';
// movies[3] = 'cmovie4';
// movies[4] = 'amovie5';
// movies[5] = 'tmovie6';
// movies[6] = 'lmovie7';
// movies.sort();
// for(let i of movies){
//     console.log(i)
// }

//****************STEP8************************* */
// Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):

// Movies I like:

// Movie 1
// Movie 2
// Movie 3
// …

// Movies I regret watching:

// Movie 1
// Movie 2
// Movie 3
// …

// let movies = [];
// movies[0] = 'bmovie1';
// movies[1] = 'movie2o';
// movies[2] = 'jmovie3';
// movies[3] = 'cmovie4';
// movies[4] = 'amovie5';
// movies[5] = 'tmovie6';
// movies[6] = 'lmovie7';
// let leastFavMovies = ['donlike it', 'hateit2', 'regretit3']
// console.log(`Movies I like:\n \n`);
// for(let i of movies){
//     console.log(`${i}`);
// }
// console.log(`Movies I regret watching:\n \n`);
// for(let i of leastFavMovies){
//     console.log(`${i}`);
// }

//****************STEP9************************* */
// Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted
// let movies = [];
// movies[0] = 'bmovie1';
// movies[1] = 'movie2o';
// movies[2] = 'jmovie3';
// movies[3] = 'cmovie4';
// movies[4] = 'amovie5';
// movies[5] = 'tmovie6';
// movies[6] = 'lmovie7';
// let leastFavMovies = ['donlike it', 'hateit2', 'regretit3']
// movies = movies.concat(leastFavMovies);
// movies.reverse()
// for(let i of movies){
//     console.log(`${i}`);
// }

//****************STEP10************************* */
// Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
// let movies = [];
// movies[0] = 'bmovie1';
// movies[1] = 'movie2o';
// movies[2] = 'jmovie3';
// movies[3] = 'cmovie4';
// movies[4] = 'amovie5';
// movies[5] = 'tmovie6';
// movies[6] = 'lmovie7';
// let leastFavMovies = ['donlike it', 'hateit2', 'regretit3']
// movies = movies.concat(leastFavMovies);
// movies.reverse()
// for(let i of movies){
//     console.log(`${i}`);
// }
// let elm = movies.pop();
// console.log(`the last element removed is ${elm}`)

//****************STEP11************************* */
// Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.
// let movies = [];
// movies[0] = 'bmovie1';
// movies[1] = 'movie2o';
// movies[2] = 'jmovie3';
// movies[3] = 'cmovie4';
// movies[4] = 'amovie5';
// movies[5] = 'tmovie6';
// movies[6] = 'lmovie7';
// let leastFavMovies = ['donlike it', 'hateit2', 'regretit3']
// movies = movies.concat(leastFavMovies);
// let fistEl = movies.shift();
// console.log(fistEl)

//****************STEP12************************* */
// Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.
// let movies = [];
// movies[0] = 'bmovie1';
// movies[1] = 'movie2o';
// movies[2] = 'jmovie3';
// movies[3] = 'cmovie4';
// movies[4] = 'amovie5';
// movies[5] = 'tmovie6';
// movies[6] = 'lmovie7';
// let leastFavMovies = ['donlike it', 'hateit2', 'regretit3']
// movies = movies.concat(leastFavMovies);
// let indexNotLike = []
// // ??????????

//****************STEP13************************* */
// Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this:

// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

// let movies = [
//   ["Movie 1", 1],
//   ["Movie 2", 2],
//   ["Movie 3", 3],
//   ["Movie 4", 4],
//   ["Movie 5", 6],
// ];
// let names = [];

// //ONE SOLUTION
//     for (let i = 0; i < movies.length; i++){
//         console.log(`${movies[i][0]} : ${movies[i][1]}`)
//         if(typeof movies[i][0] === 'string' ){
//             names.push(movies[i][0])
//         }
//         if(typeof movies[i][1] === 'string' ){
//             names.push(movies[i][1])
//         }

//     }
//     console.log(names.forEach((name) => {
//         console.log(name)
//     }))

// //SECOND SOLUTION
// movies.forEach((item) => {
//   console.log(`each element in movies is ${item}`);
//   item.filter((itemIn) => {
//     console.log(`each item in combine ${itemIn}`);
//     if (typeof itemIn === "string") {
//       names.push(itemIn);
//     }
//   }); //end filter
// }); //end forEach
// console.log(names);


//****************STEP14************************* */
// Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

// Employees:

// ZAK
// JESSICA
// MARK
// FRED
// SALLY

// let employees = ['ZAK','JESSICA', 'MARK', 'FRED','SALLY']

// function showEmployee(...args) {
//     console.log(`Employees:\n\n`)
// 	for (let arg of args) {
// 		console.log(arg)
// 	}
	
// }
// showEmployee(employees)
	

//****************STEP15************************* */
// Write a JavaScript function to filter false, null, 0 and blank values from an array.

// Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]))
// Expected Result: [58, "abcd", true]

// let items =[]
// function  extractValues(...args) {
//     for (let arg of args) {
//         // console.log(arg);
//         if((arg !== '') && (arg !== false)  && (arg !== null)  && (arg !== 0)){
//             // console.log(arg); 
//             items.push( arg)
//         }//END IF
    
//   }
//   return items
// }
  
//   extractValues(58, '', 'abcd', true, null, false, 0);//WHEN PUTTING [] SHOWS INDEX BUT WHEN () IT SHOWS ONLY ITEMS
//  console.log(items)

//****************STEP16************************* */
// Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.

// let numOfElement ;
// let indexOfRandomElement;
// function  extractValues(...args) {
//     // console.log(args.length)
//     numOfElement = args.length
//     // console.log(Math.floor(Math.random()*numOfElement))
//     indexOfRandomElement = Math.floor(Math.random()*numOfElement)
//        console.log(` the index is ${indexOfRandomElement} : the element is ${args[indexOfRandomElement]} `)
    
//     }
      
//       extractValues(58, '', 'abcd', true, null, false, 0);//WHEN PUTTING [] SHOWS INDEX BUT WHEN () IT SHOWS ONLY ITEMS

//****************STEP17************************* */
// Write a JavaScript function to get the largest number from a numeric array.

// let maxValue = 0;
// function findLargest(...args){
//     for(let arg of args){
//         if (arg > maxValue){
//             maxValue = arg
//         }
//     }
//     return maxValue

// }
// console.log(findLargest(3,5,33,95,7,8))
