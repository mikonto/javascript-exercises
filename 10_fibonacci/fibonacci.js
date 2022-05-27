const fibonacci = function(number) {
    let n1 = 0; 
    let n2 = 1; 
    let nextTerm;

    if (typeof number === 'string') { // if argument is string -> convert to number
        number = parseInt(number);
    }

if (number > 0) { // if argument is positive number
    for (let i = 1; i <= number; i++) { // loop iterates the amount of argument
        nextTerm = n1 + n2;  // in each iteration, the value of the second term is stored in variable n1 
        n1 = n2;             // and the sum of two previous terms is stored in variable n2
        n2 = nextTerm; 
    }

return n1; // value of n1 in the last loop iteration
}

else { // if argument is negative number
    return "OOPS";
}

};

// Do not edit below this line
module.exports = fibonacci;





