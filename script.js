function getComputerChoice () {
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

console.log(getComputerChoice());