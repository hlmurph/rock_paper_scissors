# rock_paper_scissors
Javascript project for The Odin Project

This is a console based game of rock, paper, scissors. Open chrome devtools (F12), then navigate to the console tab. When you refresh the page, there will be a prompt for player input. Type rock, paper, or scissors (case insensitive) and the console will show the round results, and who won the game after five rounds.

Below is the pseudocode written for this project. It may not perfectly reflect the final code, as I did not come back and change it when making changes to the final code, as I thought I might like to see how my pseudocode differed from what acutallly ended up working.

Pseudocode:

Create a function to play a game
    Store number of rounds in a variable
    Run a loop equal to the number of rounds variable
        Call play round function

    Declare scores

    Create a function to play a round, taking human and computer choices as arguments
        Make human choice case insensitive
        Determine winner
            For human rock
                If computer is rock tie
                If computer is paper lose
                If computer is scissors win
            For human paper
                If computer is rock win
                If computer is paper tie
                If computer is scissors lose
            For human scissors
                If computer is rock lose
                If computer is paper win
                If computer is scissors tie
        Print round result
        Increment score


Create a function to get the computer's move
    Create variable to hold choice
    Assign a random number from 1-3 to choice
    Assign a string to choice
        Rock if 1
        Paper if 2
        Scissors if 3

Create a function to get the human's move
    Create a variable to hold the human's choice
    Prompt for human input
    Store human input in variable

