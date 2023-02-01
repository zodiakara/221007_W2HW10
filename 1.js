/* JS Basics
EXERCISE A
Create a variable called test and assign a string value to it.
*/

let test = "this is my variable";
//console.log(test);

/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let sum = 10 + 20;
//console.log(sum);

/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 
(it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20);
//console.log(random);

/* EXERCISE D
Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

const me = {
  name: "agata",
  surname: "orminska",
  age: "30",
};
//console.log(me);

/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously created object.
*/

delete me.age; //deleting age
//console.log(me.age); //checking if it's deleted -> result undefined
//console.log(me); //checking again - no age in the object

/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

me.skills = ["js", "css"];
//console.log(me);
//console.log(me.skills[1]);

/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
me.skills.pop(); //removing last skill from an array
//console.log(me); //checking if it worked

// JS Functions

/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/

const dice = () => {
  return Math.ceil(Math.random() * 6);
};
console.log(dice());

/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};
console.log(whoIsBigger(8, 5));

/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function (string) {
  return string.split(" ");
};
console.log(splitMe("i have a huge headache"));

/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
let myBool = true;
const string1 = "this is a random text";

const delOne = function (Boolean, string) {
  if (Boolean === true) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
};
console.log(delOne(myBool, string1));
console.log(delOne(!myBool, string1));

/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
*/

let trialtext = "blablabla 2 bla";

const onlyLetters = function containsNumbers(string) {
  return string.replace(/[0-9]/g, "");
};
console.log("This is exercise 5 ---> " + onlyLetters(trialtext));

/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = (string) => {
  return string.indexOf("@") > 0 && string.indexOf(".") > 0;
  //^S+@\S+\.\S+$/.test(string);
};
console.log(isThisAnEmail("agata@yahoo.pl"), "hw check ex6");
/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/

const whatDayIsIt = () => {
  currentDate = new Date();
  const options = { weekday: "long" };
  return new Intl.DateTimeFormat("en-US", options).format(currentDate);
};
console.log(`today is ${whatDayIsIt()}`);

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a sum property holding the sum of all values extracted
and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
*/
const rollTheDices = function (x) {
  let sum = [];
  let sumsum = 0;
  for (let roll = 0; roll < x; roll++) {
    let singleRoll = dice();
    sum.push(singleRoll);
    sumsum += singleRoll;
  }
  return console.log(sumsum, "this is the sum of the arr:", sum);
};
rollTheDices(2);

/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.*/

const howManyDays = (date) => {
  const now = new Date();
  //new Date() is by default set as today's date
  const diffTime = now - date;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.
*/
const myBirthday = new Date(1992, 9, 8);
const randomDay = new Date(22, 2, 22);

function isTodayMyBday(date) {
  let birthdate = new Date(1992, 9, 8);
  return (
    date.getMonth() == birthdate.getMonth() &&
    date.getDate() == birthdate.getDate()
  );
}

console.log(isTodayMyBday(myBirthday));
console.log(isTodayMyBday(randomDay));

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 11


Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.

*/
const myDog = {
  name: "Roger",
  breed: "golden retriever",
  species: "dog",
  cute: "as fuck",
};

const deleteProp = (object, string) => {
  delete object[string];
  return object;
};
console.log(deleteProp(myDog, "breed"));
//console.log(myDog.breed); //double checking if it worked

/* EXERCISE 12
Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
const oldestMovie = () => {
  let movieArr = movies.map((movie) => parseInt(movie.Year));
  let oldestMovie = Math.max(...movieArr);
  return oldestMovie;
};
console.log(oldestMovie());
/* EXERCISE 13
Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/
const countMovies = () => {
  return movies.length;
};
//console.log(countMovies());
/* EXERCISE 14
Write a function called onlyTheTitles which creates an array with just the titles of the movies 
contained in the provided movies array.
*/
const onlyTheTitles = () => {
  return movies.map((movie) => movie.Title);
};
console.log(onlyTheTitles());
/* EXERCISE 15
Write a function called onlyInThisMillennium which returns only the movies produced in this 
millennium from the provided movies array.
*/
const onlyInThisMillennium = () => {
  let moviesArr = [];
  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) > 2000) moviesArr.push(movies[i]);
  }
  return moviesArr;
};
// console.log(onlyInThisMillennium());
/* EXERCISE 16
Write a function called getMovieById which receives an id as a parameter and returns the movie with the 
given id from the provided movies array.
*/
const getMovieById = (id) => {
  let index = movies.findIndex((movie) => movie.imdbID === id);
  return movies[index];
};
console.log(getMovieById("tt4154796"));

/* EXERCISE 17
Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the 
provided movies array have been produced.
*/
const sumAllTheYears = () => {
  let numbers = movies.map((movie) => parseInt(movie.Year));
  let total = 0;
  numbers.map((num) => (total += num));
  return total;
};
console.log(sumAllTheYears());
/* EXERCISE 18
Write a function called searchByTitle which receives a string as a parameter and returns all the movies
 in the provided movies array which contain that string in the title.
*/
const searchByTitle = (string) => {
  let matches = [];
  for (let index = 0; index < movies.length; index++) {
    if (movies[index].Title.toLowerCase().indexOf(string) !== -1) {
      matches.push(movies[index]);
    }
  }

  return matches;
};
//console.log(searchByTitle("avengers"));

/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided movies array 
which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/
const searchAndDivide = (string) => {
  let result = {
    match: [],
    unmatch: [],
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().indexOf(string) !== -1) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }
  return result;
};
//console.log(searchAndDivide("lord"));

/* EXERCISE 20
Write a function called "removeIndex" which receives a number as a parameter and returns the provided 
movies array without the element in the given position.
*/
const removeIndex = (x) => {
  delete movies[x];
  return movies;
};
// [EXTRAS] JS Advanced

/* EXERCISE 21
Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
Example:
halfTree(3)
*
**
***
*/
const halfTree = (height) => {
  for (let i = 0; i < height; i++) {
    let stars = "*".repeat(2 * i + 1);
    console.log(stars);
  }
};
halfTree(4);
/* EXERCISE 22
Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
Example:
tree(3)
*
***
*****
*/

const tree = (x) => {
  let treeHeight = x;
  let tree = [];
  let star = "*";

  for (let index = 0; index < treeHeight; index++) {
    tree.push(star);
    console.log(tree);
  }
};
console.log(tree(5));

const treeTwo = function (height) {
  for (let i = 0; i < height; i++) {
    let stars = "*".repeat(2 * i + 1);
    let spacesBefore = " ".repeat(height - i - 1);
    console.log(spacesBefore + stars);
  }
};
treeTwo(10);
/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/
const isItPrime = function (x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
};
console.log(isItPrime(5));
console.log(isItPrime(4));

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */
