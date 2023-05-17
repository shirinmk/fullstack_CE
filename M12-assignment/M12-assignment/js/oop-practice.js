// STEP 1
//CREATE CAT OBJECT WITH CONSTRUCTOR METHOD with name declaration
// class Cat{
//     constructor(){
//         console.log(`inside cat object constructor`)
//     }
// }


//CREATE DOG OBJECT WITH CONSTRUCTOR METHOD with ANONYMOUS declaration
// const Dog = class{
//     constructor(){
//         console.log(`this is inside dog object constructor`)
//     }

// }


// STEP 2
// const cat1 = new Cat();
// const dog = new Dog()

// STEP 3
// Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.

// class Animal {
//     constructor(){
//         this.creation = function(){
//             console.log('The Animal has been created')
//         }
//     }
// }
// const animal1 = new Animal()
// animal1.creation()

// STEP 4
// Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
// class Animal {
//     constructor(message = 'unknown'){
//         this.message = message
//         this.creation = function(){
//             console.log(`the message you gave is ${this.message}`)
//         }
//     }
// }
// const animal1 = new Animal("at the moment that the Animal class is instantiated.")
// animal1.creation()

// STEP 5
// Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.
// class Animal {
//     constructor(type, breed, color, height, length){
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//         console.log(`properties of this animal is ${this._type} ${this._breed} ${this._color} ${this._height} ${this._length }`)
//     }
    
// }
// const chita = new Animal('cheetah', 'Asiatic', 'light brown', '26 inches', '37 inches')// FOR CONSTRUCTOR WHATEVE IS INSIDE ,IT DISPLAY INSTANTLY AFTER CREATING OBJECT BUT FOR OUTSIDE OF CONSTRUCTOR YOU NEED TO CALL

// STEP 6
// Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
// class Animal {
//     constructor(type, breed, color, height, length){
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//     }
// }
// const animal1 = new Animal('cheetah', 'Asiatic', 'light brown', '26 inches', '37 inches')
// for (let element in animal1){
//     console.log(animal1[element])
// }

// STEP 7
// Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
// class Animal {
//     constructor(type, breed, color, height, length){
//         this._type = type
//         this._breed = breed
//         this._color = color
//         this._height = height
//         this._length = length
//     }
//     speak = () =>{
//         console.log(`${this._type}`)
//         if(this._type === 'dog'){
//             console.log(`The ${this._color} dog is barking!`)
//         }else if(this._type === 'cat'){
//             console.log(`The  ${this._color} cat is meowing!`)
//         }else{
//             console.log(`other type of animals`)
//         }
//     }
// }
// const animal1 = new Animal('dog', 'Asiatic', 'light brown', '26 inches', '37 inches')
// animal1.speak()
// STEP 8
// Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
// class Animal {
//     constructor (type, breed, color, height, length){
//         let _type   =  type
//         let _breed  =  breed
//         let _color  =  color
//         let _height =  height
//         let _length =  length
//         let checkType = () => {
//             if(_type === 'dog'){
//                  return 'dog'
//             }else{
//                    return 'cat'
//             }
//         }
//         this.speak = () =>{
//             return checkType()
//         }
//     }
// }
// const animal1 = new Animal('dog', 'Asiatic', 'light brown', '26 inches', '37 inches')
// console.log(`${animal1.speak()} has made a noise`)

// POINT : let make private variable , this make it public 
// STEP 9
// Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.
// class findWords extends String {
//  constructor(paragraph, word){
//     super()
//     this._word = word
//  }
// }

// const text1 = findWords ('this is a text paragraph' , 'text')

//ANOTHER SOLUTION 
// let word = prompt("enter the word you are looking for? ")
// let paragraph = prompt("enter the content? ")
// let arrayWords = paragraph.split(' ')
// let count = 0
// console.log(arrayWords)
// arrayWords.forEach(element => {
//     console.log(element)
//     if( element === word){
//         count ++
//     }
    
// });
// if (count === 0){
//     console.log('didnot find word')
// }else{
//     console.log(`There are ${count} of this "${word}"`)
// }

//Another solution in oop
//need to convert to oop
// class findWords {
//     constructor(){
//         this.word = ' '
//         this.paragragh = ' '
//         this.arrayWords = []
//         this.count = 0
//     }

//     //method to get input
//     getUserInput(){
//         this.word =  prompt("enter the word you are looking for? ")
//         this.paragragh = prompt("enter the content? ")
//     }

//     //method to find
//     findOccurance (){
//         this.arrayWords = this.paragragh.split(' ')
//         this.arrayWords.forEach(element => {
//                 // console.log(element)
//                 if( element === this.word){
//                     this.count ++
//                 }
                
//             });
          
//     }
//     //method to display
//     display(){
//         if (this.count === 0){
//             console.log('didnot find word')
//         }else{
//             console.log(`There are ${this.count} of this "${this.word}" in this paragraph "${this.paragragh}"`)
//         }
//     }
//     run(){
//         this.getUserInput()
//         this.findOccurance()
//         this.display()
//     }
// }

// //create inatiate of object
// const example = new findWords()
// //apply method on the object
// example.run()