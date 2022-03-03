// Print odd numbers in an array

// Anonymous function

var odd = function (val) {
  val.forEach((num) => {
    if (num % 2 != 0) {
      console.log("odd numbers:", num);
    }
  });
};
odd([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// IIFE Function

(function (val) {
  val.forEach((num) => {
    if (num % 2 != 0) {
      console.log("Odd Numbers:", num);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Convert all the strings to title caps in a string array

// Anonymous Function

let caps = function (arr) {
  arr.forEach((arr) => {
    console.log("To UpperCase:", arr.toUpperCase());
  });
};
caps(["karthik", "jessi"]);

// IIFE FUnction

(function (caps) {
  caps.forEach((arr) => {
    console.log("To UpperCase:", arr.toUpperCase());
  });
})(["Varun", "Nithya"]);

// Sum of all numbers in an array

//Anonymous Function

let frst = 0;
let sum = function (arr) {
  arr.forEach((arr) => {
    frst = frst + arr;
  });
};
sum([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("sum of all numbers:", frst);

// IIFE Function

let first = 0;
(function (sum) {
  sum.forEach((sum) => {
    first = first + sum;
  });
})([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("sum of all numbers:", first);

// Return all the prime numbers in an array

// Anonymous Function

let prime = function (num) {
  for (let i = 0; i < num.length; i++) {
    let flag = 0;
    for (let j = 2; j < num[i]; j++) {
      if (num[i] % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log("prime Number:", num[i]);
    }
  }
};
prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// IIFE Function

(function (number) {
  for (let i = 0; i < number.length; i++) {
    let flag = 0;
    for (let j = 2; j < number[i]; j++) {
      if (number[i] % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log("prime Number:", number[i]);
    }
  }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Return all the palindromes in an array

// Anonymous Function

var palindrome = function (str) {
  let isPalin = true;
  var len = str.length;
  console.log(len);
  var mid = Math.floor(len / 2);
  console.log(mid);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  if (isPalin === true) {
    console.log("array is palindrome", str);
  }
};
palindrome("12321");

// IIFE function

(function (strn) {
  let isPalin = true;
  var len = strn.length;
  console.log(len);
  var mid = Math.floor(len / 2);
  console.log(mid);

  for (var i = 0; i < mid; i++) {
    if (strn[i] !== strn[len - 1 - i]) {
      return false;
    }
  }
  if (isPalin === true) {
    console.log("array is palindrome", strn);
  }
})(["level"]);

// Return median of two sorted arrays of the same size

// Anonymous function

let median = function (arr1, arr2) {
  // arr1.sort((a, b) => a - b);
  console.log(arr1.sort((a, b) => a - b));
  //   arr2.sort((a, b) => a - b);
  console.log(arr2.sort((a, b) => a - b));

  console.log(arr1[parseInt(arr1.length / 2)]);
  console.log(arr2[parseInt(arr2.length / 2)]);
};
median([2, 4, 1, 3, 5], [7, 8, 5, 6, 4, 9]);

// IIFE function

(function (arr1, arr2) {
  // arr1.sort((a, b) => a - b);
  console.log(arr1.sort((a, b) => a - b));
  //   arr2.sort((a, b) => a - b);
  console.log(arr2.sort((a, b) => a - b));

  console.log(arr1[parseInt(arr1.length / 2)]);
  console.log(arr2[parseInt(arr2.length / 2)]);
})([2, 4, 1, 3, 5], [7, 8, 5, 6, 4, 9]);

// Remove duplicates from an array

// Anonymous function

let remove = function (val) {
  let setArray = [...new Set(val)];
  console.log(setArray);
};
remove(["a", "b", "c", "b"]);

// IIFE function

(function (val) {
  let setArray = [...new Set(val)];
  console.log(setArray);
})(["a", "d", "e", "d"]);

// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

function addFive(number) {
  return 5 + number;
}
console.log(addFive(5));
console.log(addFive(0));
console.log(addFive(-5));

// Write a function called “getOpposite”.
// Given a number, return its opposite

function getOpposite(number) {
  if (number === parseInt(number)) {
    return -number;
  } else {
    return -1;
  }
}

console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite(5.5));
console.log(getOpposite("5a"));

// Fill in your code that takes an number minutes and converts it to seconds.

function toSeconds(minutes) {
  return minutes * 60;
}
console.log(toSeconds(5));
console.log(toSeconds(3));
console.log(toSeconds(2));

// Create a function that takes a string and returns it as an integer.

function toInt(num) {
  let value = parseInt(num);
  console.log("integer is :", value);
}
toInt("5");
toInt("1000");
toInt("hello");

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function increment(number) {
  return number + 1;
}
console.log(increment(4));
console.log(increment(-3));

// Create a function that takes an array and returns the first element.

function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3, 4, 5, 6]));

// Convert Hours into Seconds

function hoursToSeconds(hour) {
  return hour * 3600;
}
console.log(hoursToSeconds(2));
console.log(hoursToSeconds(10));
console.log(hoursToSeconds(24));

// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle

function findPerimeter(length, width) {
  return 2 * (length + width);
}
console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false

function value(number1, number2) {
  if (number1 + number2 < 100) {
    return true;
  } else {
    return false;
  }
}
console.log(value(45, 50));
console.log(value(75, 60));

// There is a single operator in JavaScript, capable of providing the remainder of a division operation.
//  Two numbers are passed as parameters.
//  The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value

function remainder(number1, number2) {
  let remainderValue = number1 % number2;
  return console.log("Remainder:", remainderValue);
}
remainder(25, 7);
remainder(85, 3);
remainder(58, 8);

// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species.
//  You have to implement a function that returns the total number of legs of all the animals

function count(turkey, horse, pigs) {
  let turkeyLegs = 2;
  let horseLegs = 4;
  let piglegs = 4;
  let animalLegs = turkey * 2 + horse * 4 + pigs * 4;
  return console.log("Total Animal legs:", animalLegs);
}
count(2, 3, 5);
count(1, 2, 3);
count(5, 2, 8);

// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS

function fps(num1, num2) {
  return num1 * (num2 * 60);
}
console.log(fps(1, 1));
console.log(fps(10, 1));
console.log(fps(10, 25));

// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise

function div(number) {
  if (number % 5 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("DivisibleBy Five:", div(5));
console.log("DivisibleBy Five:", div(-55));
console.log("DivisibleBy Five:", div(37));

// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("isEven:", isEven(25));
console.log("isEven:", isEven("11h"));
console.log("isEven:", isEven(50));

// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd

function areBothOdd(number1, number2) {
  if (number1 % 2 == 0 || number2 % 2 == 0) {
    return false;
  } else {
    return true;
  }
}
console.log("Are Both Odd:", areBothOdd(7, 5));
console.log("Are Both Odd:", areBothOdd(10, 20));
console.log("Are Both Odd:", areBothOdd(7, 6));

// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string
// with the given first and last names separated by a single space

function getFullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return console.log("FullName =", fullName);
}
getFullName("Nithya", "Varun");

// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.

function getLengthOfWord(word) {
  return word.length;
}
console.log(getLengthOfWord("Vinoth Rekha"));
console.log(getLengthOfWord("Anu pallavi"));

// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length

function isSameLength(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}
console.log("Is Same Length:", isSameLength("hello", "world"));
console.log("Is Same Length:", isSameLength("Gowtham", "Thara"));

// Create a function to calculate the distance between two points defined by their x, y coordinate

function distance(x1, x2, y1, y2) {
  let distance = Math.sqrt(x2 - x1) + Math.sqrt(y2 - y1);
  console.log("Distance:", distance);
}
distance(100, 200, 300, 400);
distance(7, 15, 2, 3);

// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’

function getNthElement(array, int) {
  return array[int];
}
console.log(getNthElement([1, 3, 5], 0));
console.log(getNthElement([1, 3, 5], 1));

// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’

function getLastElement(array) {
  return array[array.length - 1];
}
console.log(getLastElement([1, 2, 3, 4]));
console.log(getLastElement([5, 8, 5, 3]));

// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var object = {
  name: "Pallavi",
};
function getProperty(obj, key) {
  return obj[key];
}
console.log(getProperty(object, "name"));

// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true

function addProperty(obj, key) {
  obj[key] = true;
  return obj;
}
let objct = {
  name: "Priya",
};
console.log(addProperty(objct, "isAlive"));

// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object

function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}
let object1 = {
  name: "Vinoth",
  age: 20,
};
console.log(removeProperty(object1, "name"));

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers

var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
function returnArray(arr) {
  if (arr.length < 1) {
    return [];
  }
  var newArr = [0, 0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr[0] += 1;
    } else {
      newArr[1] += arr[i];
    }
  }
  return newArr;
}
console.log(returnArray([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

// Create a function that receives an array of numbers and returns an array containing only the positive number

function getPositive(array) {
  let num = [];
  for (let i in array) {
    if (array[i] > 0) {
      num.push(array[i]);
    }
  }
  return num;
}
console.log(getPositive([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent)

function powersOfTwo(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.pow(2, i));
    console.log(arr);
  }
}
powersOfTwo(1);
powersOfTwo(5);

// Find the maximum number in an array of numbers

function maxNum(arr) {
  let num = 0;
  for (let i in arr) {
    num = Math.max(num, arr[i]);
  }
  return num;
}
console.log(maxNum([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

// Print the first 100 prime numbers

function primeNum(arr) {
  let newArr = [];
  for (let i = 1; i <= arr; i++) {
    let primeNum = false;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        primeNum = true;
        break;
      }
    }
    if (primeNum === false) {
      newArr.push(i);
    }
  }
  return newArr;
}
console.log(primeNum(100));

// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”

function primeNumber(nPrimes, startAt) {
  let num = [];
  for (let i = nPrimes; i < startAt; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      num.push(i);
    }
  }
  return num;
}
console.log(primeNumber(10, 100));

// Reverse a string

function reverseString(str) {
  let empty = [];
  for (let i in str) {
    empty.unshift(str[i]);
  }
  return empty.join("");
}
console.log(reverseString("JavaScript"));

// Create a function that will merge two arrays and return the result as a new array

function merge(arr1, arr2) {
  for (let i in arr2) {
    arr1.push(arr2[i]);
  }
  return arr1;
}
console.log(merge([1, 2, 3], [4, 5, 6]));

//Calculate the sum of numbers received in a comma delimited string

function sumOfNumbers(arr) {
  let split = arr.split(",").map(Number);
  let sum = 0;
  for (let i in split) {
    sum += split[i];
  }
  return sum;
}
console.log(sumOfNumbers("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

// Arrow function

// Print odd numbers in an array

let oddNum = (arr) => {
  let arr1 = [];
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};
console.log(oddNum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Convert all the strings to title caps in a string array

let Caps = (val) => {
  let arr = val.split(" ");
  let str = [];
  for (let i in arr) {
    str.push((arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)));
  }
  return str.join(" ");
};
console.log(Caps("hello world"));

// Sum of all numbers in an array

let sumOfAllNumbers = (arr) => {
  let sum = 0;
  for (let i in arr) {
    sum = sum + arr[i];
  }
  console.log(sum);
};
sumOfAllNumbers([1, 2, 3, 4, 5]);

// Return all the prime numbers in an array

let primeNumbers = (arr) => {
  return arr.filter((prm) => {
    for (let i = 2; i < prm; i++) {
      if (prm % i === 0) {
        return false;
      }
    }
    return prm > 1;
  });
};
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Return all the palindromes in an array

let Palindromes = (arr) => {
  let arr1 = [];
  for (let i in arr) {
    if (arr[i].split("").reverse().join("") === arr[i]) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
};
console.log(Palindromes(["level", "madam", "cry"]));

// class

// area of Rectangle

class rectangle {
  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = this.value1 * this.value2;
  }
  getValue1() {
    console.log(this.value1);
  }
  getValue2() {
    console.log(this.value2);
  }
  getValue3() {
    console.log(this.value3);
  }
}
var rect = new rectangle(7, 5);

rect.getValue3();

class Add {
  constructor(a) {
    this.a = a;
  }
  getAdd() {
    console.log(this.a + this.b);
  }
}
class addition extends Add {
  constructor(a, b) {
    super(a, b);
    this.b = b;
  }
  getValue() {
    this.getAdd();
  }
}
var add = new addition(3, 7);
add.getValue();

class Sub {
  constructor(a) {
    this.a = a;
  }
  getSub() {
    console.log(this.a - this.b);
  }
}
class subtraction extends Sub {
  constructor(a, b) {
    super(a, b);
    this.b = b;
  }
  getValue() {
    this.getSub();
  }
}
var sub = new subtraction(3, 7);
sub.getValue();

class Mul {
  constructor(a) {
    this.a = a;
  }
  getMul() {
    console.log(this.a * this.b);
  }
}
class Multiplication extends Mul {
  constructor(a, b) {
    super(a, b);
    this.b = b;
  }
  getValue() {
    this.getMul();
  }
}
var multi = new Multiplication(3, 7);
multi.getValue();

class Div {
  constructor(a) {
    this.a = a;
  }
  getDiv() {
    console.log(this.a / this.b);
  }
}
class Division extends Div {
  constructor(a, b) {
    super(a, b);
    this.b = b;
  }
  getValue() {
    this.getDiv();
  }
}
var div = new Division(3, 7);
var div1 = new Division(8, 2);

div.getDiv();
div1.getDiv();

class person {
  constructor(name, age, gender, phone, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
  }
}
var personDetails = new person(
  "Priya",
  20,
  "Female",
  9943170622,
  "mpriyasivaraj28@gmail.com"
);
console.log(personDetails.name);
console.log(personDetails.age);
console.log(personDetails.gender);
console.log(personDetails.phone);
console.log(personDetails.email);

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
let movies = new movie("Casino Royale", "Eon Productions", "PG13");

console.log(movies.title);
console.log(movies.studio);
console.log(movies.rating);
