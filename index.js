// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            messages: 'What is your project title? (Required)'
        },
        
    ]);
  

    };


// TODO: Create a function to write README file
 fs.writeToFile('index.html', generateMarkdown(), err => {
     if (err) throw err;
     console.log('REAME complete! Check the html file!');
 });

// TODO: Create a function to initialize app
 function init(questions) {
   
 }

// questions().then(writeToFile => {
    
// })

// Function call to initialize app
init();

