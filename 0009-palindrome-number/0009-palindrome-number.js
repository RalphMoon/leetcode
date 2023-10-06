/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const numString = x.toString();
  
  if (numString.length === 1) return true;
  
  let left = 0;
  let right = numString.length - 1;
  
  while (left < right) {
    if (numString[left] === numString[right]) return isPalindrome(numString.slice(1, -1));
  
    return false;
  }
  
  return true;
};