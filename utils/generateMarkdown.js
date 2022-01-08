// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   
    switch(license){
        case 'MIT License':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        break;
        case 'GNU GPLv3':
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        break;
        default:
            return '';

    }


}

// This function returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license){
        case 'MIT License':
            return '[MIT License](https://opensource.org/licenses/MIT)';
        break;
        case 'GNU GPLv3':
            return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
        break;
        default:
            return '';

    }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

if (license === ''){
    return '';
}

else {
   return `## License`;
}


}

function renderLicenseTableOfContent(license) {

    if (license === ''){
        return '';
    }
    
    else {
       return `- [License](#license)`;
    }
    
    
    }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseTableOfContent(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

## Usage

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
