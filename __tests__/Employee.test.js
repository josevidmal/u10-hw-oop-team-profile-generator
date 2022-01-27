const Employee = require("../lib/Employee");

jest.mock("inquirer");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an object containing 'name', 'id' and 'email' properties set to the 'name', 'id', and 'email' argunments provided when called with the 'new' keyword", () => {
            let name;
            let id;
            let email;
            let role;
            let obj = new Employee(name, id, email, role);
            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.role).toEqual(role);
        });
    });

    describe("getName", () => {
        it("should return the value given by the user to the 'name' property in the 'Employee' class", () => {
            let name = "Joe";
            let obj = new Employee(name);
            expect(obj.name).toEqual("Joe");
        });
    });

    describe("getId", () => {
        it("should return the value given by the user to the 'id' property in the 'Employee' class", () => {
            let name = "Joe";
            let id = 50;
            let obj = new Employee(name, id);
            expect(obj.id).toEqual(50);
        });
    });

    describe("getEmail", () => {
        it("should return the value given by the user to the 'email' property in the 'Employee' class", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let obj = new Employee(name, id, email);
            expect(obj.email).toEqual("joe@fakemail.com");
        });
    });

    describe("getRole", () => {
        it("should return the value 'Employee' to the 'role' property in the 'Employee' class", () => {
            let name = "Joe";
            let id = 50;
            let email = "joe@fakemail.com";
            let role = "Employee";
            let obj = new Employee(name, id, email, role);
            expect(obj.role).toEqual("Employee");
        });
    });
});