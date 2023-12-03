'use strict';

// problem 1

function sum(a, b) {
  let mySum = a + b;
  let myStr = `The sum of ${a} and ${b} is ${mySum}.`;

  return [mySum, myStr];
}

testSum(4, 7);

// problem 2

function multiply(num1, num2) {
  let product = num1 * num2;
  let resultString = `The product of ${num1} and ${num2} is ${product}.`;
  return [product, resultString];
}

testMultiply(5,9);

// problem 3

function sumAndMultiply(num1, num2, num3) {

  let sumResult = sum(sum(num1, num2)[0], num3)[0];

  let productResult = multiply(multiply(num1, num2)[0], num3)[0];

  let sumString = `${num1} and ${num2} and ${num3} sum to ${sumResult}.`;
  let productString = `The product of ${num1} and ${num2} and ${num3} is ${productResult}.`;

  return [sumResult, productResult, sumString, productString];
}

testSumAndMultiply(4,7,5);

// problem 4

function sumArray(numbers) {

  let sumResult = numbers.reduce((accumulator, currentValue) => sum(accumulator, currentValue)[0], 0);

  let arrayString = `${numbers.join(',')} was passed in as an array of numbers, and ${sumResult} is their sum.`;

  return [sumResult, arrayString];
}

let testArray = [2, 3, 4]; 

testSumArray(testArray);

// problem 5

function multiplyArray(numbers) {

  let productResult = numbers.reduce((accumulator, currentValue) => multiply(accumulator, currentValue)[0], 1);

  let arrayString = `The numbers ${numbers.join(',')} have a product of ${productResult}.`;

  return [productResult, arrayString];
}

testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
let testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

}

// Here is the test for multiplyArray(); uncomment it to run it
// testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
