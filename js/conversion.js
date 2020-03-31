export { convertToDecimal, convertFromDecimal };

function convertToDecimal(input, inputType) {
  let sum = 0;
  const hexFilter = new RegExp('[0-9]');
  const reversedInput = input
    .split('')
    .reverse()
    .join('');

  for (let expoent = 0; expoent < reversedInput.length; expoent++) {
    if (!hexFilter.test(reversedInput[expoent])) {
      let replaceHexLetter = 0;

      if (reversedInput[expoent] === 'A' || reversedInput[expoent] === 'a') {
        replaceHexLetter = 10;
      } else if (reversedInput[expoent] === 'B' || reversedInput[expoent] === 'b') {
        replaceHexLetter = 11;
      } else if (reversedInput[expoent] === 'C' || reversedInput[expoent] === 'c') {
        replaceHexLetter = 12;
      } else if (reversedInput[expoent] === 'D' || reversedInput[expoent] === 'd') {
        replaceHexLetter = 13;
      } else if (reversedInput[expoent] === 'E' || reversedInput[expoent] === 'e') {
        replaceHexLetter = 14;
      } else if (reversedInput[expoent] === 'F' || reversedInput[expoent] === 'f') {
        replaceHexLetter = 15;
      }

      sum = sum + replaceHexLetter * Math.pow(parseInt(inputType), expoent);
    } else {
      sum = sum + parseInt(reversedInput[expoent]) * Math.pow(parseInt(inputType), expoent);
    }
  }
  return sum;
}

function convertFromDecimal(decimalInput, outputType) {
  let remainders = [];

  while (decimalInput != 0) {
    remainders.push(decimalInput % parseInt(outputType));
    decimalInput = Math.floor(decimalInput / parseInt(outputType));
  }

  remainders.reverse();

  for (let i = 0; i < remainders.length; i++) {
    if (remainders[i] > 9) {
      switch (remainders[i]) {
        case 10:
          remainders[i] = 'A';
          break;
        case 11:
          remainders[i] = 'B';
          break;
        case 12:
          remainders[i] = 'C';
          break;
        case 13:
          remainders[i] = 'D';
          break;
        case 14:
          remainders[i] = 'E';
          break;
        case 15:
          remainders[i] = 'F';
          break;
      }
    }
  }
  return remainders.join('');
}
