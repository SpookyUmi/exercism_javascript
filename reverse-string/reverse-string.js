//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  let splitString = string.split('')
  let revArray = splitString.reverse();
  let joinArray = revArray.join('');
  return joinArray;
};

reverseString('')
