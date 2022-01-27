const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

jest.mock("inquirer");

describe("Intern subclass", () => {
    describe("Initialization", () => {
        it("should create an object that inherits the properties of the 'Employee' class and adds a 'school' property", () => {
            let name;
            let id;
            let email;
            let role;
            let obj = new Employee(name, id, email, role);
            let school;
            let subObj = new Intern(name, id, email, role, school);
            expect(subObj.name).toEqual(obj.name);
            expect(subObj.id).toEqual(obj.id);
            expect(subObj.email).toEqual(obj.email);
            expect(subObj.role).toEqual(obj.role);
            expect(subObj.school).toEqual(school);
        });
    });

    describe("getSchool", () => {
        it("should return the value given by the user to the 'school' property in the 'Intern' subclass", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let role;
            let school = "ITESM"
            let obj = new Intern(name, id, email, role, school);
            expect(obj.school).toEqual("ITESM");
        });
    });

    describe("getRole", () => {
        it("should return the value 'Intern' to the 'role' property in the 'Intern' subclass", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let role = "Intern";
            let school = "ITESM";
            let obj = new Intern(name, id, email, role, school);
            expect(obj.role).toEqual("Intern");
        });
    });
});