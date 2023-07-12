//1:Given a string, return a new string that replaces every occurrence
//of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.replace("important","urgent");
console.log(advice);

//2:Write two distinct ways of reversing the array without
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]