//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Given a year, report if it is a leap year.
// A leap year occurs : on every year that is evenly divisible by 4, except those divisible by 100, unless the year is also divisible by 400

export const isLeap = (year) => {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
};

/* export const isLeap = (year) => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}; */
