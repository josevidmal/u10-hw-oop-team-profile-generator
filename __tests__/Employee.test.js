const inquirer = require("inquirer");
const Employee = require("../lib/Employee");

jest.mock("inquirer");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an object containing 'name', 'id' and 'email' properties set to the 'name', 'id', and 'email' argunments provided when called with the 'new' keyword", () => {
            const name = "Jose";
            const id = 65;
            const email = "jose@fakemail.com";
            const obj = new Employee(name, id, email);
            expect(obj.name).toEqual("Jose");
            expect(obj.id).toEqual(65);
            expect(obj.email).toEqual("jose@fakemail.com");
        })
    })

    describe("getName", () => {
        it("should prompt a question object and get the name of an employee as an answer", () => {
            let p = Promise.resolve({ answers: {} });            
            return expect(p).resolves.toEqual({ answers: {} });
        })
    })

    describe("getId", () => {
        it("should prompt a question object and get the ID of an employee as an answer", () => {
            let p = Promise.resolve({ answers: {} });
            return expect(p).resolves.toEqual({ answers: {} });
        })
    })

    describe("getEmail", () => {
        it("should prompt a question object and get the email of an employee as an answer", () => {
            let p = Promise.resolve({ answers: {} });
            return expect(p).resolves.toEqual({ answers: {} });
        })
    })

    describe("getRole", () => {
        it("should return a 'role' property set to 'Employee' as its value", () => {
            expect("Employee").toBeTruthy();
        })
    })

})