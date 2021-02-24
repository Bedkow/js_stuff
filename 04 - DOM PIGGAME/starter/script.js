'use strict';
// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Starting conditions
score0El.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer =  function() {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    //.toggle adds class or removes it
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice function
btnRoll.addEventListener('click', function() {
    // Generate random roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // Check for rolled 1
    if (dice !== 1) {
        // add dice to score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        switchPlayer();
    }
});

btnHold.addEventListener('click', function() {
    // add current score to active player score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //check if score is min 100
    //Finish the game

    //Switch player
    switchPlayer();
});