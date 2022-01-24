const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        let question = [
            {
                type: "input",
                message: "Who is the Employee?",
                name: "employee_name",
            }
        ];
        
        inquirer.prompt(question)
            .then((answers) => {
                this.name === answers;
            });
    };

    getId() {
        let question = [
            {
                type: "input",
                message: "Which is the employee's ID?",
                name: "employee_id",
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.id === answers;
            });
    };

    getEmail() {
        let question = [
            {
                type: "input",
                message: "Which is the employee's email address?",
                name: "employee_email",
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.email === answers;
            });
    };

    getRole() {
        return "Employee";
    };
};

module.exports = Employee;