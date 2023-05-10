//STEP 1
// let fname = prompt("what is your name?")
// let lengthName = fname.length
// alert(`Your name ${fname} has ${lengthName} letters`)

//STEP 2
// let fname = prompt("what is your name?")
// let lengthName = fname.length
// alert(`Your name ${fname} has ${lengthName} letters`)
// let charNum = prompt("what number you want to know the letter?")
// let ch = fname.charAt(parseInt(charNum))
// alert(`${charNum} is ${ch} in ${fname} `)

//STEP 3
// let fName = prompt("What is your first name? ")
// let lName = prompt("What is your last name? ")
// alert(`Your name is: ${fName.concat(lName)}`)

//STEP 4
// let sentense = "The quick brown fox jumps over the lazy dog"
// alert(`The index of fox is ${sentense.indexOf('fox')}`)

//STEP 5
// let sentense = "The quick brown fox jumps over the lazy fox"
// alert(`The last index of fox is ${sentense.lastIndexOf('fox')}`)

//STEP 6
// let sentense = "The quick brown fox jumped over the lazy dog"
// let fullName = prompt("What is your full name? ")
// alert(sentense.replace('the lazy dog', fullName))

//STEP 7
// let sentense = "The quick brown fox jumps over the lazy dog"
// let userWord = prompt('Enter the word you are looking for? ')
// // alert(sentense.search(userWord))
// if(sentense.search(userWord) !== -1){
//     alert(`the position of ${userWord} is ${sentense.search(userWord)} in this sentence "${sentense}"`)
// }else{
//     alert(`it doesn't have ${userWord} in this sentence "${sentense}"`)
// }

//STEP 8
// let old_string = "The quick brown fox jumps over the lazy dog"
// let start      = old_string.indexOf('the')
// let end        = old_string.indexOf('dog')
// let new_string = old_string.substring(start, end+3)
// alert(new_string.toUpperCase())

//TRY TO SOLVE IT ANOTHER WAY

//STEP 9
// let sentence = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          "
// alert(sentence.trim().toUpperCase())

//STEP 10
// let sentence = "the quick brown fox jumps over the lazy dog"
// let arr = sentence.split(' ')
// alert(arr)
// arr.forEach(element => {
//     console.log(element.charAt(0).toUpperCase())
// });
// alert(arr)


//DO IT ???