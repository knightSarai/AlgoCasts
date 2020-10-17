// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([])
    }
    let counter = 1;
    let column = 0;
    let endColumn = n -1;
    let row = 0;
    let endRow = n - 1;
    while (column <= endColumn && row <= endRow) {
        // Top Row
        for(let i = column; i <= endColumn; i++) {
          result[row][i] = counter;
          counter++
        }
        row++
        // Rigt column
        for (let i = row; i <= endRow; i++) {
          result[i][endColumn] = counter;
          counter++
        }
        endColumn--;
        //Bottom row
        for (let i = endColumn; i >= column; i--) {
          result[endRow][i] = counter;
          counter++;
        }
        endRow--;
        //start column
        for (let i = endRow; i >= row; i--) {
          result[i][column] = counter;
          counter++;
        }
        column++
    }
  return result;
}



module.exports = matrix;
