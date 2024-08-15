const add = function(a, b) {
	return parseInt(a + b);
};

const subtract = function(a, b) {
	return parseInt(a - b);
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, num) => sum * num, 1);
};

const power = function(a, b) {
	if(b == 0)return 1;
  else return a * power(a, b - 1);
};

const factorial = function(a) {
	if(a == 0)return 1;
  else return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
