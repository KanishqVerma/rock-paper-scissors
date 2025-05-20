// To get computer choice, randomly returns a string - rock/paper/scissors
function getComputerChoice(){
    let choice = Math.floor(Math.random()*10);

    if (choice >= 1 && choice <= 3)
    {
        return "Rock";
    }
    else if (choice >= 4 && choice <= 6)
    {
        return "Paper";
    }
    else if (choice >= 7 && choice <= 9){
        return "Scissors";
    }
    else{
        return getComputerChoice();
    }
}

// To get user's choice, returns a string - Rock/Paper/Scissors
// function getHumanChoice(){
//     let choice = prompt("Rock / Paper / Scissors.\nEnter you choice:")
// }

