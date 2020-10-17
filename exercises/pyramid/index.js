// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2)
    for (let row = 0; row < n; row++) {
        let level = '';
        for (let col = 0; col < 2 * n - 1; col++) {
            if (midPoint - row <= col && midPoint + row >= col) {
                level += '#';
            }else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

const pyramid = (num) => {
    let columns = 2 * num - 1; // 5
    let midPoint = Math.floor(columns / 2); //2
    for (let row = 0; row < num; row++){
      let stair = '';
      for (let column = 0; column < columns; column++) {
        if (midPoint - row <= column && midPoint + row >= column) {
          stair += "#";
        } else {
          stair += " ";
        }
      }
      console.log(stair);
    }
  }
  
  pyramid(3)

  //! recursion solution
  const pyramid = (num, row = 1, level = "") => {
    if (row > num) {
      return;
    }
  
    if (level.length === 2 * num - 1) {
      console.log(level);
      return pyramid(num, row + 1)
    }
    let midPoint = Math.floor((2 * num - 1) / 2);
    // determine if add # or not 
    let add;
    if (midPoint - row < level.length && midPoint + row > level.length) {
      add = "#";
    }else {
      add = " ";
    }
    pyramid(num, row, level + add)
  }
  
  pyramid(3)
module.exports = pyramid;
