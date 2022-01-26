const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

jest.mock("inquirer");

describe("Engineer subclass", () => {
    describe("Initialization", () => {
        it("should create an object that inherits the properties of the 'Employee' class and adds a 'github' property", () => {
            let name;
            let id;
            let email;
            let role;
            let obj = new Employee(name, id, email, role);
            let github;
            let subObj = new Engineer(name, id, email, role, github);
            expect(subObj.name).toEqual(obj.name);
            expect(subObj.id).toEqual(obj.id);
            expect(subObj.email).toEqual(obj.email);
            expect(subObj.role).toEqual(obj.role);
            expect(subObj.github).toEqual(github);            
        });
    });

    describe("getGithub", () => {
        it("should return the value given by the user to the 'github' property in the 'Engineer' subclass", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let role;
            let github = "joegithub"
            let obj = new Engineer(name, id, email, role, github);
            expect(obj.github).toEqual("joegithub");
        });
    });

    describe("getRole", () => {
        it("should return the value 'Engineer' to the 'role' property in the 'Engineer' subclass", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let role = "Engineer";
            let github = "joegithub";
            let obj = new Engineer(name, id, email, role, github);
            expect(obj.role).toEqual("Engineer");
        });
    });
});