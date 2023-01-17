const possibleChoices = document.querySelectorAll("button");
const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
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

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    playerChoice = e.target.id
    rounds += 1;
    console.log(rounds)
    playerChoiceDisplay.innerHTML = playerChoice
    computerChoiceDisplay.innerHTML = getComputerChoice()
    getResult()
    updateScore()
}))

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNumber];
    return computerChoice;
}

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

function updateScore(playerScore, computerScore) {
    if(rounds == 5 && playerScore > computerScore){
        resultDisplay.innerHTML = "After 5 rounds, you win!"
    }else if(rounds == 5 && playerScore < computerScore){
        resultDisplay.innerHTML = "After 5 rounds, you lose!"
    }
}