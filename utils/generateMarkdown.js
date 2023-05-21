// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
var BADGES = [{
  license: "MIT",
  link: "https://img.shields.io/badge/License-MIT-yellow.svg"
},
{
license: "ISC",
link: "https://img.shields.io/badge/License-ISC-blue.svg"
},
{
license: "Mozilla",
link: "License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
},
{
license: "IBM",
link: "License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg",
},
]


function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //evalue the license, and return the license link as a string
  BADGES.forEach((badge )=> {
    if (license === badge.license) {
      return badge.link 
    }else if(license === 'No license')
    return ''
  })
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}


${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;
