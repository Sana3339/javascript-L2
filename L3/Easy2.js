//1:Given a string, return a new string that replaces every occurrence
//of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace("important","urgent");
console.log(advice);

// **********2:Write two distinct ways of reversing the array
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]


//3. Given a number and an array, determine whether the number
//is included in the array.

numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

//4.Starting with the string below,
// show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let beginningWords = "Four score and ";

let completeFamousWords1 = beginningWords + famousWords;
console.log(completeFamousWords1);


let completeFamousWords2 = beginningWords.concat(famousWords);
console.log(completeFamousWords2);

//5.Given an array of numbers [1, 2, 3, 4, 5],
// mutate the array by removing the number at index 2
//so that the array becomes [1, 2, 4, 5]

console.log("Q5");
let array = [1, 2, 3, 4, 5];
array.splice(2,1);
console.log(array);


//********6.Create a new array of the following in an un-nested format:
// let originalArray = ["Fred", "Wilma", ["Barney", "Betty"],
//["Bambam", "Pebbles"]];




//7.Create an array from this object that contains only 2 elements:
// Barney's name and Barney's number
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3,
  Bambam: 4, Pebbles: 5 };

let barneyInfo = Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

console.log(barneyInfo);


//8.How would you check whether the objects assigned to variables
//numbers and table below are arrays:

numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

//9.how can we center the following title with spaces in 40-char wide table?

let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);

let sentence = title.padStart(padding + title.length);

console.log(sentence);

//10.Write a one-line expression to count the number
//of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let count1 = statement1.split(" ").filter(char => char === 't').length;
let count2 = statement2.split(" ").filter(char => char === 't').length;

console.log(count1);
console.log(count2);