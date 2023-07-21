//1. 3 diff ways to remove all elements from following array:
let numbers = [1, 2, 3, 4];

for (let idx = 0; idx < numbers.length; idx++) {
  numbers.shift();
}

numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

numbers = [1, 2, 3, 4];
numbers.splice(0, numbers.length);
console.log(numbers);

numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);

//What will following code output?

//2.
console.log([1, 2, 3] + [4, 5]);
//"1,2,34,5"

//3.
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);
//"hello there"

//4.
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
// { first: 42}, { second: "value2"}


//5. following uses 2 return statements. Rewrite so it only has
//1 return statement and doesn't explicitly use true or false
//come up w 2 solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid1(color) {

  return (color === "blue" || color === "green");
}

function isColorValid2(color) {

  let boolean = null;

  switch (color) {
    case "blue":
      boolean = true;
      break;
    case "green":
      boolean = true;
      break;
    default:
      boolean = false;
  }

  return boolean;
}

console.log(isColorValid("blue"));
console.log(isColorValid1("blue"));
console.log(isColorValid2("blue"));

console.log(isColorValid("purple"));
console.log(isColorValid1("purple"));
console.log(isColorValid2("purple"));