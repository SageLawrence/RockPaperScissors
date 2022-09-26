/* Function getComputerChoice generates a random integer from 1-3 and assigns R/P/S depending on the result */
function getComputerChoice() {

    let computerSelection;

    let randVal = Math.floor(Math.random()*3)+1;
    console.log(randVal);

    if (randVal === 1) {
        computerSelection = 'rock';
    }
    else if (randVal === 2) {
        computerSelection = 'paper';
    }
    else {
        computerSelection = 'scissors';
    }
    console.log(computerSelection);

}

getComputerChoice();

/* Function getPlayerChoice takes the input from the HTML form */
function getPlayerChoice() {

    let playerSelection = document.querySelector('input').value;
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    
}

function singleRound (computerSelection, playerSelection) {

    if (playerSelection === 'rock') {

        if (computerSelection === playerSelection) {
            return ('You tied! You both chose ${playerselection}!')
        }
        
        else if (computerSelection === 'paper') {
            return ('You lose! ${computerSelection} beats ${playerSelection}!')
        }

        else {
            return ('You win! ${playerSelection} beats ${computerSelection}!')
        }

    }

    else if (playerSelection === 'paper') {

        if (computerSelection === playerSelection) {
            return ('You tied! You both chose ${playerselection}!')
        }
        
        else if (computerSelection === 'scissors') {
            return ('You lose! ${computerSelection} beats ${playerSelection}!')
        }

        else {
            return ('You win! ${playerSelection} beats ${computerSelection}!')
        }

    }

    else if (playerSelection === 'scissors') {

        if (computerSelection === playerSelection) {
            return ('You tied! You both chose ${playerselection}!')
        }
        
        else if (computerSelection === 'rock') {
            return ('You lose! ${computerSelection} beats ${playerSelection}!')
        }

        else {
            return ('You win! ${playerSelection} beats ${computerSelection}!')
        }

    }

    else {
        alert('This is not an accpeted value, try again.')
    }
}

singleRound();