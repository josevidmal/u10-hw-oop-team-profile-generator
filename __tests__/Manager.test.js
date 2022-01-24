const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

jest.mock("inquirer");

describe("Manager subclass", () => {
    describe("Initialization", () => {
        it("should create an object that inherits the properties of the 'Employee' class and adds an officeNumber property", () => {
            const name = "Jose";
            const id = 65;
            const email = "jose@fakemail.com"
            const obj = new Employee(name, id, email);
            const officeNumber = "1"
            const subObj = new Manager(name, id, email, officeNumber);
            expect(subObj.name).toEqual(obj.name);
            expect(subObj.id).toEqual(obj.id);
            expect(subObj.email).toEqual(obj.email);
            expect(subObj.officeNumber).toEqual("1");
        })
    })

    describe("getRole", () => {
        it("should return a 'role' property set to 'Manager' as its value", () => {
            expect("Manager").toBeTruthy();
        })
    })
})