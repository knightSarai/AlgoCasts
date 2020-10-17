// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('fRAIL! SAFETY!', 'airy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     strarrA = stringA.split('').sort().join('').toLowerCase().replace(/[^\w]/g, "");
//     strarrB = stringB.split('').sort().join('').toLowerCase().replace(/[^\w]/g, "");
    
//     return strarrA === strarrB
// }


function anagrams(stringA, stringB) {
    mapA = buildCharMap(stringA);
    mapB = buildCharMap(stringB);

    if (Object.keys(mapA). length !== Object.keys(mapB).length) {
        return false
    }

    for ( let key in mapA) {
        if (mapA[key] !== mapB[key]) {
            return false
        }
    }

    return true
}

function buildCharMap(str) {
    const charMap = {};
   for (let char of str.replace().toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
   }
   return charMap
}
module.exports = anagrams;
