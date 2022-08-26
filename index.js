

function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
 return word;
}

function isPalindrome(word) {
 const reversedWord = reverseString(word);
 if (word === reversedWord) {
   return true;
 } else {
   return false;
 }
}
function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
 return word;
}

function isPalindrome(word) {
 const reversedWord = reverseString(word);
 if (word === reversedWord) {
   return true;
 } else {
   return false;
 }
}
if (require.main === module) {
  return reversedWord = reversedWordArray
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
 
  console.log("");
 
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
 }
 
 module.exports = isPalindrome;

