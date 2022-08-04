function isNumeric(number) {
  return +number === number;
}

const add = function (addend1, addend2) {
  return addend1 + addend2;
};

const subtract = function (minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function (addends) {
  const result = addends.reduce((acmlSum, addend) => acmlSum + addend, 0);
  return result;
};

const multiply = function (factors) {
  const product = factors.reduce((acmlProd, factor) => acmlProd * factor, 1);
  return product;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  const numArray = Array.from({ length: num }, (_, idx) => idx + 1);
  const result = multiply(numArray);
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
