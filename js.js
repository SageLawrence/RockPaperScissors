/* Function getComputerChoice generates a random integer from 1-3 and assigns R/P/S depending on the result */
function getComputerChoice() {

    let computerSelection;

    let randVal = Math.floor(Math.random()*3)+1;
    console.log(randVal);

    if (randVal === 1) {
        computerSelection = 'Rock';
    }
    else if (randVal === 2) {
        computerSelection = 'Paper';
    }
    else {
        computerSelection = 'Scissors';
    }
    console.log(computerSelection);

}

getComputerChoice();

function getPlayerChoice() {

    const playerSelection = document.querySelector('input').value;
    console.log(playerSelection);
    
}

/* function singleRound (computerSelection, playerSelection); */