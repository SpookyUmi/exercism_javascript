//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  let start = 1;
  let total = 0;
  while (start < number) {
    //console.log(start);
    if (number % start === 0) {
      total += start;
    }
  // if (total === number) {}
    start += 1;
  }
  return total;
}
console.log(classify(6));
