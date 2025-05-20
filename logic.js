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

console.log(getHumanChoice());
