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

} // generates a choice for the player to play against