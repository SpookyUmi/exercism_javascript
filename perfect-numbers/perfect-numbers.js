//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number <= 0) {
    throw (new Error('Classification is only possible for natural numbers.'))
  }
  let start = 1;
  let total = 0;
  while (start < number) {
    //console.log(start);
    if (number % start === 0) {
      total += start;
    }
    start += 1;
  }
  if (total === number) {
    return 'perfect';
  }
  if (total > number) {
    return 'abundant';
  }
  if (total < number) {
    return 'deficient';
  }
  //return total;
}
console.log(classify(6));
