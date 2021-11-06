const fs = require("fs");

function makeManagerCard(manager) {
  return `
    <article class="card">
      <header class="card-header">
        ${manager.getName()}
        <p>
        <i class="fas fa-coffee"></i>&nbsp${manager.getRole()}
        </p>
      </header>
      <p>ID: ${manager.getId()}</p>
      <p>Email: ${manager.getEmail()}</p>
      <p>Office number: ${manager.getOfficeNumber()}</p>
    </article>`;
}

function makeEngineerCard(engineer) {
  return `
    <article class="card">
      <header class="card-header">
        ${engineer.getName()}
        <p>
        <i class="fas fa-glasses"></i>&nbsp${engineer.getRole()}
        </p>
      </header>
      <p>ID: ${engineer.getId()}</p>
      <p>Email: ${engineer.getEmail()}</p>
      <p>Github Username: ${engineer.getGithubUsername()}</p>
    </article>`;
}

function makeInternCard(intern) {
  return `
    <article class="card">
      <header class="card-header">
        ${intern.getName()}
        <p>
        <i class="fas fa-user-graduate"></i>&nbsp${intern.getRole()}
        </p>
      </header>
      <p>ID: ${intern.getId()}</p>
      <p>Email: ${intern.getEmail()}</p>
      <p>School Name: ${intern.getSchool()}</p>
    </article>`;
}

function renderTeamTemplate(templateFile, outputFile, team) {
  fs.readFile(templateFile, "utf8", (error, html) => {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    let employeeCards = [];
    employeeCards.push(makeManagerCard(team.manager));

    team.engineers.forEach((engineer) => {
      employeeCards.push(makeEngineerCard(engineer));
    });
    team.interns.forEach((intern) => {
      employeeCards.push(makeInternCard(intern));
    });

    let newHtml = html.replace("{{ team_members }}", employeeCards.join(""));
    console.log(newHtml);

    fs.writeFile(outputFile, newHtml, (error) => {
      if (error) {
        console.log(error);
        process.exit(1);
      }
    });
  });
}

module.exports = renderTeamTemplate;
