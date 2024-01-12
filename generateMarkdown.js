// Function to generate markdown based on user input
function generateMarkdown(data) {
  // Function to return a license badge based on the license passed in
  function renderLicenseBadge(license) {
    // Define the badge URLs for each license
    const licenseBadges = {
      MIT: '[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      Apache: '[![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      GNU: '[![GNU License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    };

    // Return the corresponding badge or an empty string if the license is not recognized
    return licenseBadges[license] || '';
  }

  // Function to return the license link
  function renderLicenseLink(license) {
    // Define the license URLs for each license
    const licenseLinks = {
      MIT: '[MIT License](https://opensource.org/licenses/MIT)',
      Apache: '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
      GNU: '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
    };

    // Return the corresponding license link or an empty string if the license is not recognized
    return licenseLinks[license] || '';
  }

  // Function to return the license section of README
  function renderLicenseSection(license) {
    // If there's no license, return an empty string
    if (!license) {
      return '';
    }

    // Otherwise, return a formatted license section with a badge and link
    return `## License
  
    ${renderLicenseBadge(license)}
  
    This project is licensed under the ${renderLicenseLink(license)} license.`;
  }

  // Your existing generateMarkdown logic here
  return `
  # ${data.projectTitle}

  ## Description
    ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ${renderLicenseSection(data.license)}

  ## Contact
    GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
    Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
