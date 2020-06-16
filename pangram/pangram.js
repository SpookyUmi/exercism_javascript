//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (string) => {
  if (!string) return false
     // ici tu pourrais faire un return en une seule ligne, genre if(!string) return false // OK merci (:
  let alphabet = [];
  let upStart = 'A'.charCodeAt(0);
  let upEnd = 'Z'.charCodeAt(0);
  for (let e = upStart; e <= upEnd; e++) {
    alphabet.push(String(e));
  }
  let lowStart = 'a'.charCodeAt(0);
  let lowEnd = 'z'.charCodeAt(0);
  for (let e = lowStart; e <= lowEnd; e++) { // nice d'avoir pensé au let ici
    alphabet.push(String(e));
  }
  console.log(alphabet)
  const stringArray = string.split('')
  console.log(stringArray);
  let codeArray = [stringArray.forEach(e => e.charCodeAt(0))]
  console.log(codeArray);
};
