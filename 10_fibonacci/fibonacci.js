const fibonacci = function (n) {
  /* prettier-ignore */
  if (!(
    n &&
    Number.isInteger(+n)
  )) throw `Argument "${n}" is not an integer!`

  if (n <= 0) return 'OOPS';
  if (n < 3) return 1;

  let fibTerms = [1, 1];
  for (let _ = 2; _ < n; _++) {
    fibTerms[1] = fibTerms[1] + fibTerms[0];
    fibTerms[0] = fibTerms[1] - fibTerms[0];
  }
  return fibTerms[1];
};

console.log(fibonacci(6));

// Do not edit below this line
module.exports = fibonacci;
