function reverse(string) {
  return Array.from(string).reverse().join("");
}

function phrase(content) {
  this.conent = content;

  this.procContent = function procContent() {
    return this.conent.toLowerCase();
  }

  this.palindrome = function() {
    return this.procContent() === reverse(this.procContent());
  }
}


phrase1 = new phrase("Racecar");
console.log(phrase1.palindrome());
