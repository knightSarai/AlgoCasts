// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    chunkArr = [];
    for (let idx = 0; idx <= array.length - 1 ; idx += size){
       chunkArr.push(array.slice(idx, idx + size))
    }
    return chunkArr
}

// function chunk(array, size) {
//     chunkArr = [];
//     for (let e of array) {
//         const last = chunkArr[chunkArr.length - 1]
//         if (!last || last.length === size ) {
//             chunkArr.push([e]);
//         } else {
//             last.push(e);
//         }
       
//     }
//     return chunkArr
// }

module.exports = chunk;
