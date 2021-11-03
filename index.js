const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

class Team {
  constructor(manager) {
    this.manager = manager;
    this.engineers = [];
    this.interns = [];
  }

  addEngineer(engineer) {
    this.engineers.push(engineer);
  }

  addIntern(intern) {
    this.interns.push(intern);
  }
}

function renderTeamTemplate(team) {
  console.log(team.manager);
  console.log(team.engineers);
  console.log(team.interns);
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
        renderTeamTemplate(team);
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
    .then((manager) => {
      const team = new Team(manager);
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
    .then((engineer) => {
      team.addEngineer(engineer);
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
    .then((intern) => {
      team.addIntern(intern);
      askContinueQuestion(team);
    });
}

askManagerQuestions();
