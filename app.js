// Starter file provided by Instructor (03/09/2021) AC
const path = require("path");
const fs = require("fs");

const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team = [];

console.log(outputPath);

const render = require("./lib/htmlRenderer");

if (!fs.existsSync(OUTPUT_DIR)){
  fs.mkdirSync(OUTPUT_DIR);
}

fs.writeFileSync(outputPath, render([]));


const createEmployees = () => {
  inquirer.prompt([
    {
      type: "rawlist",
      message: "What type of employee would you like to create?",
      name: "type",
      choices: [
        "Engineer",
        "Intern",
        "Stop adding Employees."
      ]
    }
  ]).then((answers) => {
    if (answers.choices === "Engineer") {
      createEngineer();
    } else if (answers.choices === "Intern") {
      createIntern();
    } else {
      process.exit();
    }
  });
}

const init = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What's the manager's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What's the manager's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What's the manager's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What's the manager's office number?",
      name: "office"
    }
  ]).then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
    team.push(manager);
    createEmployees();
  });
}

const createIntern = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What's the Intern's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What's the Intern's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What's the Intern's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What's the Intern's school they are attending?",
      name: "school"
    }
  ]).then((answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    team.push(intern);
    createEmployees();
  });
}

const createEngineer = () => {
  inquirer.prompt([
    {
      type: "input",
      message: "What's the Engineer's name?",
      name: "name"
    },
    {
      type: "input",
      message: "What's the Engineer's ID?",
      name: "id"
    },
    {
      type: "input",
      message: "What's the Engineer's email?",
      name: "email"
    },
    {
      type: "input",
      message: "What's the Engineer's Github username?",
      name: "github"
    }
  ]).then((answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    team.push(manager);
    createEmployees();
  });
}


init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

