//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (x) => {
  const pling = 'Pling';
  const plang = 'Plang';
  const plong = 'Plong';

  if (x % 3 === 0) {
    if (x % 5 === 0) {
      if (x % 7 === 0) {
        return pling + plang + plong;
      }
      return pling + plang;
    }
    if (x % 7 === 0) {
      return pling + plong;
    }
    return pling;
  }
  if (x % 5 === 0) {
    if (x % 7 === 0) {
      return plang + plong;
    }
    return plang;
  }
  if (x % 7 === 0) {
    return plong;
  }
 return `${x}`
};

/* export const convert = (x) => {
  return (x % 3 === 0) ? 'Pling'
      : (x % 5 === 0) ? 'Plang'
      : (x % 7 === 0) ? 'Plong'
      //: (x / 3 === true && x / 5 === true) ? 'PlingPlang'
      :                  `${x}`
}; */
