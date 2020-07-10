//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (number) => {
  if (number.length !== 10) return false
  const regMatch = number.match(/[\dx]/gi)
  if (regMatch.findIndex('X') !== regMatch.length - 1 /* = 9 */) return false
};
