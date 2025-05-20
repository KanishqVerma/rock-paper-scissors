// To get computer choice, randomly returns a string - rock/paper/scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random()*10);

    if (choice >= 1 && choice <= 3)
    {
        return "rock";
    }
    else if (choice >= 4 && choice <= 6)
    {
        return "paper";
    }
    else if (choice >= 7 && choice <= 9){
        return "scissors";
    }
    else{
        return getComputerChoice();
    }
}

// To get user's choice, returns a string - rock/paper/scissors
function getHumanChoice(){
    let input = prompt("Rock / Paper / Scissors\nEnter you choice:");
    return input.toLowerCase();
}

// To take both choices as inputs and log the winner, also increment the score, if needed
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Draw");
        return; 
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "rock")){
        console/log("You WIN!!, " + humanChoice + " beats " + computerChoice);
        humanChoice += 1;
        return;
    }
    else{
        console.log("You LOSE!!, " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
        return;
    }
}

// To play a game of n rounds
function playGame(n){
    for (let i = 0; i < n; i++){
        playRound();
    }
    if (humanScore > computerScore)
    {
        console.log("Congratulations !! YOU WIN");
        return;
    }
    else if (computerScore > humanScore)
    {
        console.log("Congratulations !! YOU LOSE");
        return;
    }
    else{
        console.log("DRAW :(");
        return;
    }
}


// let humanScore = 0;
// let computerScore = 0;
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
// let rounds = prompt("How many rounds?");
// playGame(rounds);
