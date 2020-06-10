//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (letters) => {
  let result = '';
  letters.split('').forEach(letter => {
    if (letter === 'C') {
      result += 'G'
    }
    if (letter === 'G') {
      result += 'C'
    }
    if (letter === 'T') {
      result += 'A'
    }
    if (letter === 'A') {
      result += 'U'
    }
    // console.log('result', result)
  });
  return result;
};
