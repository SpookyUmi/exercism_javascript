//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  if (string === '') return true

  const sentence = string.match(/\w/gi);
  const regMatch = [...new Set(string.match(/\w/gi))];
  if (sentence === regMatch) {
    return true
  } return false
};
