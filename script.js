function getComputerChoice() {
    const choices = ['rock','paper','scissors'];
    return choices[Math.random() * choices.length>>0];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection;
        let computerSelection;
        function playRound(playerSelection, computerSelection) {
            playerSelection = prompt('Choose between rock, paper and scissors.').toLowerCase();
            computerSelection = getComputerChoice();
            if (playerSelection == 'paper' && computerSelection == 'rock') {
                playerScore++;
                console.log('You Win! Paper beats Rock');
                console.log('Player - ' + playerScore + ' && ' + computerScore + ' - Computer')
                return computerScore, playerScore;
            } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                playerScore++;
                console.log('You Win! Scissors beats Paper');
                console.log('Player - ' + playerScore + ' && ' + computerScore + ' - Computer')
                return computerScore, playerScore;
            } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                playerScore++;
                console.log('You Win! Rock beats scissors');
                console.log('Player - ' + playerScore + ' && ' + computerScore + ' - Computer')
                return computerScore, playerScore;
            } else if (playerSelection == computerSelection) {
                console.log('Its a Tie!');
                console.log('Player - ' + playerScore + ' && ' + computerScore + ' - Computer')
                return computerScore, playerScore;
            } else {
                computerScore++;
                console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection);
                console.log('Player - ' + playerScore + ' && ' + computerScore + ' - Computer')
                return computerScore, playerScore;
            }
        }
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        return console.log('You won! Congratulations')
    } else if (playerScore == computerScore) {
        return console.log('You tied the game! Try again next time')
    } else {
        return console.log('You lost! Try again next time')
    }
}
game();