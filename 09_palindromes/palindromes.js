const palindromes = function (text) {
    let noCaps = text.toLowerCase(); 
   
    regex = /[a-z]/g;
    let onlyLettersArray = noCaps.match(regex);
    
    
    let onlyLetters = onlyLettersArray.join("");
  
    let reversed = onlyLetters.split("").reverse().join("");
      console.log(reversed); // TEST
      console.log(text); // TEST
    
    if (reversed === onlyLetters) {
      return true
      }
    
    else {
      return false;
      };
          
    };

// Do not edit below this line
module.exports = palindromes;
