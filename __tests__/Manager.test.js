const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

jest.mock("inquirer");

describe("Manager subclass", () => {
    describe("Initialization", () => {
        it("should create an object that inherits the properties of the 'Employee' class and adds an 'officeNumber' property", () => {
            let name;
            let id;
            let email;
            let role;
            let obj = new Employee(name, id, email, role);
            let officeNumber;
            let subObj = new Manager(name, id, email, role, officeNumber);
            expect(subObj.name).toEqual(obj.name);
            expect(subObj.id).toEqual(obj.id);
            expect(subObj.email).toEqual(obj.email);
            expect(subObj.role).toEqual(obj.role);
            expect(subObj.officeNumber).toEqual(officeNumber);
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the value given by the user to the 'officeNumber' property in the 'Manager' subclass", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let role;
            let officeNumber = 10
            let obj = new Manager(name, id, email, role, officeNumber);
            expect(obj.officeNumber).toEqual(10);
        });
    });

    describe("getRole", () => {
        it("should return the value 'Manager' to the 'role' property in the 'Manager' subclass", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let role = "Manager";
            let officeNumber = 10;
            let obj = new Manager(name, id, email, role, officeNumber);
            expect(obj.role).toEqual("Manager");
        });
    });
});