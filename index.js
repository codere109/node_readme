// code influenced by tutor

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// const questions = require("./utils/questions")
const fs = require("fs/promises")

// TODO: Create an array of questions for user input
inquirer.
    prompt({
    type: 'list',
    name: "license",
    message: 'What is your preferred badge',
    choices: ['MIT', 'ICS', 'Mozilla', 'IBM', 'No license']
    
    // how to call the function from another file; if we dont see data it might be because of the return(check with console logging)
}).then((data )=> {
    renderLicenseLink(data.license);
    

});
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    try {
       await fs.writeFile(fileName, data)
    } catch (error) {
        console.log(error)
    }
}

// TODO: Create a function to initialize app
// async function init() {
//     var answers = await inquirer.prompt(questions)
//     const myTemplate = generateMarkdown(answers)
//     console.log(myTemplate)
//     writeToFile(`${answers.title}.md`, myTemplate)
// }

// Function call to initialize app
// init();
