const possibleChoices = document.querySelectorAll("button");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const reset = document.getElementById("reset");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const scoreboard = {
    player: 0,
    computer: 0
};
let playerChoice;
let computerChoice;
let rounds = 0;
const choices = ["Rock", "Paper", "Scissors"];

//Clickable buttons for rock/paper/scissors starts the game and increases the number of rounds
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    rounds += 1;
    console.log(rounds)
    playerChoiceDisplay.innerHTML = playerChoice
    computerChoiceDisplay.innerHTML = getComputerChoice()
    getResult()
    updateScore()
}))

//Random number generator that refers to an array of rock/paper/scissors for the com choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNumber];
    return computerChoice;
}

//Possible results and return text declaring winners of rounds
function getResult() {
    if(playerChoice === computerChoice){
        resultDisplay.innerHTML = "It's a tie!"
    } else if(playerChoice === "Rock" && computerChoice === "Paper"){
        resultDisplay.innerHTML = "You win! Rock beats Paper";
        playerScore.innerHTML = ++scoreboard.player;
        return;
    } else if(playerChoice === "Rock" && computerChoice === "Scissors"){
        resultDisplay.innerHTML = "You lose! Scissors beats Rock"
        computerScore.innerHTML = ++scoreboard.computer;
        return;
    } else if(playerChoice === "Paper" && computerChoice === "Rock"){
        resultDisplay.innerHTML = "You win! Paper beats Rock"
        playerScore.innerHTML = ++scoreboard.player;
        return;
    } else if(playerChoice === "Paper" && computerChoice === "Scissors"){
        resultDisplay.innerHTML = "You lose! Scissors beats Paper"
        computerScore.innerHTML = ++scoreboard.computer;
        return;
    } else if(playerChoice === "Scissors" && computerChoice === "Paper"){
        resultDisplay.innerHTML = "You win! Scissors beats Paper"
        playerScore.innerHTML = ++scoreboard.player;
        return;
    } else if(playerChoice === "Scissors" && computerChoice === "Rock"){
        resultDisplay.innerHTML = "You lose! Rock beats Paper"
        computerScore.innerHTML = ++scoreboard.computer;
        return;
    }
}

//After 5 rounds, a reset button and final winner are shown
function updateScore() {
    if(rounds === 5){
    scoreboard.player > scoreboard.computer ? resultDisplay.innerHTML = 
    "5 rounds played and you win!" : resultDisplay.innerHTML = "5 rounds played and you lose!" 
    resetGame()
    }
}

//Clickable reset button
function resetGame() {
    reset.innerHTML = '<button onclick="replay()"> Play again? </button>';
    }

//Reset button function
function replay(){
        rounds = 0;
        playerScore.innerHTML = " ";
        computerScore.innerHTML = " ";
        scoreboard.player = 0;
        scoreboard.computer = 0;
        console.log("test");
        reset.innerHTML = " ";
        resultDisplay.innerHTML = " ";
    }