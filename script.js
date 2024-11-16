
// console.log('Hello World');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomInt = Math.floor(Math.random() * 3);
  //   console.log(randomInt);
  if (randomInt === 0) {
    return 'Rock';
  } 
  
  else if (randomInt === 1) {
    return 'Paper';
  } 
  
  else {
    return 'Scissors';
  }
}

function getHumanChoice() {
  
  while (true) {
    let humanChoice = prompt(`Please enter "Rock", "Paper", or "Scissors".`);
    
    if (humanChoice.toLowerCase() === 'rock') {
      return 'Rock';
    } 
    
    else if (humanChoice.toLowerCase() === 'paper') {
      return 'Paper';
    } 
    
    else if (humanChoice.toLowerCase() === 'scissors') {
      return 'Scissors';
    } 
    
    else {
      alert(
        `Invalid! Please enter a valid move: "Rock", "Paper, or "Scissors".`
      );
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    alert('You win! Paper beats Rock.');
  } 
  
  else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    alert('You win! Rock beats Scissors.');
  } 
  
  else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    alert('You win! Scissors beats Paper.');
  } 
  
  else if (computerChoice === 'paper' && humanChoice === 'rock') {
    computerScore++;
    alert('You lose! Paper beats Rock.');
  } 
  
  else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    computerScore++;
    alert('You lose! Rock beats Scissors.');
  } 
  
  else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    computerScore++;
    alert('You lose! Scissors beats Paper.');
  } 
  
  else {
    alert(`It's a draw!`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    alert('You won 5 rounds! Congratulations!');
  } 
  
  else if (humanScore < computerScore) {
    alert('You lost 5 rounds! Try again.');
  } 
  
  else {
    alert(`It's a draw! 5 rounds ended. Replay?`);
  }
}

while (true) {
  playGame();
}