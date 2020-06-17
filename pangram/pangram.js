//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  if (!string) return false
  let alphabet = [];
  let upStart = 'A'.charCodeAt(0);
  let upEnd = 'Z'.charCodeAt(0);
  for (let e = upStart; e <= upEnd; e++) {
    alphabet.push(e);
  }
  const codeArray = string.toUpperCase().split('').map(letter => letter.charCodeAt(0))
  let findMatch = (codeA, alph) => alph.every(el => codeA.includes(el));

  if (findMatch(codeArray, alphabet)) return true
  return false
};
