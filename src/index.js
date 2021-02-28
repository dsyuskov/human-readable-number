module.exports = function toReadable (number) {
    console.log('number:', number);
  const numbers = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
    ];
  const ten = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
  if (number < 21) {
    return numbers[number];
  }
  if (number < 100) {
      const d = Math.trunc(number / 10);
      const e = number - d * 10;
      return e === 0 ? ten[d] : `${ten[d]} ${numbers[e]}`;
  }
  if (number < 1001) {
      const h = Math.trunc(number / 100);
      const d = Math.trunc((number - h * 100) / 10);
      const e = number - h * 100 - d * 10;

      return `${numbers[h]} hundred${
        d < 2 
          ? d === 0
            ? e === 0
              ? ''
              : ` ${numbers[e]}`
            : e === 0
              ? d === 1
                ? ` ${numbers[d.toString() + e.toString()]}`
                : ''
              : ` ${numbers[d.toString() + e.toString()]}`
          : e === 0
            ? ` ${ten[d]}`
            : ` ${ten[d]} ${numbers[e]}`}`;
  }
}
