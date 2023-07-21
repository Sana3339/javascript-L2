//1. write a program that outputs The Flintstones Rock!
//10 times, with each line indented 1 space to the right of the line above it.
// The output should start out like this:

function repeat(sentence) {

  for (let idx = 1; idx < 10; idx += 1) {
    console.log(" ".repeat(idx) + sentence);
  }
}

repeat("The Flintstones Rock!");


//2.Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
//Return a new string that swaps the case of all of the letters
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

function swapCase(sentence) {

  let res = "";

  for (let idx = 0; idx < sentence.length; idx += 1) {
    let char = sentence[idx];
    if (char === " ") {
      res += char;
      continue;
    } else if (char === char.toUpperCase()) {
      res += char.toLowerCase();
      continue;
    } else if (char === char.toLowerCase()) {
      res += char.toUpperCase();
    }
  }
  return res;
}
console.log(swapCase(munstersDescription));


//3:

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}
console.log(factors(9));