// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const username = "username";
    const newEngineer = new Engineer("fred", 1, "fred@fred.fred", username);

    expect(newEngineer.github).toBe(username);
});

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const newEngineer = new Engineer("fred", 1, "fred@fred.fred", "username");

    expect(newEngineer.getRole()).toBe(role);
});

test("Can get GitHub username via getGithub()", () => {
    const username = "username";
    const newEngineer = new Engineer("fred", 1, "fred@fred.fred", username);

    expect(newEngineer.getGithub()).toBe(username);
});
