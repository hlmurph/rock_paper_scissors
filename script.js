playGame();

function playGame() {

    // Initialize scores
    let humanScore = 0;
    let computerScore = 0;

    const container = document.querySelector('#container');
    const results = document.querySelector('#results');
    let score = document.createElement('p');
    let winner = document.createElement('p');
    score.textContent = `Player: ${humanScore} Computer: ${computerScore}`
    results.appendChild(score);
    results.appendChild(winner);
    let buttons = ['Rock', 'Paper', 'Scissors'];

    for (button of buttons) {
        let newButton = document.createElement('button')
        container.appendChild(newButton);
        newButton.setAttribute('id', button);
        newButton.textContent = button;
        newButton.addEventListener('click', () => {
            playRound(newButton.getAttribute('id'), getComputerChoice());
        });
    };

    //Store final scores in a variable
    let finalScore = `Human: ${humanScore}\nComputer: ${computerScore}`;
    // Print results of the game
    if (humanScore > computerScore) {
        console.log(`You win!\n${finalScore}`)
    }
    else if (computerScore > humanScore) {
        console.log(`You lose!\n${finalScore}`)
    }
    else {
        console.log(`Tie!\n${finalScore}`)
    }
    
    //Function to play a round
    function playRound(humanChoice, computerChoice) {
        // Take human input and normalize it so only the first letter is capitalized
        humanChoice = humanChoice.charAt(0).toUpperCase() + (humanChoice.toLowerCase()).slice(1);
        let result;
            switch(humanChoice) {
            case "Rock":
                if (computerChoice == "Rock") {
                    result = "tie";
                }
                else if (computerChoice == "Paper") {
                    result = "lose";
                }
                else {
                    result = "win";
                }  
                break;
            case "Paper":
                if (computerChoice == "Rock") {
                    result = "win";
                }
                else if (computerChoice == "Paper") {
                    result = "tie";
                }
                else {
                    result = "lose";
                }
                break;
            case "Scissors":
                if (computerChoice == "Rock") {
                    result = "lose";
                }
                else if (computerChoice == "Paper") {
                    result = "win";
                }
                else {
                    result = "tie";
                }
                break;
        }
        // Print round results
        if (result == "win") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore ++;
            score.textContent = `Player: ${humanScore} Computer: ${computerScore}`
        }
        else if (result == "lose") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore ++;
            score.textContent = `Player: ${humanScore} Computer: ${computerScore}`
        }
        else {
            console.log(`Tie! You both chose ${humanChoice}`);
            score.textContent = `Player: ${humanScore} Computer: ${computerScore}`
        }
        // Check for a winner
        if (humanScore == 5) {
            winner.textContent = 'You win!'
        } else if (computerScore == 5) {
            winner.textContent = 'You lose!'
        }
    }
}

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


// Function to choose human's move
function getHumanChoice() {
    return prompt("Choose Rock, Paper, or Scissors");
}