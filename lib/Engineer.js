const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };

    getGitHub() {
        let question = [
            {
                type: "input",
                message: "Which is the Engineer's GitHub username",
                name: "engineer_github",
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.github === answers;
            });
    };

    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;