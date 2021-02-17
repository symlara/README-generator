// packages needed for this application
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = util.promisify(fs.writeFile);


// an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'READMEtitle',
            messages: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            messages: 'What is the description of this project: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain the installation process:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the project used for?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who, if any, are your contributors to this project?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for this project: ',
            choices: [
                "MIT",
                "Mozilla",
                "The Unlicense",
                "Apache"
            ]
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Are there any test?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Did you have any additional questions?'
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username here (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                return true;
            }else {
                console.log('Please enter your username!');
                }
            }   
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email here: '
        }
        
    ]);
  

    };


 








//  function to initialize app
async function init() {
    try {
        const answers = await promptQuestions();
        const generateContent = generateMarkdown(answers);
        // new REAME
        await writeToFile('./dist/README.md', generateContent);
        console.log(' Success! You now have a new README.md file');
    } catch (err) {
        console.log(err);
    }
}

// Function call to initialize app
init();
