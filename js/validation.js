export default inputValidation;

function returnBaseRegExp(base) {
  switch (base) {
    case '10':
      return new RegExp('[0-9]');
    case '2':
      return new RegExp('[01]');
    case '16':
      return new RegExp('[0-9A-Fa-f]');
    case '8':
      return new RegExp('[0-7]');
  }
}
function inputValidation(inputType, input) {
  return [...input].every(number => {
    return !returnBaseRegExp(inputType).test(number);
  });
}
