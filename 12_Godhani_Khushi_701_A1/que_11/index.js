function isEvenDigit(digit) {
  if (typeof digit !== 'number' || digit < 0 || digit > 9 || !Number.isInteger(digit)) {
    return false;
  }
  return digit % 2 === 0;
}

module.exports = isEvenDigit;
