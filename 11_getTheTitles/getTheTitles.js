const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

const getTheTitles = function(array) { // function to create & return a new array that consists all the titles from books-array
let titleArray = []; // create new array titleArray
  for (let i = 0; i < array.length; i++) { // loop through books-array
  titleArray.push(array[i].title) // add all "titles" in book-array into titleArray
  };

return titleArray; // return new array

};

// getTheTitles(books) // ['Book','Book2']

// Do not edit below this line
module.exports = getTheTitles;
