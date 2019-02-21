const Phrase = require("palindrome-caorec");

function palindromeTester() {
  event.preventDefault();

  let phraseItem = new Phrase(event.target.phraseGet.value);
  let palindromeResult = document.querySelector("#palindromeResult");
  console.log(phraseItem.content);

  if (phraseItem.content) {

    if (phraseItem.palindrome()) {
      palindromeResult.innerHTML = `<strong>"${phraseItem.content}"</strong> is a palindrome!`;
    } else {
      palindromeResult.innerHTML = `<strong>"${phraseItem.content}"</strong> is not a palindrome.`;
    }

  } else {
    palindromeResult.innerHTML = `It is an empty string!`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});
