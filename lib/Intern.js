const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };

    getSchool() {
        let question = [
            {
                type: "input",
                message: "Which is the Intern school",
                name: "intern_school", 
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.school === answers;
            });
    };

    getRole() {
        return "Intern";
    };
};

module.exports = Intern;