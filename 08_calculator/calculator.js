const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(array) {
  return array.reduce((res, item) =>{
    return res+item;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((res, item) =>{
    return res*item;
  })
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let res = 1;
  for (let i = 1; i<=a; i++){
    res *= i;
  }
  return res;
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
