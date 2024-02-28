let buttonRock = document.querySelector('.Rock');
let buttonPaper = document.querySelector('.Paper');
let buttonScissors = document.querySelector('.Scissors');
let score = document.querySelector('.Score');
let victory= 0;
let defeat= 0;
let draws = 0;
let outcome; 
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
    
    playerSelection = playerSelection.toUpperCase();
    
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

    return message;
}


function resetScore () {
    victory = 0;
    defeat = 0;
    draws = 0;
    playerSelection = "";
    computerSelection = "";
    outcome = "";
    showScore(playerSelection);
}


function showScore (playerSelection) {
    score.innerText = `Computer chose : ${computerSelection}
                    Player chose : ${playerSelection}
                    ${outcome}
                    The score is : 
                    ${victory} Victories
                    ${defeat} Defeats
                    ${draws} Draws`
}


buttonRock.addEventListener('click', () => {

    playerSelection = "Rock"
    outcome = playRPS(playerSelection,"");
    if (outcome == "You win") {
        victory = victory + 1 ;
    } else if (outcome == "You lose") {
        defeat = defeat + 1;
    } else {
        draws = draws + 1 ;
    }
    showScore(playerSelection);
    
    if (victory == 5 || defeat == 5 || draws == 5) {
        if (victory == 5) {
            alert("Game over, you won!")
        } else if (defeat == 5){
            alert("Game over, you lost!")
        } else {
            alert("Game over, it's draw!")
        }

        resetScore();
 
    }
})


buttonPaper.addEventListener('click', () => {

    playerSelection = "Paper"
    outcome = playRPS(playerSelection,"");
    if (outcome == "You win") {
        victory = victory + 1 ;
    } else if (outcome == "You lose") {
        defeat = defeat + 1;
    } else {
        draws = draws + 1 ;
    }
    showScore(playerSelection);
    
    if (victory == 5 || defeat == 5 || draws == 5) {
        if (victory == 5) {
            alert("Game over, you won!")
        } else if (defeat == 5){
            alert("Game over, you lost!")
        } else {
            alert("Game over, it's draw!")
        }
        resetScore();

    }
})


buttonScissors.addEventListener('click', () => {

    playerSelection = "Scissors";
    outcome = playRPS(playerSelection,"");
    if (outcome == "You win") {
        victory = victory + 1 ;
    } else if (outcome == "You lose") {
        defeat = defeat + 1;
    } else {
        draws = draws + 1 ;
    }
    showScore(playerSelection);
    
    if (victory == 5 || defeat == 5 || draws == 5) {
        if (victory == 5) {
            alert("Game over, you won!")
        } else if (defeat == 5){
            alert("Game over, you lost!")
        } else {
            alert("Game over, it's draw!")
        }
        resetScore();
  
    }
})