const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const school = "UNCC";
    const newIntern = new Intern("fred", 1, "fred@fred.fred", school);

    expect(newIntern.school).toBe(school);

});

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const newIntern = new Intern("fred", 1, "fred@fred.fred", "UNCC");

    expect(newIntern.getRole()).toBe(role);
});

test("Can get school via getSchool()", () => {
    const school = "UNCC";
    const newIntern = new Intern("fred", 1, "fred@fred.fred", school);

    expect(newIntern.getSchool()).toBe(school);
});
