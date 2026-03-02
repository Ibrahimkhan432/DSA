// //--- type coercion
// // console.log("2" + 2); // 22
// // console.log(2 + "2"); // 22
// // console.log("2" - 2); //0

// // ---switch case. multi cases
// // let age = 10;
// // switch (age) {
// //   case 5:
// //     console.log("less than 10", age);
// //     break;
// //   case 6:
// //   case 7:
// //   case 10:
// //     console.log("equal to 10");
// //     break;
// //   default:
// //     console.log("invalid value");
// // }
// //--fizzbuzz array
// // function FizzBuzz(num) {
// //   const arr =[]
// //   for (let i = 1; i <= num; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //       arr.push("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //       arr.push("Fizz");
// //     } else if (i % 5 === 0) {
// //       arr.push("Buzz");
// //     } else {
// //       arr.push(i);
// //     }
// //   }
// //   return arr;
// // }
// // console.log(FizzBuzz(15));  // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

// //   ---intersection array

// // function arrayIntersection(arr1, arr2) {
// //   const result = [];
// //   for (let i = 0; i < arr1.length; i++) {
// //     if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
// //       result.push(arr1[i]);
// //     }
// //   }
// //   return result;
// // }

// // console.log(arrayIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// //   ---Display likes
// // function displayLikes(names) {
// //   const length = names.length;

// //   switch (length) {
// //     case 0:
// //       return "no one likes this";
// //     case 1:
// //       return `${names[0]} likes this`;
// //     case 2:
// //       return `${names[0]} and ${names[1]} like this`;
// //     case 3:
// //       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
// //     default:
// //       return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
// //   }
// // }
// // console.log(displayLikes(["A","B","C","D"])); // A, B and 2 others like this

// //   -- pattern
// // let prompt = require("prompt-sync")();   // npm i prompt-sync
// // let n = Number(prompt("Enter number"));
// // for (let i = 1; i <= n; i++) {
// //   for (let j = 1; j <= n; j++) {
// //     process.stdout.write("* ");
// //   }
// //   console.log();
// // }

// //    ---RIGHT TRIANGLE
// // let i = 1;
// // let j = 1;
// // for (let i = 1; i <= 5; i++) {
// //   for (let j = 1; j <= i; j++) {
// //     process.stdout.write("* ");
// //   }
// //   console.log();  // right traingle
// // }
// // *
// // * *
// // * * *
// // * * * *

// // console.log(5 > 3 > 2);

// // console.log("10" < "9");

// // console.log("10" < "9");

// // 50.tostring()

// // var x = 50;
// // x.toString();
// // console.log(x);

// // const obj = [1,2,3]
// // console.log("1" in obj)

// function check() {
//   var num = document.getElementById("number").value;
//   var txt = document.getElementById("txt");

//   if (num === "") {
//     alert("Please enter a number");
//     return;
//   }

//   num = parseInt(num);
//   if (num <= 1) {
//     txt.innerText = num + " is not prime";
//     txt.style.color = "red";
//     return;
//   }

//   let isPrime = true; // assume prime initially
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) {
//       isPrime = false; // divisible → not prime
//       break; // stop loop
//     }
//   }

//   if (isPrime) {
//     txt.innerText = num + " is prime";
//     txt.style.color = "green";
//   } else {
//     txt.innerText = num + " is not prime";
//     txt.style.color = "red";
//   }
// }

// // function dec(){
// //     var counter = document.getElementById("counter")
// //     counter.innerText = counter.innerText - 1

// // }
// // function inc(){
// //     console.log("ds")
// //     var counter = document.getElementById("counter")
// //     counter.innerText = +(counter.innerText) + 1
// // }
// // function res(){
// //     var counter = document.getElementById("counter")
// //     counter.innerText = 0
// // }

// function counterAction(action) {
//   var counter = document.getElementById("counter");
//   if (action === "inc") {
//     counter.innerText = +counter.innerText + 1;
//   } else if (action === "dec") {
//     counter.innerText = +counter.innerText - 1;
//   } else if (action === "res") {
//     counter.innerText = 0;
//   }
// }

// function showPassword() {
//   var psw = document.getElementById("psw");
//   console.log("psw", psw.type);
//   if (psw.type === "password") {
//     psw.type = "text";
//     psw.textContent = "Hide";
//   } else {
//     psw.type = "password";
//     psw.textContent = "Show";
//   }
// }
// function inner(){

//   let test = "outer"
//   function outer() {
//     console.log(test)
//   }
//   outer();
// }
// inner()

// console.time('timer1');
// function loops() {
//     for (let i = 0; i <= 10000; i++) {

//     }
// }
// loops()
// console.timeEnd('timer1');

// console.assert(5 > 10, "failed");

// function a() {
//     b()
// }
// function b() {
//     c()
// }
// function c() {
//     console.trace()
// }
// a()

// function sum(...nums) {
//   return nums.reduce((a, b) => a + b, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10
// console.log(hi)
// let hi = "hello"

// setTimeout(() => console.log("setTimeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");
// btn.addEventListener('click',function(){
//     input = input.value.trim()
//     console.log(input)
//     var normal = input
//     var reverse = input.split('').reverse().join('')
//     console.log("reverse",reverse)
//     if (normal === reverse) {
//         console.log("palindrome")
//     }

// })

// var input = document.getElementById('inp')
// var btn = document.getElementById('btn')

// var a = 10;
// var b = a;
// b = 20;

// var a = { x: 10 };
// var b = a;
// b.x = 20;

// console.log(a);
// console.log(b);
// var x = 0b10;
// var x = 0b100;
// console.log( x)

//  -- reverse string
// var str = "hello";

// var reverse = str.split('').reverse().join('')

// var reverse = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reverse += str[i];
// }
// console.log(reverse);

// // var arr = ["a","b","c"]
// // arr.length=1
// // console.log(arr)

// var btn = document.getElementById("btn")
// btn.addEventListener("click",clickBtn =()=>{
//   var input = document.getElementById("input").value
//   console.log("value",input)

// var list = document.getElementById("list")

// var listItem = document.createElement('li')

// listItem.textContent = input;
// list.appendChild(listItem)
// })

// var arr = [1,2,3,4,5]
// let arr2 = ""
// arr.forEach(myfun)

// function myfun(val){
// return arr2 += val + "<br>"
// }
// console.log(arr2)

