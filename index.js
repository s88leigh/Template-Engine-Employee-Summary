const fs = require('fs');
const puppeteer = require('puppeteer');
const hbs = require('handlebars');
const path =require('path');
//const data = require('./database.json');

const compile = async function(templateName, data ) {
  const filePath = path.join(process.cwd(), 'templates', `${templateName}.hbs`);
  const html = await fs.readFile(filePath, 'utf-8');
  return hbs.compile(html)(data);
};

(async function() {
  try {

      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      const content = await compile('teamRoster', data);

      await page.setContent(content);
      await page.emulateMedia('screen');
      await page.pdf({
        path: 'myTeam.pdf'

      })

      console.log('done');
      await browser.close();
      process.exit();

  } catch (error) {
    console.log ('our error', error);
  }
})();


// const questions = [
//   {
//     type: "list",
//     name: "name",
//     message: "Choose a manager for your team.",
//     choices: ["Alice", "George", "Melissa", "Sam", "Paul"]
//   },
//   {
//     type: "list",
//     name: "name",
//     message: "Choose an engineer",
//     choices: ["Tim", "Jan", "Kelly", "Christina", "Jack"]
//   },
//   {
//     type: "list",
//     name: "name",
//     message: "Choose an intern for your team",  
//     choices: ["Kathy", "Greg", "Lisa", "Jim"]
//   }
// ];

// const compile = async function (filename, data) {
//   const filePath = path.join(process.cwd(), "myTeam.pdf");
//   const html = await fs.readFile(filePath, 'utf-8');
// };

// async function init() {

//   try {
//     const answers = await inquirer.prompt(questions);
//     console.log(answers)
//     if (!answers) { throw "No answers provided!" };

//     const HTML = generateHTML(employees)

//     fs.writeFile("index.html", HTML, err => console.log(err));


//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(HTML);
//     // await page.emulateMedia("screen");

//     // Generates a PDF from the page content
//     await page.pdf({ path: 'myTeam.pdf' });

//     console.log('done');
//     await browser.close();
//     process.exit();
//   } catch (error) {
//     console.log(error)
//   }

// }

// init();
