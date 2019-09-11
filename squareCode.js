const squareCode = function (message) {
  let str = message.split(" ").join("");
  let col = Math.ceil(Math.sqrt(str.length));
  let row = Math.ceil(str.length / col);
  var squareArray = [[], []];
  let index = 0;
  for (let i = 0; i < row; i++) {
    squareArray[i] = [];
    for (let j = 0; j < col; j++) {
      squareArray[i][j] = str[index];
      index++;
    }
  }
  let squareCode = "";
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (squareArray[j][i] != undefined) {
        squareCode += squareArray[j][i];
      }
    }
    squareCode += " ";
  }
  return squareCode;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));