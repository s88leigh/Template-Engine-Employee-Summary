const fs = require("fs");
const jest =require("jest");
const util = require("util");
//const puppeteer = require('puppeteer');
const path =require("path");
const inquirer = require("inquirer");
const generateHTML = require('./generateHTML.js');
// const employees = require('./library/employees.js');
// const manager = require("./library/manager.js");
// const engineer = require("./library/engineer.js");
// const intern = require("./library/intern.js");

const writeFileAsync = util.promisify(fs.writeFile);

const teamData = []

function promptUser() { 
  return inquirer.prompt([
   
      {
        type: "input",
        name: "name",
        message: "Please enter a manager's name."
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email?"
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
      }
    ]);

    function promptEngineer() {
      return inquirer.prompt([
    
      {
        type: "input",
        name: "name",
        message: "Please enter the name of your Engineer."
      },
      {
        type: "input",
        name: "id",
        message: "What is the Engineer's id?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?"
      },
      {
        type: "input",
        name: "github",
        message: "What is the Engineer's github username?"
      }
    ]);
 

    function promptIntern() {
      return inquirer.prompt([
    
      {
        type: "input",
        name: "name",
        message: "Please enter the name of the Intern."
      },
      {
        type: "input",
        name: "id",
        message: "What is the Intern's id?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email?"
      }
      
    ]);



async function init() {
  console.log("hi")
  try {
    const answers = await promptUser();

    const html = generateHTML(answers);

    await writeFileAsync("index.html", html);

    console.log("Successfully wrote to index.html");
  } catch(err) {
    console.log(err);
  }
}

init();