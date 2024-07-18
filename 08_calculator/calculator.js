const add = function(...args) {

  let sum = 0
	for (let i = 0; i < args.length; i++) {
    sum += args[i]
  } return sum;
};

const subtract = function(...args) {
  let total = args[0]
	for (let i = 1; i < args.length; i++) {
    total -= args[i]
  } return total;
};

const sum = function(input) {
  let total = 0
  for (let i = 0; i < input.length; i++) {
    total += input[i]
  } return total;
};

const multiply = function(input) {
  let total = 1
  for (let i = 0; i < input.length; i++) {
    total = total * input[i]
  } return total;
};

const power = function(number, power) {
	let total = 0;
  for (let i = 0; i < power + 1; i++) {
    total += number * number;
  } return total;
};


const factorial = function(value) {
  let total = 1;
  for (let i = value; i > 0; i--) {
    total *= i
  } return total
};

console.log(factorial(5))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
