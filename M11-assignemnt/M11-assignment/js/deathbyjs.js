//STEP 1
// const orderString = (str) => {
//     // //BREAK EACH LETTER AND PUT IT IN ARRAY
//     let arr = str.split('')
//     console.log(arr)

//     //NOW SORT THE LETTERS IN ARRAY
//     console.log(arr.sort())

//     //NOW JOIN THESE LETTERS
//     let arrNew = arr.join('')
//     // console.log(arrNew)
//     return arrNew 

// }
// let newString = orderString( prompt("Enter your string"))
// console.log(newString)

//STEP 2
// function capEachWord(str){
//     //PUT EACH WORD IN ARRAY
//     let arr = str.split(' ')
//     //console.log(arr)

//     //GET FIRST LETTER OF EACH WORD CAPITALIZE IT THEN ADD THE REST OF WORD and put it in new array
//     let newArr =[]
//     arr.forEach(element => {
//        newArr.push( element[0].toUpperCase() + element.slice(1))
//        //console.log(element)
//     });
//     //console.log(newArr)

//     //NOW JOIN ALL WORDS WITH ' '
//     let strNewArr = newArr.join(' ')
//     //console.log(`new senctnec inside function ${strNewArr}`)
//     return strNewArr

// }
// let newSentence = capEachWord (prompt("Enter your sentance: "))
// console.log(newSentence)

//STEP 3
// function countVowel(str){
//     // console.log('inside function')
//     let counter = 0
//     //CHECK EACH LETTER IS VOWEL OR NOT ADD TO COUNTER
//     let arr = str.split('')
//     console.log(arr)
//     arr.forEach(element => {
//         //IN ORDER TO COVER CAPITAL LETTER CONVERT STRING TO LOWERCASE AT BEGIING
//         if(element === 'a' || element === 'i' || element === 'o' || element === 'e' || element === 'u'){
//             counter ++
//         }
        
//     }
//     );
//     return counter

// }
// let userStr = prompt("Enter your sentance: ")
// let count = countVowel(userStr.toLowerCase())
// console.log(`There are ${count} vowels in this sentence "${userStr}"`)

//STEP 4
// function generateID(){
//     //SELECT RANDOM NUMBER BETWEEN 33 AND 126 (NUMBER OF CHARACTERS IN ASCII TABLE)
//     // AND USE fromCharCode TO GET THAT CHARACTER
//     function randomInteger(min, max){
//         return Math.floor(Math.random() * (max - min + 1)) + min
//     }
//     //// console.log(randomInteger(33,126))
//     //// let numChar = randomInteger(33,126)
//     //// let charCode = String.fromCharCode(numChar)
//    // // console.log(charCode)
  
//     let numChar
//     let charCode
//     // CREATE STRING AND ADD THESE 
//     let idNew = ''
//     for(let i = 0; i < 8 ; i++){
//         numChar = randomInteger(33,126)
//         charCode = String.fromCharCode(numChar)
//         idNew += charCode
//     }
//     return idNew

// }
// let strGenerator = generateID()
// console.log(strGenerator)

//STEP 5
