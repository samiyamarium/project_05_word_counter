#! /usr/bin/env node
const inquirer = require('inquirer');
const chalk=require('chalk');
let counter=inquirer.prompt([{
    name:'paragraph',
    type:'input',
    message:'Enter Your Paragraph here:',
}])
.then(word =>{
console.info('\n Paragraph: \n ', word.paragraph)
let word_counter=word.paragraph.trim().split(" ").length //trim omits white spaces , split seperates strings into substrings
console.log(chalk.magenta('This paragraph contains'), chalk.yellow.bold(word_counter) ,chalk.green('words in total.'))
})
