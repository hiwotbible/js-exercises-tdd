var greetpeople = require("./greet-people")

test("print hola+names", function () {
    // Arrange
    var student = ["hiwot", "lulu", "ana"];

    // Act
    var result = greetpeople(student);

    // Assert
    expect(result).toEqual("Hello hiwotluluana");
})