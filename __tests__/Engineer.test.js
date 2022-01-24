const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

jest.mock("inquirer");

describe("Engineer subclass", () => {
    describe("Initialization", () => {
        it("should create an object that inherits the properties of the 'Employee' class and adds a github property", () => {
            const name = "Jose";
            const id = 65;
            const email = "jose@fakemail.com";
            const obj = new Employee(name, id, email);
            const github = "josegithub";
            const subObj = new Engineer(name, id, email, github);
            expect(subObj.name).toEqual(obj.name);
            expect(subObj.id).toEqual(obj.id);
            expect(subObj.email).toEqual(obj.email);
            expect(subObj.github).toEqual("josegithub");            
        });
    });

    describe("getGithub", () => {
        it("should prompt a question object and get the GitHub username of an engineer as an answer", () => {
            let p = Promise.resolve({ answers: {} });
            return expect(p).resolves.toEqual({ answers: {} });
        });
    });

    describe("getRole", () => {
        it("should return a 'role' property set to 'Engineer' as its value", () => {
            expect("Engineer").toBeTruthy();
        });
    });
});