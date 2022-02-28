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
