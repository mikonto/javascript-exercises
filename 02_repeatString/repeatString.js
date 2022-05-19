const repeatString = function(string, num) {

    let repeatString = "";
    
    if (num > 0) {
    while (num > 0) {
        repeatString += string;
        num--;
        }
    return repeatString;   
    }
    
   else if (num == 0) {
        return "";
        }

    else if (num < 0){
        return "ERROR";
    }

    }

   
    
    repeatString('hey', 3); // returns 'heyheyhey'
    
    
    
    // Do not edit below this line
    module.exports = repeatString;
