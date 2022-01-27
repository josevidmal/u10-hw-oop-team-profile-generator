const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const helper = require("./src/helper.js");

const teamMembers = [];

/* function init() {
    let manager = new Manager();
     
        manager.getName()
        .then((answers) => {
            manager.getId()
        }).then((answers) => {
            manager.getEmail()
        }).then((answers) => {
            manager.getOfficeNumber()
        }).then((answers) => {
            manager.getRole
        })

} 

init(); */

const mgrQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Who is the Team Manager?",
                name: "manager_name",
            },
            {
                type: "input",
                message: "Which is the Team Manager's employee ID?",
                name: "manager_id",
            },
            {
                type: "input",
                message: "Which is the Team Manager's email address?",
                name: "manager_email",
            },
            {
                type: "input",
                message: "Which is the Team Manager's office number?",
                name: "office_number",
            },
        ])
    
        .then((answers) => {
            let manager = new Manager(answers.manager_name, answers.manager_id, answers.manager_email, "Manager", answers.office_number);
            teamMembers.push(manager);
            console.log(teamMembers);
            addMember();
        });
};

const addMember = () => {
    inquirer
        .prompt(
            {
                type: "list",
                message: "What do you want to do now?",
                name: "member_or_finish",
                choices: ["Add Engineer", "Add Intern", "Finish building team"],
            },
        )
        
        .then((answers) => {
            if (answers.member_or_finish === "Add Engineer") {
                engQuestions();
            } if (answers.member_or_finish === "Add Intern") {
                intQuestions();
            } if (answers.member_or_finish === "Finish building team") {
                fs.writeFile('./dist/index.html', generateHTML(), (err) => 
                err ? console.error(err) : console.log('HTML successfully generated')
                );
            }
        });
};

const engQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Who is the Engineer?",
                name: "engineer_name",
            },
            {
                type: "input",
                message: "Which is the Engineer employee ID?",
                name: "engineer_id",
            },
            {
                type: "input",
                message: "Which is the Engineer email address?",
                name: "engineer_email",
            },
            {
                type: "input",
                message: "Which is the Engineer GitHub username",
                name: "engineer_github",
            },
        ])

        .then((answers) => {
            let engineer = new Engineer(answers.engineer_name, answers.engineer_id, answers.engineer_email, "Engineer", answers.engineer_github);
            teamMembers.push(engineer);
            console.log(teamMembers);
            addMember();
        });

};

const intQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Who is the Intern?",
                name: "intern_name",
            },
            {
                type: "input",
                message: "Which is the Intern employee ID?",
                name: "intern_id",
            },
            {
                type: "input",
                message: "Which is the Intern email address?",
                name: "intern_email",
            },
            {
                type: "input",
                message: "Which is the Intern school",
                name: "intern_school",
            },
        ])

        .then((answers) => {
            let intern = new Intern(answers.intern_name, answers.intern_id, answers.intern_email, "Intern", answers.intern_school);
            teamMembers.push(intern);
            console.log(teamMembers);
            addMember();
        });

}; 

function init() {
    mgrQuestions();
}

init();

function renderRoleIcon() {
    //for (const item of teamMembers) {
        if (teamMembers.role === "Manager") {
            return `<i class="fas fa-mug-hot"></i>`;
        } if (item.role === "Engineer") {
            return `<i class="fas fa-glasses"></i>`;
        } if (item.role === "Intern") {
            return `<i class="fas fa-user-graduate"></i>`;
        }
    //}
};

function renderSection() {
    //for (const item of teamMembers) {
        if (item.role === "Manager") {
            return `<section id="manager" class="team-card">
            <div class="card-header">
                <h2>${item.name}</h2>
                <h3>${renderRoleIcon()}<span> ${item.role}</span></h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="employee-id">ID: ${item.id}</li>
                    <li class="email">Email: <a href="mailto:${item.email}">${item.email}</a></li>
                    <li id="office-number">Office number: ${item.officeNumber}</li>
                </ul>
            </div>
        </section>`
        } if (item.role === "Engineer") {
            return `<section id="engineer" class="team-card">
            <div class="card-header">
                <h2>${item.name}</h2>
                <h3>${renderRoleIcon()}<span> ${item.role}</span></h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="employee-id">ID: ${item.id}</li>
                    <li class="email">Email: <a href="mailto:${item.email}">${item.email}</a></li>
                    <li id="github">GitHub: <a href="https://github.com/${item.github}" target="_blank">${item.github}</a></li>
                </ul>
            </div>
        </section>`
        } if (item.role === "Intern") {
            return `<section id="intern" class="team-card">
            <div class="card-header">
                <h2>${item.name}</h2>
                <h3>${renderRoleIcon()}<span> ${item.role}</span></h3>
            </div>
            <div class="card-body">
                <ul>
                    <li class="employee-id">ID: ${item.id}</li>
                    <li class="email">Email: <a href="mailto:${item.email}">${item.email}</a></li>
                    <li id="school">School: ${item.school}</li>
                </ul>
            </div>
        </section>`
        } 
    //}
};

/* const generateHTML = (data) => {

    console.log(data);
} */

function generateHTML() {
    const teamSections = teamMembers.map(renderSection);
    const htmlSections = teamSections.join(' ');
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UFT-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="sample.css" />
            <title>Team Profile Generator</title>
        </head>
    
        <body>
    
            <header>
                <h1>My Team</h1>       
            </header>
    
            <main>

            ${htmlSections}
            
            </main>

    </body>
</html>`

};