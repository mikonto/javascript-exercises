const palindromes = function (text) {
    let noCaps = text.toLowerCase(); // everything into lowercase
    let onlyLettersArray = noCaps.match(/[a-z]/g); // makes a new array from letters only
    let onlyLetters = onlyLettersArray.join(""); // makes a string from the array
    let reversed = onlyLetters.split("").reverse().join(""); // reverses the string
    
    if (reversed === onlyLetters) { // compares reversed string with non reversed string
      return true
      }
    
    else {
      return false;
      };
          
    };

// Do not edit below this line
module.exports = palindromes;
