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
