const fibonacci = function(n) {
  const index = Number(n);

  if (!Number.isInteger(index) || index < 0) {
    return 'OOPS';
  }

  if (index === 0) {
    return 0;
  }

  if (index === 1 || index === 2) {
    return 1;
  }

  let previous = 1;
  let current = 1;

  for (let i = 3; i <= index; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }

  return current;
};

// Do not edit below this line
module.exports = fibonacci;
