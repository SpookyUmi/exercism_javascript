//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  return [...new Set(string.match(/[a-z'".]/g))].length === 26
};
