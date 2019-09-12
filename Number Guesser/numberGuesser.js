let prompt = require("prompt-sync")();

const num = Math.floor(Math.random() * 100);
let gameOver = false;
let answer = "";
let count = 0;
let guessedNumbers = [];

console.log("Answer for testing purpose: " + num);

while (!gameOver) {
  answer = prompt("Guess a number: ");
  if (isNaN(answer)) {
    console.log("Not a number! Try again!");
  }
  else {
    if (guessedNumbers.indexOf(answer) == -1) {
      guessedNumbers.push(answer);
      count++;
      if (answer == num) {
        if (count == 1 ? console.log("You got it! You took " + count + " attempt!") : console.log("You got it! You took " + count + " attempts!"));
        gameOver = true;
      }
      else if (answer < num) {
        console.log("Too Low!");
      }
      else {
        console.log("Too High!");
      }
    }
    else {
      console.log("Already Guessed!");
    }
  }
}
