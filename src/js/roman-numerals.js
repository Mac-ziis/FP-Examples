// Recursive Roman numerals

function convertToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: 'M'},
    { value: 500, numeral: 'D'},
    { value: 100, numeral: 'C'},
    { value: 50, numeral: 'L'},
    { value: 10, numeral: 'X'},
    { value: 5, numeral: 'V'},
    { value: 1, numeral: 'I'},
  ];

  if (num === 0) {
    return '';
  }

  for (let i = 0; i < romanNumerals.length; i++ ) {
    if (num >= romanNumerals.value) {
      return (
        romanNumerals[i].numeral + convertToRoman(num - romanNumerals[i].value)
      );
    }
  }
}