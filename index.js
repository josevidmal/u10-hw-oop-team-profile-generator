const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const helper = require("./src/helper.js");

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
            helper.teamMembers.push(manager);
            console.log(helper.teamMembers);
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
                fs.writeFile("./dist/index.html", helper.generateHTML(), (err) => 
                err ? console.error(err) : console.log("HTML successfully generated")
                );
                fs.writeFile("./dist/style.css", helper.generateCSS(), (err) => 
                err ? console.error(err) : console.log("CSS successfully generated")
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
            helper.teamMembers.push(engineer);
            console.log(helper.teamMembers);
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
            helper.teamMembers.push(intern);
            console.log(helper.teamMembers);
            addMember();
        });

};

function init() {
    mgrQuestions();
}

init();