function generateBoard(q1, q2) {
  let row = 8, col = 8;
  let board = [[], []];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      if ((i === q1[0] && j === q1[1]) || (i === q2[0] && j === q2[1])) {
        board[i][j] = 1;
      }
      else {
        board[i][j] = 0;
      }
    }
  }
  return board;
}

function queenThreat(board) {
  let queen = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 1) {
        queen.push(i);
        queen.push(j);
      }
    }
  }

  let deltaX = queen[0] - queen[2];
  let deltaY = queen[1] - queen[3];

  if ((deltaX === 0) || (deltaY === 0) || (Math.abs(deltaX) === Math.abs(deltaY))){
    return true;
  }  

  return false;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));