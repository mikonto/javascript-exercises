const findTheOldest = function(array) { // function to return oldest person object
    const d = new Date(); 
    let year = d.getFullYear(); // this variable stores current year

    for (let i = 0; i < array.length; i++) { // loop through the array
          if (array[i].yearOfDeath === undefined) { // if object does not have yearOfDeath -> yearOfDeath = current year
            array[i].yearOfDeath = year;
          }
    };

    const oldest = array.sort(function(a, b) { // sort array based on age (yearOfDeath - yearOfBirth)
        const lastInventor = a.yearOfDeath - a.yearOfBirth;
        const nextInventor = b.yearOfDeath - b.yearOfBirth;
        return lastInventor > nextInventor ? -1 : 1;
      });

      oldestObject = oldest[0]; // create new object from first array (first one is oldest)
      return oldestObject; // return object of oldest person
};

// Do not edit below this line
module.exports = findTheOldest;
