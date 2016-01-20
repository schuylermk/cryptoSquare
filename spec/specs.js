describe('cryptoSquare', function() {
  // did not enter text
  it("is false if no text is entered", function() {
    expect(cryptoSquare("")).to.equal(false);
  });

  //is a perfect square
  it("is true if a perfect square", function() {
    expect(cryptoSquare("four")).to.equal(true); 
  });
});
