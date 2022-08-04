const palindromes = function (string) {
  if (typeof string !== 'string') {
    throw `Argument ${string} is not a string!`;
  }

  string = string.toLowerCase().replace(/[^a-z]/g, '');
  const result = string === string.split('').reverse().join('');
  return result;
};

// Do not edit below this line
module.exports = palindromes;
