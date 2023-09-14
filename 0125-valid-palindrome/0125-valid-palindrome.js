/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  const isAlphanumeric = function (char) {
    const unicode = char.charCodeAt(0);
    
    if (unicode >= 48 && unicode <= 57 ||
        unicode >= 65 && unicode <= 90 ||
        unicode >= 97 && unicode <= 122) return true;
    
    return false;
  };
  const filteredLetters = s.split("").filter((char) => isAlphanumeric(char)).map((char) => char.toLowerCase());
  const filteredString = filteredLetters.join("");
  const reversedString = filteredLetters.slice().reverse().join("");
  
  return filteredString === reversedString;
};