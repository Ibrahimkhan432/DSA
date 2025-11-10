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

function FizzBuzz(num) {
  const arr =[]
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}
console.log(FizzBuzz(15));  // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]