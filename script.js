'use strict';
////

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const playr0El = document.querySelector('.player--0');
const playr1El = document.querySelector('.player--1');



let scores, currentScore, activePlayer,playing;


const init = () => {
   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;
  
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  
  diceEl.classList.add('hidden');
  playr0El.classList.add('player--active');
  playr1El.classList.remove('player--active');
  playr0El.classList.remove('player--winner');
  playr1El.classList.remove('player--winner');
}
init();

btnRoll.addEventListener('click', () => {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // document.getElementById(`current--${activePlayer}`).textContent =
      //   0;
      // activePlayer = activePlayer === 0 ? 1 : 0;
      // currentScore = 0;
      // playr0El.classList.toggle("player--active");
      // playr1El.classList.toggle("player--active");
      activePlayerFun();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      document.getElementById(`current--${activePlayer}`).textContent =
        'WINNER';
    } else {
      activePlayerFun();
    }
  }
});

const activePlayerFun = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playr0El.classList.toggle('player--active');
  playr1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', init)
