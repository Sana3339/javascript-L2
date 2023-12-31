

function isDotSeparatedIpAddress(inputString) {

  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

function isAnIpNumber(input) {

  let ipNum = Number(input);
  return 0 <= ipNum <= 255;
}

console.log(isDotSeparatedIpAddress("10.4.5.11"));
console.log(isDotSeparatedIpAddress("4.5.5"));
console.log(isDotSeparatedIpAddress("1.2.3.4.5"));