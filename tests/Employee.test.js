const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with a 'name', 'id', and 'email' properties set to the 'name', 'id', and 'email' arguments passed to the constructor", () => {
      const employee = new Employee("John", 1, "john@email.com");
      expect(employee.name).toEqual("John");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("john@email.com");
    });
  });

  describe("getName", () => {
    it("should return the 'name' argument that was passed to the constructor", () => {
      const employee = new Employee("John", 1, "john@email.com");
      expect(employee.getName()).toEqual("John");
    });
  });

  describe("getId", () => {
    it("should return the 'id' argument that was passed to the constructor", () => {
      const employee = new Employee("John", 1, "john@email.com");
      expect(employee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the 'email' argument that was passed to the constructor", () => {
      const employee = new Employee("John", 1, "john@email.com");
      expect(employee.getEmail()).toEqual("john@email.com");
    });
  });

  describe("getRole", () => {
    it("should return the string 'Employee'", () => {
      const employee = new Employee("John", 1, "john@email.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
