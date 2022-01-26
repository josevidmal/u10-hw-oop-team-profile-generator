const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    };

    getSchool() {
        return this.school;
        /* let question = [
            {
                type: "input",
                message: "Which is the Intern school",
                name: "intern_school", 
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.school = answers;
            }); */
    };

    getRole() {
        return this.role = "Intern";
    };
};

module.exports = Intern;