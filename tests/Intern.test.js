const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with a 'name', 'id', 'email' and 'school' properties set to the 'name', 'id', 'email' and 'school' arguments passed to the constructor", () => {
      const intern = new Intern(
        "John",
        1,
        "john@email.com",
        "Georgia State University"
      );
      expect(intern.name).toEqual("John");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("john@email.com");
      expect(intern.school).toEqual("Georgia State University");
    });
  });

  describe("getSchool", () => {
    it("should return the 'school' argument that was passed to the constructor", () => {
      const intern = new Intern(
        "John",
        1,
        "john@email.com",
        "Georgia State University"
      );
      expect(intern.getSchool()).toEqual("Georgia State University");
    });
  });

  describe("getRole", () => {
    it("should return the string 'Intern'", () => {
      const intern = new Intern("John", 1, "john@email.com");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
