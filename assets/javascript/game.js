var wins = 0;
var losses = 0;
var guesses = 10;
var userPickSoFar = [];

var computerGuessText = document.getElementById("computerGuess-text");
var userGuessText = document.getElementById("userGuess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");

var setandreset = function () {

  computerGuessText = document.getElementById("computerGuess-text");
  var userGuessText = document.getElementById("userGuess-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessesText = document.getElementById("guesses-text");

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesText.textContent = "Guesses Left: " + guesses;
  userGuessText.textContent = "Your Guesses so far: " + userPickSoFar.join("  ");
}


var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var computerPick = options[Math.floor(Math.random() * options.length)];
console.log("cp " + computerPick);

document.onkeyup = function (event) {
  var userPick = event.key.toLowerCase();

  console.log(userPick);

  if ((guesses > 0) && (options.indexOf(userPick) > -1) && (userPickSoFar.indexOf(userPick) <= -1)) {

    if (userPick === computerPick) {
      userPickSoFar = [];
      wins++
      guesses = 10;
      computerPick = options[Math.floor(Math.random() * options.length)];
      console.log("cp " + computerPick);
    } else {
      guesses--
    }
    
  }
  else if (userPickSoFar.indexOf(userPick) > -1) {
    return alert("You have already selected this letter!")
  }
  else if (options.indexOf(userPick) <= -1) {
    return alert("Please select a letter from the keyboard.")
  }
  else {
    userPickSoFar = [];
    losses++;
    guesses = 10;
    computerPick = options[Math.floor(Math.random() * options.length)];
    console.log("cp " + computerPick);
  }
  userPickSoFar.push(userPick);
  setandreset();
}