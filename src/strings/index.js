const split = (str, delim) => {
  return str.split(delim);
};

const pairs = str => {
  // write code for strings.pairs
  let chunks = [];
  for (var i = 0; i < str.length; i += 2) {
    chunks.push(str.substring(i, i + 2));
  }
  return chunks;
};

const reverse = str => {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
};

module.exports = {
  split,
  pairs,
  reverse
};
