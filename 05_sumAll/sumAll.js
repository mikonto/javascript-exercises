const sumAll = function(min, max) {
    let sum = 0;
    
   	if (min < 0 || max < 0 || typeof min === "string" || typeof max === "string" || typeof min === "object" || typeof max === "object") { // if the number is negative, string or object
        return "ERROR";
    }
    
    else if (min < max) { // when the first number is smaller than the second
        for (let i = min; i <= max ; i++) {
        sum += i;
        }
    }

    else if (min > max) { // when the first number is larger than the second
        for (let i = max; i <= min ; i++) {
        sum += i;
        }
    }

return sum;
    
    };
    
    sumAll(1, [90, 1]) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;
