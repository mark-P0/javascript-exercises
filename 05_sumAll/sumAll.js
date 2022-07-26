const sumAll = function (lower, upper) {
  /* Validation */
  for (const arg of [lower, upper]) {
    /* prettier-ignore */
    if (!(
      (typeof arg === 'number') &&
      (arg >= 0)
    )) return 'ERROR';
  }

  /* Swap arguments if not in order */
  if (lower > upper) [lower, upper] = [upper, lower];

  const numRange = Array.from(
    { length: upper - lower + 1 },
    (_, idx) => idx + lower
  );

  const sum = numRange.reduce((acmlSum, num) => acmlSum + num, 0);

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
