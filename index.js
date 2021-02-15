// packages needed for this application
const {writeFile} = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            messages: 'What is your project title? (Required)'
        },
        {
            type: 'input',
            name: 'description',
            messages: 'What is the description of this project?'
        }
        
    ]).then(projectData => {
        READMEdata.projects.push(READMEdata);
        if (projectData.confirmAddData) {
            return promptQuestions(READMEdata);
        }else {
            return READMEdata;
        }
    });
  

    };


// TODO: Create a function to write README file
 fs.writeToFile('index.html', promptQuestions(), err => {
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

