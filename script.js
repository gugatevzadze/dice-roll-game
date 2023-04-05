"use strict";
//storing elements into variables
//player 1
const playerOne = document.getElementById("player--0");
const totalPointsOne = document.getElementById("total--0");
const rollPointsOne = document.getElementById("roll--0");
//player 2
const playerTwo = document.getElementById("player--1");
const totalPointsTwo = document.getElementById("total--1");
const rollPointsTwo = document.getElementById("roll--1");
//the dice
const diceElement = document.getElementById("dice");
//buttons
const newBtn = document.getElementById("new-btn");
const rollBtn = document.getElementById("roll-btn");
const holdBtn = document.getElementById("hold-btn");

//array of scores for both players
const scores = [0, 0];
//current scores
let currentScore = 0;
//active player
let activePlayer = 0; //player 1 is 0 as their data is stored in 0 index of an array
//game status
let playing = true;

//starting conditions
totalPointsOne.textContent = 0;
totalPointsTwo.textContent = 0;
diceElement.classList.add("hidden");

//function for switching the player
const switchPlayer = function () {
  document.getElementById(`roll--${activePlayer}`).textContent = 0;
  currentScore = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  playerOne.classList.toggle("active");
  playerTwo.classList.toggle("active");
};

//rolling dice functionality
rollBtn.addEventListener("click", function () {
  //if playing is set to true, code executes, if it false, it stops
  if (playing) {
    //1.generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display the dice
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${dice}.png`;
    //3.check for a rolled 1: switch if 1
    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.getElementById(`roll--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//holding button functionality
holdBtn.addEventListener("click", function () {
  //if playing is set to true, code executes, if it false, it stops
  if (playing) {
    //1.add the current score to the active players score
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1]+ currentScore
    document.getElementById(`total--${activePlayer}`).textContent =
      scores[activePlayer];
    //2.check if the players score is >=100
    if (scores[activePlayer] >= 100) {
      //finish game
      playing = false;
      //removes the dice when game finishes
      diceElement.classList.add("hidden");
      document
        .getElementById(`player--${activePlayer}`)
        .classList.add("winner");
      document
        .getElementById(`player--${activePlayer}`)
        .classList.remove("active");
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//reset button functionlity
newBtn.addEventListener("click", function () {
  document.getElementById(`player--${activePlayer}`).classList.remove("winner");
  document.getElementById(`player--${activePlayer}`).classList.add("active");

  totalPointsOne.textContent = 0;
  totalPointsTwo.textContent = 0;

  rollPointsOne.textContent = 0;
  rollPointsTwo.textContent = 0;

  diceElement.classList.add("hidden");

  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scores[0] = 0;
  scores[1] = 0;
});
