const add = function(a, b) {
	return (a + b);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(ar) {
  var total = 0;
  for (var i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
};

const multiply = function(ar) {
  var total = 1;
  for (var i = 0; i < ar.length; i++) {
    total *= ar[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if(n===0) {
    return 1;
  }
  
  else {}
  return (n != 1) ? n * factorial(n - 1) : 1;
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
