// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const newEmployee = new Employee();

    expect(typeof newEmployee).toBe("object")
});

test("Can set name via constructor arguments", () => {
    const name = "fred";
    const newEmployee = new Employee(name);

    expect(newEmployee.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const id = 1;
    const newEmployee = new Employee("fred", id);

    expect(newEmployee.id).toBe(id);
});

test("Can set email via constructor argument", () => {
    const email = "fred@fred.fred";
    const newEmployee = new Employee("fred", 1, email);

    expect(newEmployee.email).toBe(email);
});

test("Can get name via getName()", () => {
    const name = "fred";
    const newEmployee = new Employee(name);

    expect(newEmployee.getName()).toBe(name);
});

test("Can get id via getId()", () => {
    const id = 1;
    const newEmployee = new Employee("fred", id);

    expect(newEmployee.getId()).toBe(id);
});

test("Can get email via getEmail()", () => {
    const email = "fred@fred.fred";
    const newEmployee = new Employee("fred", 1, email);

    expect(newEmployee.getEmail()).toBe(email);
});

test("getRole() should return \"Employee\"", () => {
    const role = "Employee";
    const newEmployee = new Employee("fred", 1, "fred@fred.fred");

    expect(newEmployee.getRole()).toBe(role);
});
