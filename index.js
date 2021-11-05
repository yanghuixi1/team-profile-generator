const inquirer = require("inquirer");
const renderTeamTemplate = require("./src/template");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const templateFile = "./src/template.html";
const outputFile = "./dist/index.html";

class Team {
  constructor(managerAnswers) {
    this.manager = new Manager(
      managerAnswers.name,
      managerAnswers.id,
      managerAnswers.email,
      managerAnswers.officeNumber
    );
    this.engineers = [];
    this.interns = [];
  }

  addEngineer(engineerAnswers) {
    let currEngineer = new Engineer(
      engineerAnswers.name,
      engineerAnswers.id,
      engineerAnswers.email,
      engineerAnswers.githubUsername
    );
    this.engineers.push(currEngineer);
  }

  addIntern(internAnswers) {
    let currIntern = new Intern(
      internAnswers.name,
      internAnswers.id,
      internAnswers.email,
      internAnswers.currentSchool
    );
    this.interns.push(currIntern);
  }
}

function askContinueQuestion(team) {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Would you like to add an engineer, add an intern, or finish building team?",
        choices: ["Engineer", "Intern", "Finish"],
        name: "nextStep",
      },
    ])
    .then((answers) => {
      if (answers.nextStep === "Engineer") {
        askEngineerQuestions(team);
      } else if (answers.nextStep == "Intern") {
        askInternQuestions(team);
      } else if (answers.nextStep == "Finish") {
        renderTeamTemplate(templateFile, outputFile, team);
      }
    });
}

function askManagerQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter team manager's name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter team manager's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter team manager's email",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter team manager's office number",
        name: "officeNumber",
      },
    ])
    .then((managerAnswers) => {
      const team = new Team(managerAnswers);
      askContinueQuestion(team);
    });
}

function askEngineerQuestions(team) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the engineer's name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the engineer's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter engineer's email",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the engineer's GitHub username",
        name: "githubUsername",
      },
    ])
    .then((engineerAnswers) => {
      team.addEngineer(engineerAnswers);
      askContinueQuestion(team);
    });
}

function askInternQuestions(team) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the intern's name",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter the intern's employee ID",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter intern's email",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter intern's current school",
        name: "currentSchool",
      },
    ])
    .then((internAnswers) => {
      team.addIntern(internAnswers);
      askContinueQuestion(team);
    });
}

askManagerQuestions();
