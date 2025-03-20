// Function to choose computer's move
function getComputerChoice() {
    const num = (Math.floor(Math.random() * 3)) + 1;
    let choice;
    switch(num) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return choice;
}

function getHumanChoice() {
    return prompt("Choose Rock, Paper, or Scissors");
}

console.log(getHumanChoice());