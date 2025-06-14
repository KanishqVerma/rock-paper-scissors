// To get computer choice, randomly returns a string - rock/paper/scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);

    if (choice == 0)
    {
        return "rock";
    }
    else if (choice == 1)
    {
        return "paper";
    }
    else if (choice == 2){
        return "scissors";
    }
    else{
        return getComputerChoice();
    }
}

// To get user's choice, returns a string - rock/paper/scissors
// function getHumanChoice(){
//     const input = button.document
//     if (input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors")
//     {
//         return input.toLowerCase();
//     }
//     else{
//         console.log("INVALID CHOICE");
//         return getHumanChoice();
//     }
// }

// To take both choices as inputs and log the winner, also increment the score, if needed
function playRound(humanChoice){
    let computerChoice = getComputerChoice();

    let score = document.querySelector(".score");

    let result = document.querySelector(".result")
    let resultText = document.createElement("p");
    result.textContent="";
    if (humanChoice === computerChoice){
        resultText.textContent = "Draw";
        result.appendChild(resultText);
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        resultText.textContent = "You Win";
        result.appendChild(resultText);
        humanScore++;
    }
    else{
        resultText.textContent = "You Lose";
        result.appendChild(resultText);
        computerScore++;
    }

    score.textContent = `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
    
    return;
}

// To play a game of n rounds
// function playGame(){
//     for (let i = 0; i < 5; i++){
//         playRound();
//     }
//     if (humanScore > computerScore)
//     {
//         console.log("Congratulations !! YOU WIN");
//         return;
//     }
//     else if (computerScore > humanScore)
//     {
//         console.log("Congratulations !! YOU LOSE");
//         return;
//     }
//     else{
//         console.log("DRAW :(");
//         return;
//     }
// }




let humanScore = 0;
let computerScore = 0;
// let rounds;
// do{
//     rounds = Number(prompt("How many rounds?"));
// }
// while(rounds <= 0 || Number.isInteger(rounds) == false);
// playGame();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const button = document.querySelector(".playButtons")


rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissor.addEventListener("click", () => playRound("scissors"));
