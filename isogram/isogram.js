//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  if (string === '') return true

  const lettersArray = string.toLowerCase().split('')//.map(letter => letter.charCodeAt(0))
  return [...new Set(string.match(/[a-z]/g))]//.length
    /* var valuesSoFar = Object.create(null);
    for (var i = 0; i < lettersArray.length; ++i) {
      var value = lettersArray[i];
      if (value in valuesSoFar) {
        return false;
      }
      valuesSoFar[value] = false;
    }
    return true; */
};

//return [...new Set(string.match(/[a-z'".]/g))].length === 26
