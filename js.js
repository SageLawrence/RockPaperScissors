function getComputerChoice(computerChoice) {

    let randVal = Math.floor(Math.random()*3)+1;

    if (randVal === 1) {
        computerChoice = 'rock';
        document.getElementById('computerChoice').src="images/rock.jpeg";
    }
    else if (randVal === 2) {
        computerChoice = 'paper';
        document.getElementById('computerChoice').src="images/paper.jpg";
    }
    else {
        computerChoice = 'scissors';
        document.getElementById('computerChoice').src="images/scissors.jpg";
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

let winCount = 0; // initialize round wins at 0
let lossCount = 0;
let tieCount = 0;

let matchWins = 0; // initialize match wins at 0
let matchLosses = 0;
let matchTies = 0;

function winner(winDiv) {
    let wins = document.createElement('div'); // creates win div in memory
    wins.classList.add('winBox'); // adds CSS traits to box
    winDiv = document.getElementById('wins'); // sets
    winDiv.appendChild(wins);

    winCount++; // counts wins within the current match

    if (winCount === 3) { // calls function to win the match with 3 round wins
        matchWin();
    }
}

function loser(lossDiv) {
    let losses = document.createElement('div');
    losses.classList.add('lossBox');
    lossDiv = document.getElementById('losses');
    lossDiv.appendChild(losses);

    lossCount++;

    if (lossCount === 3) { // calls function to lose the match with 3 round losses
        matchLoss();
    }
}

function tied(tieDiv) {
    let ties = document.createElement('div');
    ties.classList.add('tieBox');
    tieDiv = document.getElementById('ties');
    tieDiv.appendChild(ties);

    tieCount++;
}

function matchWin() {
    winCount = 0; // resets round win count
    lossCount = 0;
    tieCount = 0;

    matchWins++; // adds to match wins
    document.getElementById('matchWins').textContent = matchWins; // adds the current match win count to HTML

    document.getElementById('wins').textContent = ''; // removes win divs from page
    document.getElementById('losses').textContent = '';
    document.getElementById('ties').textContent = '';
}

function matchLoss() {
    winCount = 0; // resets round win count
    lossCount = 0;
    tieCount = 0;

    matchLosses++; // adds to match wins
    document.getElementById('matchLosses').textContent = matchLosses; // adds the current match loss count to HTML

    document.getElementById('wins').textContent = ''; // removes win divs from page
    document.getElementById('losses').textContent = '';
    document.getElementById('ties').textContent = '';
}