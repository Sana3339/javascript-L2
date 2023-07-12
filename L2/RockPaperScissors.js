const readline = require('readline-sync');
const CHOICES = ['rock','paper','scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')) {
    prompt("You win!");
  } else if (userChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

while (true) {
  prompt(`Choose one: ${CHOICES.join(', ')}:`);
  let userChoice = readline.question();
  userChoice = userChoice.toLowerCase();

  while (!CHOICES.includes(userChoice)) {
    prompt("Invalid input. You must choose rock, paper or scissors. Try again: ");
    userChoice = readline.question();
  }


  let randomIndex = Math.floor(Math.random() * CHOICES.length);
  let computerChoice = CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let userResponse = readline.question().toLowerCase();
  while (userResponse[0] !== 'y' && userResponse[0] !== 'n') {
    prompt('Do you want to play again (y/n)?');
    userResponse = readline.question().toLowerCase();
  }

  if (userResponse[0] !== 'y') {
    break;
  }
}