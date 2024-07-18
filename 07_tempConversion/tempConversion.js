const convertToCelsius = function(fTemp) {
  let convert = Number((fTemp - 32) * 5/9)

  if (convert % 1 !== 0) {
    convert = convert.toFixed(1)
  }

  return Number(convert)
};

const convertToFahrenheit = function(cTemp) {
  let convert = Number((cTemp * 9/5) + 32)
  if (convert % 1 !== 0 && convert !== 0) {
    convert = convert.toFixed(1)
  }
  return Number(convert);
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
