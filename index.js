//--- type coercion
// console.log("2" + 2); // 22
// console.log(2 + "2"); // 22
// console.log("2" - 2); //0

// ---switch case. multi cases
// let age = 10;
// switch (age) {
//   case 5:
//     console.log("less than 10", age);
//     break;
//   case 6:
//   case 7:
//   case 10:
//     console.log("equal to 10");
//     break;
//   default:
//     console.log("invalid value");
// }
//--fizzbuzz array
// function FizzBuzz(num) {
//   const arr =[]
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(FizzBuzz(15));  // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

//   ---intersection array

// function arrayIntersection(arr1, arr2) {
//   const result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//       result.push(arr1[i]);
//     }
//   }
//   return result;
// }

// console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//   ---Display likes
// function displayLikes(names) {
//   const length = names.length;

//   switch (length) {
//     case 0:
//       return "no one likes this";
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
//   }
// }
// console.log(displayLikes(["A","B","C","D"])); // A, B and 2 others like this


//   -- pattern
// let prompt = require("prompt-sync")();   // npm i prompt-sync
// let n = Number(prompt("Enter number"));
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
