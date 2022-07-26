const reverseString = function (string) {
  /*  Non-loop solution
   */
  // return Array.from(string).reverse().join('');

  /*  Looping solution
   */
  let newString = '';
  for (let idx = string.length - 1; 0 <= idx; idx--) {
    newString += string[idx];
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
