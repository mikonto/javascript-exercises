const leapYears = function(year) {

    if (year % 4 === 0) { 
        if (year % 400 === 0) { // If divisable by 400
        return true;
        }
        
        else if (year % 100 === 0) { // If divisable by 100
        return false;
        }
        
        else { // If divisable by 4
        return true;
        }
    
    }
    
    else {
    return false;
    }
    
    };
    


// Do not edit below this line
module.exports = leapYears;
