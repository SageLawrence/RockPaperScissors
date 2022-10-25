/* Function getComputerChoice generates a random integer from 1-3 and assigns R/P/S depending on the result */

// did a few things differently than instructed, as I wanted to learn a few new functions of JS/make
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

/* Function singleRound compares the selections to choose a winner in a single round, uses returned input values. 
This updates the total every time it's run*/
let rounds = 0;
let userScore = 0;
let computerScore = 0;
let gameResult = 'Game in progress.';

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

    } else if (playerSelection === 'paper') {

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

    } else if (playerSelection === 'scissors') {

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

    } else {
        alert('This is not an accepted value, try again.');
        rounds--; /*reset round increment if value is not accepted*/
    }

    rounds++;
    document.getElementById("matchResult").innerHTML = matchResult;
    document.getElementById("rounds").innerHTML = rounds;
    document.getElementById("userScore").innerHTML = userScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    
    /*added to end game early if user or computer wins three rounds and displays results*/
    if (userScore === 3) {
        console.log('Game over');
        gameResult = (`You won, ${userScore} round(s) to ${computerScore}.`);
        rounds = 0;
        userScore = 0;
        computerScore = 0;
        document.getElementById("gameResult").innerHTML = gameResult;
    }
    if (userScore === 3) {
        console.log('Game over');
        gameResult = (`You lost, ${userScore} round(s) to ${computerScore}.`);
        rounds = 0;
        userScore = 0;
        computerScore = 0;
        document.getElementById("gameResult").innerHTML = gameResult;
    }
    /*ends game if total rounds played reaches 5 and displays results*/
    if (rounds === 5) {
        console.log('Game over');
            if (userScore > computerScore) {
                gameResult = (`You won, ${userScore} round(s) to ${computerScore}.`);
            }
            else if (userScore < computerScore) {
                gameResult = (`You lost, ${userScore} round(s) to ${computerScore}.`);
            }
            else {
                gameResult = (`You tied, ${userScore} round(s) each!`);
            }
        rounds = 0;
        userScore = 0;
        computerScore = 0;
        document.getElementById("gameResult").innerHTML = gameResult;

    }
}