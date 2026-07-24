const sumAll = function(a, b) {
  const isValidInteger = (value) => typeof value === 'number' && Number.isInteger(value) && Number.isFinite(value) && value > 0;

  if (!isValidInteger(a) || !isValidInteger(b)) {
    return 'ERROR';
  }

  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const count = end - start + 1;

  return (start + end) * count / 2;
};

// Do not edit below this line
module.exports = sumAll;
