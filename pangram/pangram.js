//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  if (string === '') {
    return false
  }
  let upAlphabet = [];
  let upStart = 'A'.charCodeAt(0);
  let upEnd = 'Z'.charCodeAt(0);
  for (let e = upStart; e <= upEnd; e++) {
    upAlphabet.push(String.fromCharCode(e));
  }
  string.toUpperCase();
  if (string.includes(upAlphabet)) {
    return true
  }
};
