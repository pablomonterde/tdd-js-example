describe("Kata FizzBuzz", function() {

  beforeEach(function() {
   
  });

  it("should return 0 when ask 0", function() {
    // Arrange
    var fizzbuzz = new FizzBuzz();
    // Act
    var result = fizzbuzz.ask(0);
    // Assert
    expect(result).toEqual("0");
  });

});
