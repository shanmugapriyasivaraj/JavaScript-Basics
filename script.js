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
