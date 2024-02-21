let computerSelection;
let computerRoll = 0;
let playerSelection;


function getcomputerChoice (computerRoll) {
    computerRoll = Math.floor(Math.random() * 9);

    if (computerRoll < 3) {
      computerSelection = "Rock";
    } else if (computerRoll > 2 && computerRoll < 5){
      computerSelection = "Scissors";
    } else { 
      computerSelection = "Paper";
    }
    
    return computerSelection;
}


function playRPS (playerSelection, computerSelection) {

    let message ="";
    
    computerSelection = getcomputerChoice();
    computerSelection = computerSelection.toUpperCase();
    
    playerSelection = prompt("enter your move : ");
    playerSelection = playerSelection.toUpperCase();
    
    console.log(`Computer chose : ${computerSelection}`);
    console.log(`Player chose : ${playerSelection}`);

    
    if (playerSelection == "ROCK") {
        if (computerSelection == "ROCK") {
            message = "You draw"
        } else if (computerSelection == "PAPER") {
            message = "You lose"
        } else {
            message = "You win"
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "PAPER") {
            message = "You draw"
        } else if (computerSelection == "SCISSORS") {
            message = "You lose"
        } else {
            message = "You win"
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "SCISSORS") {
            message = "You draw"
        } else if (computerSelection == "ROCK") {
            message = "You lose"
        } else {
            message = "You win"
        }
    }

    console.log(message)
    return message;

}


function playGame () {

    let outcome = ""
    let i = 0;
    let victory= 0;
    let defeat= 0;
    let draws = 0;

    while (i < 5) {
        outcome = playRPS();
        if (outcome == "You win") {
            victory = victory + 1 ;
        } else if (outcome == "You lose") {
            defeat = defeat + 1;
        } else {
            draws = draws + 1 ;
        }
        i++; 

        console.log(`Victories: ${victory}`);
        console.log(`Defeats: ${defeat}`);
        console.log(`Draws: ${draws}`);
    }

    
    
}

playGame();
