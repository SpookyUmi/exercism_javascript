//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  if (word === '') return 0
  let score = 0
  score += [...word].length
  if (word.match(/[dg]/gi)) {
    score += 1 * word.match(/[dg]/gi).length
  }
  if (word.match(/[bcmp]/gi)) {
    score += 2 * word.match(/[bcmp]/gi).length
  }
  if (word.match(/[fhvwy]/gi)) {
    score += 3 * word.match(/[fhvwy]/gi).length
  }
  if (word.match(/[k]/gi)) {
    score += 4 * word.match(/[k]/gi).length
  }
  if (word.match(/[jx]/gi)) {
    score += 7 * word.match(/[jx]/gi).length
  }
  if (word.match(/[qz]/gi)) {
    score += 9 * word.match(/[qz]/gi).length
  }
  return score
};

// const array = [...string.toLowerCase()]
// let score = 0
// for (let index = 0; index < array.length; index++) {
//   let letter = array[index]
//   if (['d', 'g'].includes(letter)) {
//     score += 2
//   } else if (['b', 'c', 'm', 'p'].includes(letter)) {
//     score += 3
//   } else if (['f', 'h', 'v', 'w', 'y'].includes(letter)) {
//     score += 4
//   } else if (letter === 'k') {
//     score += 5
//   } else if (['j', 'x'].includes(letter)) {
//     score += 8
//   } else if (['q', 'z'].includes(letter)) {
//     score += 10
//   } else {
//     score += 1
//   }
// }
