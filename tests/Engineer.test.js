const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with a 'name', 'id', 'email' and 'githubUsername' properties set to the 'name', 'id', 'email' and 'githubUsername' arguments passed to the constructor", () => {
      const engineer = new Engineer("John", 1, "john@email.com", "yanghuixi1");
      expect(engineer.name).toEqual("John");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("john@email.com");
      expect(engineer.githubUsername).toEqual("yanghuixi1");
    });
  });

  describe("getGithubUsername", () => {
    it("should return the 'GithubUsername' argument that was passed to the constructor", () => {
      const engineer = new Engineer("John", 1, "john@email.com", "yanghuixi1");
      expect(engineer.getGithubUsername()).toEqual("yanghuixi1");
    });
  });

  describe("getRole", () => {
    it("should return the string 'Engineer'", () => {
      const engineer = new Engineer("John", 1, "john@email.com");
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
