
function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.random() * choices.length>>0];
}

let playerSelection = prompt('Choose between rock, paper and scissors.').toLowerCase();
let computerSelection = getComputerChoice();
console.log(playerSelection + ' - Player Selection');
console.log(computerSelection + ' - Computer Selection');

function playRound(playerSelection, computerSelection) {
    let result
    if (playerSelection == 'paper' && computerSelection == 'rock') {
        result = 'You Win! Paper beats Rock';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        result = 'You Win! Scissors beats Paper';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        result = 'You Win! Rock beats scissors';
    } else if (playerSelection == computerSelection) {
        result = 'Its a Tie!';
    } else {
        result = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    }
    return result;
}

console.log(playRound(playerSelection, computerSelection));