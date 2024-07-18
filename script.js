let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const choiceList = ['rock', 'paper', 'scissors'];
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const playAgainBtn = document.getElementById('playAgain');

function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * choiceList.length);
    return choiceList[randomInt];
}

function playRound(humanChoice) {
    if (roundsPlayed >= 5) return;

    const computerChoice = getComputerChoice();
    let result = '';

    if (humanChoice === computerChoice) {
        result = `It's a draw! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        humanScore++;
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    roundsPlayed++;
    resultDiv.textContent = result;
    updateScore();

    if (roundsPlayed === 5) {
        endGame();
    }
}

function updateScore() {
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

function endGame() {
    let finalResult = '';
    if (humanScore > computerScore) {
        finalResult = 'Congratulations! You win the game!';
    } else if (humanScore < computerScore) {
        finalResult = 'You lost the game. Better luck next time!';
    } else {
        finalResult = 'The game is a draw!';
    }
    resultDiv.textContent = finalResult;
    playAgainBtn.style.display = 'block';
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    resultDiv.textContent = '';
    updateScore();
    playAgainBtn.style.display = 'none';
}

updateScore();
