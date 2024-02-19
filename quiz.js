// Quiz about something you love, very personal
// First Import a module that allows users to pass inputs
// npm install prompt-sync


// This loads the module
const prompt = require("prompt-sync")()

// The value stores the value inputed// That is string  
//let value = prompt("Enter Something: ");
//console.log(text)


console.log("Welcome to the coding Quiz!")

const answer1 = prompt("What is my favourite food? ")
const correctAnswer = "Kenkey"

// Note not all users may enter right answer in same case as you
// So use  method to convert thier case to be like yours 
if (answer1[0].toUpperCase() + answer1.slice(1).toLowerCase() === correctAnswer){
    console.log("You got it right")
} else console.log(" Boboooooooooooo")

const answer2 = prompt("Who is my bestie? ")
const correctAnswer2 = "Carl"

// Note not all users may enter right answer in same case as you
// So use  method to convert thier case to be like yours 
if (answer2[0].toUpperCase() + answer2.slice(1).toLowerCase() === correctAnswer2){
    console.log("You got it right")
} else console.log(" Boboooooooooooo")

const answer3 = prompt("What is my favourite book? ")
const correctAnswer3 = "Bible"

// Note not all users may enter right answer in same case as you
// So use  method to convert thier case to be like yours 
if (answer3[0].toUpperCase() + answer3.slice(1).toLowerCase() === correctAnswer3){
    console.log("You got it right")
} else console.log(" Boboooooooooooo")




