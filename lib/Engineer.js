const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    };

    getGitHub() {
        return this.github;
        /* let question = [
            {
                type: "input",
                message: "Which is the Engineer's GitHub username",
                name: "engineer_github",
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.github = answers;
            }); */
    };

    getRole() {
        return this.role = "Engineer";
    };
};

module.exports = Engineer;