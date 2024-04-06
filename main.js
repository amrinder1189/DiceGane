// seeting the current player to player 1
var currentPlayer = 1;
var player1Score = 0;
var player2Score = 0;

// Generating the random number
function GenerateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// changing the dice image using js
function updatingDiceImage() {
  var Value = GenerateRandomNumber();
  //   getting the dice image
  document.getElementById("dice" + currentPlayer).src =
    "./images/dice" + Value + ".png";
  //   changing the dice image
  if (currentPlayer === 1) {
    player1Score += Value;
    document.getElementById("score1").innerText = player1Score;
  } else {
    player2Score += Value;
    document.getElementById("score2").innerText = player2Score;
  }

  return Value;
}

// Finding the Winner
function FindingWinner() {
  if (player1Score >= 10) {
    document.getElementById("winner").innerText = "Yeah 😁 Player 1 wins!";
    document.getElementById("btn").disabled = true;
  } else if (player2Score >= 10) {
    document.getElementById("winner").innerText = "Yeah 😁 Player 2 wins!";
    document.getElementById("btn").disabled = true;
  }
}

// adding the event lstner on the button
document.getElementById("btn").addEventListener("click", function () {
  var Value = updatingDiceImage();
  FindingWinner();

  // changing the current player
  if (currentPlayer === 1) {
    currentPlayer = 2;
  } else {
    currentPlayer = 1;
  }
});
