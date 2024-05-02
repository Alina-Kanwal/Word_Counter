#! /usr/bin/env node
//This line is called shabang it tell operating system to run with node.js
// here we import inquirer
import inquirer from "inquirer"

//declare a constant "answers" and assign it to the result ofinquirer.prompt function

const answers : {
    sentence : string
} = await inquirer.prompt(
    [
        { name : "sentence",
          type : "input",
          message : "Enter your sentence to create the word!"
        }
    ]
)

const words = answers.sentence.trim().split(' ')

//print the array of words to console
console.log(words)

//print the word count of the sentence to the console
console.log(`You wrote total ${words.length} words`);