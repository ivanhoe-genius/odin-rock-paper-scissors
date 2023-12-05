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
let computerSelection = getComputerChoice();

function playRound(player, computer) {
    console.log(player);
    console.log(computer);

    let result;
    switch (true) {
        case player === 'rock' && computer === 'Paper':
            result = 'You Lose! Paper beats Rock.';
            break;
        case player === 'rock' && computer === 'Scissors':
            result = 'You Win! Rock beats Scissors.';
            break;
        case player === 'paper' && computer === 'Rock':
            result = 'You Win! Paper beats Rock.';
            break;
        case player === 'paper' && computer === 'Scissors':
            result = 'You Lose! Scissors beat Paper.';
            break;
        case player === 'scissors' && computer === 'Rock':
            result = 'You Lose! Rock beats Scissors.';
            break;
        case player === 'scissors' && computer === 'Paper':
            result = 'You Win! Scissors beat Paper.';
            break;
        default:
            result = 'Tie! Nobody wins.';
            break;
    }

    console.log(result);

    if (result === 'Tie! Nobody wins.') {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    return result;
}


playRound(playerSelection, computerSelection);
