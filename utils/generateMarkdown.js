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
        case 'GNU AGPLv3':
            return '![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)';
        break;
        case 'GNU LGPLv3':
            return '![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)';
        break;
        case 'Mozilla Public License 2.0':
            return'![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
        break;
        case 'Apache License 2.0':
            return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
        break;
        case 'Boost Software License 1.0':
            return '![Boost Software License 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
        break;
        case 'The Unlicense':
            return'![Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
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
        case 'GNU AGPLv3':
            return '[AGPL v3](https://www.gnu.org/licenses/agpl-3.0)';
        break;
        case 'GNU LGPLv3':
            return '[LGPL v3](https://www.gnu.org/licenses/lgpl-3.0)';
        break;
        case 'Mozilla Public License 2.0':
            return'[MPL 2.0](https://opensource.org/licenses/MPL-2.0)';
        break;
        case 'Apache License 2.0':
            return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0))';
        break;
        case 'Boost Software License 1.0':
            return '[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)';
        break;
        case 'The Unlicense':
            return'[Unlicense](http://unlicense.org/)';
        default:
            return '';

    }


}

// Function that returns the license section of README
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

// Function to generate markdown for README
function generateMarkdown(data) {

return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseTableOfContent(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing
${data.contribution}

## Tests
${data.testing}

## Questions
Contact Details:

- GitHub Username: ${data.github}
- [Link to GitHub Profile](https://github.com/${data.github})
- For additional questions, you can contact me via email: ${data.email}
`;
}

module.exports = generateMarkdown;
