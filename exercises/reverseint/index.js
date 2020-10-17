// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if(n === 0) return 0;
    return parseInt(String(n).split('').reduce((acc, curr) => curr + acc, '')) * Math.sign(n)
}

module.exports = reverseInt;
