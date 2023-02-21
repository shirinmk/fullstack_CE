// The Word Translator

//  Usage: Use simple conditional statements

// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

// Hello World translated in French is: Bonjour le monde

//ask user to what language wants
let lang = prompt('enter the language you want hello world to translate es,fr,en,de');
switch (lang){
    case 'en':
        document.write(`Hello world translate in English is: Hello World`);
        break;
    case 'de':
        document.write(`Hello world translate in Denish is: Hello World`);
        break;
    case 'es':
        document.write(`Hello world translate in ES is: Hello World`);
        break;
    case 'fr':
        document.write(`Hello world translate in Franch is: Bonjour le monde`);
        break;
    default:
        document.write(`Hello world translate in English is: Hello World`);

}