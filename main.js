const Phrase = require("palindrome-caorec");

let string = prompt("Please enter a string for palindrome testing:");
let phraseItem = new Phrase(string);

if (phraseItem.palindrome()) {
  alert(`"${phraseItem.content}" is a palindrome!`);
} else {
  alert(`"${phraseItem.content}" is not a palindrome.`)
}
