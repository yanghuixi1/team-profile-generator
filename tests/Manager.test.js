const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with a 'name', 'id', 'email' and 'officeNumber' properties set to the 'name', 'id', 'email' and 'officeNumber' arguments passed to the constructor", () => {
      const manager = new Manager("John", 1, "john@email.com", "100");
      expect(manager.name).toEqual("John");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("john@email.com");
      expect(manager.officeNumber).toEqual("100");
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the 'getOfficeNumber' argument that was passed to the constructor", () => {
      const manager = new Manager("John", 1, "john@email.com", "100");
      expect(manager.getOfficeNumber()).toEqual("100");
    });
  });

  describe("getRole", () => {
    it("should return the string 'Manager'", () => {
      const manager = new Manager("John", 1, "john@email.com");
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
