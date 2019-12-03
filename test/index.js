const fs = require("fs");
const open = require("open");
const inquirer = require("inquirer");
const axios = require("axios");
const generateHTML = require("./generateHTML");
const path = require("path");
const puppeteer = require('puppeteer');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const employee = require("./Employee.test");
const engineer = require("./Engineer.test");
const intern = require("./Intern.test");
const manager = require("./Manager.test");



const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "list",
    name: "job title",
    message: "What is your current role in this company?",
    choices: ["manager", "engineer", "intern"]
  },
  {
    type: "input",
    name: "name",
    message: "If you have a Github account, Enter your Github username?"
  },
  {
    type: "list",
    name: "school",
    message: "Which school did you attend?",  
    choices: ["UCLA", "Boston U", "UNH"]
  },

  
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

    const github = await axios.get(`https://api.github.com/users/${answers.name}`);
    const githubRepos = await axios.get(`https://api.github.com/users/${answers.name}/repos`)

    const stars = githubRepos.data.reduce((total, current) => {
      total += current.stargazers_count
      return total
    }, 0)

    const data = {
      stars,
      ...github.data
    }
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
