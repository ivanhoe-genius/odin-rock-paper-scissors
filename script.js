const resultsDiv = document.querySelector('#results');

function getComputerChoice() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    return computerChoices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const weapons = document.createElement('p');
    weapons.textContent = '-- playerSelection: ' + (playerSelection ?? 'Invalid weapon') + '-- computerSelection: ' + computerSelection;
    resultsDiv.appendChild(weapons);

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
        case playerSelection === computerSelection:
            result = 'Tie! Nobody wins.';
            break;
        default:
            result = 'Nobody wins.';
            break;
    }

    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = result;
    resultsDiv.appendChild(infoParagraph);

    return result;
}

let gameNumber = 0;
let playerPoints = 0;
let computerPoints = 0;

function game(playerSelection, computerSelection) {

    if (gameNumber === 0) {
        resultsDiv.innerHTML = null;
    }

    const roundWinner = playRound(playerSelection, computerSelection);

    if (playerPoints < 5 && computerPoints < 5) {
        if (roundWinner.includes('You Win!')) {
            playerPoints++;
        } else if (roundWinner.includes('You Lose!')) {
            computerPoints++;
        }

        const scoreParagraph = document.createElement('p');

        scoreParagraph.textContent = 'Score: ' + 'You: ' + playerPoints + ' : ' + 'Computer: ' + computerPoints + ' Game number: ' + (gameNumber === 0 ? 1 : gameNumber + 1);

        resultsDiv.appendChild(scoreParagraph);

        const newLine = document.createElement('br');
        resultsDiv.appendChild(newLine);

        if (playerPoints === 5 || computerPoints === 5) {
            const grandWinnerParagraph = document.createElement('p');

            grandWinnerParagraph.textContent = ('***Grand winner: ' + (playerPoints > computerPoints ? 'You!' : 'Computer!') + ' Thank you for playing!***');

            resultsDiv.appendChild(grandWinnerParagraph);
            resultsDiv.appendChild(newLine);

            gameNumber = -1;
            playerPoints = 0;
            computerPoints = 0;
        }

        gameNumber++;

    }
}

const buttonList = document.querySelectorAll('input[type=button]');

buttonList.forEach((button) => {
    button.addEventListener('click', (event) => {
        game(event.target.value.toLowerCase(), getComputerChoice());
    });
})

