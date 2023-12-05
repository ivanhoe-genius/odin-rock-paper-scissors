function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    return computerChoices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerSelection = prompt('Rock, Paper or Scissors?');

    if (playerSelection.trim().toLowerCase() !== 'rock' &&
        playerSelection.trim().toLowerCase() !== 'paper' &&
        playerSelection.trim().toLowerCase() !== 'scissors') {
        console.log(' Check your spelling! Rock, Paper or Scissors?');
        getPlayerChoice();
    } else {
        return playerSelection.trim().toLowerCase();
    }
}



let playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    let result;
    switch (true) {
        case playerSelection === 'rock' && computerSelection === 'Paper':
            result = 'You Lose! Paper beats Rock.';
            break;
        case playerSelection === 'rock' && computerSelection === 'Scissors':
            result = 'You Win! Rock beats Scissors.';
            break;
        case playerSelection === 'paper' && computerSelection === 'Rock':
            result = 'You Win! Paper beats Rock.';
            break;
        case playerSelection === 'paper' && computerSelection === 'Scissors':
            result = 'You Lose! Scissors beat Paper.';
            break;
        case playerSelection === 'scissors' && computerSelection === 'Rock':
            result = 'You Lose! Rock beats Scissors.';
            break;
        case playerSelection === 'scissors' && computerSelection === 'Paper':
            result = 'You Win! Scissors beat Paper.';
            break;
        default:
            result = 'Tie! Nobody wins.';
            break;
    }
    return result;
}


console.log(playRound(playerSelection, computerSelection));
