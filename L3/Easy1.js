// Q3: Determine whether the following object of people
//and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty('Spot')); //false

// Q4: Using the following string, create a new string that contains
//    all lowercase letters except for the first character,
//    which should be capitalized.

let munstersDescription = "the Munsters are CREEPY and Spooky.";
let capitalizedMunstersDescription =
  munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(capitalizedMunstersDescription); // => The munsters are creepy and spooky.


// Q5: What will the following code output?
console.log(false == '0');  // true
console.log(false === '0'); // false


//Q6: We have most of the Munster family in our ages object.
// Add entries for Marilyn and Spot to the object:
ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

let finalAges = Object.assign(ages, additionalAges);
console.log(finalAges);


//Q7: Determine whether the name Dino appears in the strings below --
//check each string separately:

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes("Dino")); //false
console.log(str2.includes("Dino")); //true

//Q8: How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");
console.log(flintstones);


//Q9: How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones.push("Dino","Hoppy");
console.log(flintstones);

//Q10: Return a new version of this sentence
//that ends just before the word house

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
function concatSentence(sentence) {
  return sentence.slice(0, advice.indexOf('house'));
}

console.log(concatSentence(advice));