const isEven = num => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

const sum = arr => {
  return arr.reduce((a, b) => a + b, 0);
};

const comboSum = (arr, sum) => {};

module.exports = {
  isEven,
  sum,
  comboSum
};
