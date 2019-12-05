const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const generateHTML = require("./generateHTML");
const path = require("path");
const puppeteer = require('puppeteer');
// const employee = require("./Employee.test");
// const engineer = require("./Engineer.test");
// const intern = require("./Intern.test");
// const manager = require("./Manager.test");



const questions = [
  {
    type: "list",
    name: "name",
    message: "Choose a manager.",
    choices: ["Alice", "George", "Melissa", "Sam", "Paul"]
  },
  {
    type: "list",
    name: "name",
    message: "Choose an engineer",
    choices: ["Tim", "Jan", "Kelly", "Christina", "Jack"]
  },
  {
    type: "list",
    name: "name",
    message: "Choose an intern",  
    choices: ["Kathy", "Greg", "Lisa", "Jim"]
  }
];

const compile = async function (filename, data) {
  const filePath = path.join(process.cwd(), "myTeam.pdf");
  const html = await fs.readFile(filePath, 'utf-8');
};

async function init() {

  try {
    const answers = await inquirer.prompt(questions);
    console.log(answers)
    if (!answers) { throw "No answers provided!" };

    const HTML = generateHTML(data)

    fs.writeFile("index.html", HTML, err => console.log(err));


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(HTML);
    // await page.emulateMedia("screen");

    // Generates a PDF from the page content
    await page.pdf({ path: 'myTeam.pdf' });

    console.log('done');
    await browser.close();
    process.exit();
  } catch (error) {
    console.log(error)
  }

}

init();
