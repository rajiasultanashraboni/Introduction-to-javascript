// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04


let mathematicsNum = 75.25;
let biologyNum = 65;
let physicsNum = 80;
let chemistryNum = 35.45;
let banglaNum = 99.50;

let average = (mathematicsNum+biologyNum+physicsNum+chemistryNum+banglaNum)/5;

console.log(average.toFixed(2));