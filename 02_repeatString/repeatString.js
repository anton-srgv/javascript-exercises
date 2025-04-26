const repeatString = function(string, num) {
  let result = '';
  if (num < 0) {
    result = 'ERROR';
  } else {
    for (let x = 0; x < num; x++) {
      result += string;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
