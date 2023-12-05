function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    return computerChoices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    const playerSelection = prompt('Rock, Paper or Scissors?');

    if (playerSelection.trim().toLowerCase() !== 'rock' &&
        playerSelection.trim().toLowerCase() !== 'paper' &&
        playerSelection.trim().toLowerCase() !== 'scissors') {
        console.log(' Check your spelling! Rock, Paper or Scissors?');
        getPlayerChoice();
    } else {
        return playerSelection.trim().toLowerCase();
    }
}

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

    return result;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        let roundWinner = playRound(playerSelection, computerSelection);

        if (roundWinner.includes('You Win!')) {
            playerPoints++;
        } else if (roundWinner.includes('You Lose!')) {
            computerPoints++;
        } else if (roundWinner === 'Tie! Nobody wins.') {
            i--;
        }


        console.log('Score: ' + 'You: ' + playerPoints + ' : ' + 'Computer: ' + computerPoints);
        console.log(i);

        i === 4 && console.log('Grand winner: ' + (playerPoints > computerPoints ? 'You!' : 'Computer!') + '\nThank you for playing!');

    }
}

game();




