const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

function writeToFile(fileName, data) {
    const filePath = "./yourREADMEfile"; // Specify the desired file path
    fs.writeFile(`${filePath}/${fileName}`, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File "${fileName}" written successfully!`);
        }
    });
}


function init() {
    // Use inquirer to prompt the user with your array of questions
    inquirer
        .prompt([
            {
                type: "input",
                name: "projectTitle",
                message: "Enter your project title:"
            },
            {
                type: "input",
                name: "description",
                message: "Provide a description of your project:"
            },
            {
                type: "input",
                name: "installation",
                message: "Provide installation instructions:"
            },
            {
                type: "input",
                name: "usage",
                message: "Provide usage information:"
            },
            {
                type: "input",
                name: "contributing",
                message: "Provide contribution guidelines:"
            },
            {
                type: "input",
                name: "tests",
                message: "Provide test instructions:"
            },
            {
                type: "list",
                name: "license",
                message: "Choose a license for your application:",
                choices: ["MIT", "Apache", "GPL", "None"]
            },
            {
                type: "input",
                name: "githubUsername",
                message: "Enter your GitHub username:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter your email address:"
            }
        ])
        .then((answers) => {
            // Generate the markdown using the user's answers
            const markdown = generateMarkdown(answers);

            // Write the generated markdown to a README file
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.error(error);
        });
}


init();