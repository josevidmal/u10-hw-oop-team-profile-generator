const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        return this.name

        /* let question = [
            {
                type: "input",
                message: "Who is the Employee?",
                name: "employee_name",
            }
        ];
        
        inquirer.prompt(question)
            .then((answers) => {
                this.name = answers;
            }); */
    };

    getId() {
        return this.id
        /* let question = [
            {
                type: "input",
                message: "Which is the employee's ID?",
                name: "employee_id",
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.id = answers;
            }); */
    };

    getEmail() {
        return this.email
        /* let question = [
            {
                type: "input",
                message: "Which is the employee's email address?",
                name: "employee_email",
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.email = answers;
            }); */
    };

    getRole() {
        return this.role = "Employee";
    };
};

module.exports = Employee;