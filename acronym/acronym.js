//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (text) => {
  return text.replace("'", "").match(/[A-Za-z]+/g).map(e => e[0].toUpperCase()).join('');
  /* text = text.replace("'", "");
  text = text.match(/[A-Za-z]+/g);
  text = text.map(e => e[0].toUpperCase()).join('');
  return text; */
};
