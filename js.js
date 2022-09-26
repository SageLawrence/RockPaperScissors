/* Function getComputerChoice generates a random integer from 1-3 and assigns R/P/S depending on the result */
function getComputerChoice() {

    let randVal = Math.floor(Math.random()*3)+1;

    if (randVal === 1) {
        computerSelection = 'rock';
    }
    else if (randVal === 2) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    return(computerSelection);

}

/* Function getPlayerChoice takes the input from the HTML form */
function getPlayerChoice() {

    playerSelection = document.querySelector('input').value;
    playerSelection = playerSelection.toLowerCase();
    return(playerSelection);

}

/* Function singleRound compares the selections to choose a winner in a single round, uses returned input values */
let rounds = 0;
let userScore = 0;
let computerScore = 0;

function singleRound () {

    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    let matchResult;

    if (playerSelection === 'rock') {

        if (computerSelection === playerSelection) {
            matchResult = `You tied! You both chose ${playerSelection}!`;
        }
        
        else if (computerSelection === 'paper') {
            matchResult = (`You lose, ${computerSelection} beats ${playerSelection}!`);
            computerScore++;
        }

        else {
            matchResult = (`You win, ${playerSelection} beats ${computerSelection}!`);
            userScore++;
        }

    }

    else if (playerSelection === 'paper') {

        if (computerSelection === playerSelection) {
            matchResult = (`You tied! You both chose ${playerSelection}!`);
        }
        
        else if (computerSelection === 'scissors') {
            matchResult = (`You lose, ${computerSelection} beats ${playerSelection}!`);
            computerScore++;
        }

        else {
            matchResult = (`You win, ${playerSelection} beats ${computerSelection}!`);
            userScore++;
        }

    }

    else if (playerSelection === 'scissors') {

        if (computerSelection === playerSelection) {
            matchResult = (`You tied! You both chose ${playerSelection}!`);
        }
        
        else if (computerSelection === 'rock') {
            matchResult = (`You lose, ${computerSelection} beats ${playerSelection}!`);
            computerScore++;
        }

        else {
            matchResult = (`You win, ${playerSelection} beats ${computerSelection}!`);
            userScore++;
        }

    }

    else {
        alert('This is not an accepted value, try again.');
        rounds--; /*reset round increment if value is not accepted*/
    }
    rounds++;
    console.log(matchResult);
    console.log(rounds);
    console.log(userScore);
    console.log(computerScore);

    if (rounds === 5) {
        console.log('Game over');

        rounds = 0;
        userScore = 0;
        computerScore = 0;
    }
}