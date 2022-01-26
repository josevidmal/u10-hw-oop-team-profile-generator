const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role, officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    };

    getOfficeNumber() {
        return this.officeNumber;
        /*let question = [
            {
                type: "input",
                message: "Which is the Team Manager's office number?",
                name: "office_number",
            }
        ];

        inquirer.prompt(question)
            .then((answers) => {
                this.officeNumber = answers;
            }); */
    };

    getRole() {
        return this.role = "Manager";
    };
};

module.exports = Manager;