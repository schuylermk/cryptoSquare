var cryptoSquare = function(text){
  if (text !== "") {
    if (Math.sqrt(text.length) % 1 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
