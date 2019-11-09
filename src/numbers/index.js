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

const comboSum = (arr, sum) => {
  var match = false;
  arr.forEach(num => {
    for (i = 0; i < arr.length; i++) {
      if (match === true) {
        break;
      }
      if (arr.indexOf(num) !== i) {
        if (num + arr[i] === sum) {
          match = true;
          return match;
        }
      }
    }
  });
  return match;
};

module.exports = {
  isEven,
  sum,
  comboSum
};
