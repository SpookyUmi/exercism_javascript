//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  if (string === '') return true
  const lowerCase = string.toLowerCase();
  const sentence = lowerCase.match(/\w/gi)
  const regMatch = [...new Set(lowerCase.match(/\w/gi))];
  if (sentence.length === regMatch.length) {
    return true
  } return false
};
