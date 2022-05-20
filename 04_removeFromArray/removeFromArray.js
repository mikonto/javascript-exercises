const removeFromArray = function(arr1, ...arr2) {
	return arr1.filter(test);

    function test(item) {
	return !arr2.includes(item)
	}
};

removeFromArray([1, 2, 3, 4], 3, 4); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
