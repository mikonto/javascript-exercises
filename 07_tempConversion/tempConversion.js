const ftoc = function(fh) {

  celcius = ((fh - 32) * (5/9)); // [°C] = ([°F] − 32) × 5⁄9
  return Math.round(celcius * 10) / 10
  
  };
  
  const ctof = function(ce) {
  fahrenheit = ((ce * (9/5)) + 32); // [°F] = [°C] × 9⁄5 + 32
  return Math.round(fahrenheit * 10) / 10
  
  };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
