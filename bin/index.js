#! /usr/bin/env node
var inquirer = require('inquirer');
var chalk = require('chalk');
var counter = inquirer.prompt([{
        name: 'paragraph',
        type: 'input',
        message: 'Enter Your Paragraph here:',
    }])
    .then(function (word) {
    console.info('\n Paragraph: \n ', word.paragraph);
    var word_counter = word.paragraph.trim().split(" ").length; //trim omits white spaces , split seperates strings into substrings
    console.log(chalk.magenta('This paragraph contains'), chalk.yellow.bold(word_counter), chalk.green('words in total.'));
});
