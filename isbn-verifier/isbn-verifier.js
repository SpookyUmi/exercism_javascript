//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (number) => {
  const regMatch = number.match(/[\dx]/gi)
  //? check if number is at least present with `number.indexOf('X') > 0`
  // if (number.indexOf('X') > 0 && number.indexOf('X') < regMatch.length - 1) return false
  //? regex returns `null` if it does not match any pattern, and therefore, regMatch.length throws an error
  if (regMatch === null || regMatch.length !== 10) return false
  let sum = 0;
  for (let index = 10; index > 1; index--) {
    sum += index * Number(regMatch[regMatch.length - index])
  }
  if (regMatch[regMatch.length - 1] === 'X') {
    sum += 10;
  } else {
    sum += Number(regMatch[regMatch.length - 1])
  }
  return sum % 11 === 0
};
