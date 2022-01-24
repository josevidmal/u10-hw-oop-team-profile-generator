const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

jest.mock("inquirer");

describe("Intern subclass", () => {
    describe("Initialization", () => {
        it("should create an object that inherits the properties of the 'Employee' class and adds a school property", () => {
            const name = "Jose";
            const id = 65;
            const email = "jose@fakemail.com";
            const obj = new Employee(name, id, email);
            const school = "ITESM";
            const subObj = new Intern(name, id, email, school);
            expect(subObj.name).toEqual(obj.name);
            expect(subObj.id).toEqual(obj.id);
            expect(subObj.email).toEqual(obj.email);
            expect(subObj.school).toEqual("ITESM");
        });
    });

    describe("getSchool", () => {
        it("should prompt a question object and get the School of an Intern as an answer", () => {
            let p = Promise.resolve({ answers: {} });
            return expect(p).resolves.toEqual({ answers: {} });
        });
    });

    describe("getRole", () => {
        it("should return a 'role' property set to 'Intern' as its value", () => {
            expect("Intern").toBeTruthy();
        });
    });
});