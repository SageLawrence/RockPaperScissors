function getComputerChoice() {

    let randVal = Math.floor(Math.random()*3)+1;

    if (randVal === 1) {
        computerChoice = 'rock';
    }
    else if (randVal === 2) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return(computerChoice);

} // generates a choice for the player to play against

const choices = document.querySelectorAll('.choice');

function playRound() { // runs onclick from arrow function below

    let userChoice = this.id; // sets the id of the image selected as the choice
    
    let computerChoice = getComputerChoice();
    
    if (userChoice === computerChoice) {

        tied();

    } else if (userChoice === 'rock' && computerChoice === 'scissors'
    || userChoice === 'paper' && computerChoice === 'rock'
    || userChoice === 'scissors' && computerChoice === 'paper') {

        winner();

    } else {

        loser();

    }
}

choices.forEach(choice => choice.addEventListener('click', playRound)); // adds click listener to pics

function winner() {
    let wins = document.createElement('div');
    wins.classList.add('winBox');
    winDiv = document.getElementById('wins');
    winDiv.appendChild(wins);
}

function loser() {
    let losses = document.createElement('div');
    losses.classList.add('lossBox');
    lossDiv = document.getElementById('losses');
    lossDiv.appendChild(losses);
}

function tied() {
    let ties = document.createElement('div');
    ties.classList.add('tieBox');
    tieDiv = document.getElementById('ties');
    tieDiv.appendChild(ties);
}