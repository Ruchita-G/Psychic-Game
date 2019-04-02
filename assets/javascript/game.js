var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var losses = 0;
var guesses = 10;
var userPickSoFar = [];

var computerGuessText = document.getElementById("computerGuess-text");
var userGuessText = document.getElementById("userGuess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

document.onkeyup = function (event) {
  if (guesses > 0) {

    var userPick = event.key;
    console.log(userPick.toLowerCase());

    var computerPick = computerGuess[Math.floor(Math.random() * computerGuess.length)];
    console.log(computerPick);

    if (userPick === computerPick) {
      wins++
      guesses--
    } else {
      guesses--
      losses++
    }

    userPickSoFar.push(userPick);

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses " + losses;
    guessesText.textContent = "Guesses Left: " + guesses;
    userGuessText.textContent = "Your Guesses so far: " + userPickSoFar.join("  ");

  }
}