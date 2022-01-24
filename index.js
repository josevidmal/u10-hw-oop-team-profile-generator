const inquirer = require("inquirer");

const fs = require("fs");

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
    
        .then(() => {
            addMember();
        })
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
            } else {
                return;
            }
        })
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

        .then(() => {
            addMember();
        })

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

        .then(() => {
            addMember();
        })

};

function init() {
    mgrQuestions();
};

init();