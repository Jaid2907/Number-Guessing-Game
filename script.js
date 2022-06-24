'use strict';
let ans = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let curr = Number(document.querySelector('.guess').value);
  if (curr != ans) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.number').textContent = ans;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    document.querySelector('.message').textContent =
      'Congratulations!!! That was correct';
    document.querySelector('body').style.backgroundColor = 'green';
  }
  if (curr > ans) {
    document.querySelector('.message').textContent = 'Too High';
  } else if (curr < ans) {
    document.querySelector('.message').textContent = 'Too Low';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  ans = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.number').textContent = '?';
});
