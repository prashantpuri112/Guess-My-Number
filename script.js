'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;  //Random number between 1-20
let score = 20;
let highscore = 0;

//DRY Principle
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const visibleNumber = function (number) {
    document.querySelector('.number').textContent = secretNumber;
}

const backgroundColor = function (body) {
    document.querySelector('body').style.backgroundColor = body;
}

const winWidth = function (number) {
    document.querySelector('.number').style.width = number;
}

const highScore = function (highScore) {
    document.querySelector('.highscore').textContent = highscore;

}

const scores = function (scores) {
    document.querySelector('.score').textContent = score;

}

document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //When there is no input
    if (!guess) {
        displayMessage('⛔ No Number!');

        // When Player Wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        visibleNumber();
        backgroundColor('#60b347');
        winWidth('30rem');

        if (score > highscore) {
            highscore = score;
            highScore();
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!')
            score--;
            scores();
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;

        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...')
    scores();
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    backgroundColor('#222');
    winWidth('15rem');

});