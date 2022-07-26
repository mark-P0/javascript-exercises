function roundOff(number, places = 2) {
  /*  Given `number = 101.2534`
   *  Multiplying `number` by 10 moves the decimal to the right,
   *  i.e. `(number * 10) == 1012.534`
   *
   *  The number of places the decimal moves depends on the
   *  number of times `number` is multiplied by 10
   *  i.e. 10 ** (places)
   */
  const factorPlaceValue = 10 ** places;

  const result = Math.round(number * factorPlaceValue) / factorPlaceValue;
  return result;
}

const ftoc = function (fahrenheit) {
  /*  C = (F − 32) × 5/9
   */

  const resultFormula = (fahrenheit - 32) * (5 / 9);
  const result = roundOff(resultFormula, 1);

  return result;
};

const ctof = function (celsius) {
  /*  F = (C × 9/5) + 32
   */

  const resultFormula = celsius * (9 / 5) + 32;
  const result = roundOff(resultFormula, 1);

  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
