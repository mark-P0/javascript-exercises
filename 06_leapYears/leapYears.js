const leapYears = function (year) {
  const a = year % 4 === 0;
  const b = year % 100 === 0;
  const c = year % 400 === 0;

  /* prettier-ignore */
  const isLeapYear = (
    (a && !b) ||  // Leap year if div-by-4 and not div-by-100
    (a && c)      // Leap year if div-by-4 and div-by-400
  )

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
