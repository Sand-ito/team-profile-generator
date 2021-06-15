const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumber = 123;
    const newManager = new Manager("fred", 1, "fred@fred.fred", officeNumber);

    expect(newManager.officeNumber).toBe(officeNumber);
});

test('getRole() should return "Manager"', () => {
    const role = "Manager";
    const newManager = new Manager("fred", 1, "fred@fred.fred", 123);

    expect(newManager.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
    const officeNumber = 123;
    const newManager = new Manager("fred", 1, "fred@fred.fred", officeNumber);

    expect(newManager.getOfficeNumber()).toBe(officeNumber);
});
