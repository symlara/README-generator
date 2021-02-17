// a function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  return `
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  `
}

//  a function that returns the license link

function renderLicenseLink(license) {
  return `
  (https://choosealicense.com/licenses/mit/#)
  `
}

//  a function that returns the license section of README

function renderLicenseSection(license) {
  return `
  <section class="license">
  <h2> MIT License</h2MIT License

  Copyright (c) [2021] [Aaliyah Symlar]
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.>
</section>
  `
}

// a function to generate markdown for README
function generateMarkdown(answers) {
  return `  
  <h1 align="center">${answers.READMEtitle} </h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
  
  ## Table of Contents
  - [Description](#description)
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  ${answers.description}

  

 ## Installation Instructions
 ${answers.installation}

 
 ## Usage
 ${answers.usage}

 ## Contributing
 ${answers.contribution}

 ## Tests
 ${answers.tests}

 ## Questions
 ${answers.questions}

GitHub: [${answers.username}](https://github.com/${answers.username})

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
This app is covered by the ${answers.license} license.


If you have any questions please feel free to send me an email: ${answers.email}
`;
};



module.exports = generateMarkdown;