const repeatString = function (string, num) {
  if (
    /*  */
    !(typeof string === 'string' && typeof num === 'number') ||
    !(num >= 0)
  )
    return 'ERROR';

  /*  Non-looping solution
   */
  // return string.repeat(num);

  /*  Looping solution
   */
  let newString = '';
  for (const _ of Array(num)) {
    newString += string;
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
