const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Creates questions for user input to generate README
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide any usage instructions.',
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please provide any testing instructions.',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide any contribution guidelines.',
      },

      {
        type: 'list',
        message: 'What license would you like to apply to your project?',
        name: 'license',
        choices: ['', 'MIT License', 'GNU GPLv3','GNU AGPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','Boost Software License 1.0','The Unlicense'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
    ]);
  };


// initialize app
function init(){

    questions()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully created README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
