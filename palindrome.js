function palindrome(string) {
  return string.split("").reverse().join("").toLowerCase() === string.toLowerCase();  
}
