/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let result = 0;
  const romanEntity = {
    "V": "I",
    "X": "I",
    "L": "X",
    "C": "X",
    "D": "C",
    "M": "C",
  };
  
  for (let i = s.length - 1; i >= 0; i--) {
    if (romanEntity[s[i]] === s[i - 1]) {
      result += convertRoman(s[i]) - convertRoman(s[i - 1]);
      i--;
      continue;
    }
    
    result += convertRoman(s[i]);
  }
  
  function convertRoman(char) {
    switch (char) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  }
  
  return result;
};