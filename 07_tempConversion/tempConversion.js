const convertToCelsius = function(fTemp) {
  const cTemp = 5/9*(fTemp-32);
  return (Math.round(cTemp * 10) / 10);
};

const convertToFahrenheit = function(cTemp) {
  const fTemp = (cTemp*(9/5))+32;
  return (Math.round(fTemp * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
