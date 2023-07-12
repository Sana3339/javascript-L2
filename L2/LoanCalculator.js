const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
      Number(number) < 0   ||
      Number.isNaN(Number(number));
}

prompt('Welcome to the mortgage calculator!');

while (true) {
  prompt('What is the loan amount (e.g. 100000)?');

  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt('Enter a valid loan amount');
    loanAmount = readline.question();
  }

  prompt('What is the Annual Percentage Rate (APR)?');
  prompt('e.g. eneter 0.05 for 5% or 0.35 for 3.5%');
  let APR = readline.question();
  while (isInvalidNumber(APR)) {
    prompt('Enter a valid APR');
    APR = readline.question();
  }

  prompt('What is the loan duration in years?');
  let loanDurationInYears = readline.question();
  while (isInvalidNumber(loanDurationInYears)) {
    prompt('Enter a valid loan duration.');
    loanDurationInYears = readline.question();
  }

  let monthlyPayment = calculateMonthlyPayment(loanAmount, APR,
    loanDurationInYears);

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
  break;
}

function calculateMonthlyPayment(loanAmount, APR, loanDurationInYears) {

  let monthlyInterestRate = Number(APR) / 12;
  let loanDurationInMonths = Number(loanDurationInYears) * 12;

  let monthlyPayment = Number(loanAmount) * (monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-Number(loanDurationInMonths)))));

  return monthlyPayment;
}
