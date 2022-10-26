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

       console.log('Tie');

    } else if (userChoice === 'rock' && computerChoice === 'scissors'
    || userChoice === 'paper' && computerChoice === 'rock'
    || userChoice === 'scissors' && computerChoice === 'paper') {

        console.log('Win');

    } else {
        
        console.log('Loss');

    }
}

choices.forEach(choice => choice.addEventListener('click', playRound)); // adds click listener to pics