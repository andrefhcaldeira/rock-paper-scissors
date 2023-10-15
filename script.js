const roundResult = document.getElementById('round-result');
const result = document.getElementById('result');
const score = document.getElementById('score');

let computerScore = 0;
let playerScore = 0;
let round = 0;


function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.random() * choices.length>>0];
}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++;
        roundResult.textContent = 'You Win! Paper beats Rock';
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        roundResult.textContent = 'You Win! Scissors beats Paper';
    } 
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        roundResult.textContent = 'You Win! Rock beats scissors';
    } 
    else if (playerSelection == computerSelection) {
        playerScore++;
        computerScore++;
        roundResult.textContent = 'Its a Tie!';
    } 
    else {
        computerScore++;
        roundResult.textContent = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    score.textContent = 'Player - ' + playerScore + ' && ' + computerScore + ' - Computer';
    

    if (round !== 4) {
        result.textContent = '';
        return round++, roundResult, score, computerScore, playerScore;
    }
    else {
        round = 0;
        if (playerScore > computerScore) {
            playerScore = 0;
            computerScore = 0;
            return result.textContent = 'You won the game! Congratulations';
        }
        else if (playerScore == computerScore) {
            playerScore = 0;
            computerScore = 0;
            return result.textContent = 'You tied the game! Click again to keep playing';
        }
        else {
            playerScore = 0;
            computerScore = 0;
            return result.textContent = 'You lost the game! Try again next time';
        }
    }
}

