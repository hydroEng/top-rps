function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getComputerChoice() {
    let numResult = getRndInteger(0, 3)
    let choices = ["rock", "paper", "scissors"]

    return choices[numResult]
}

function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection.toLowerCase()

    if (playerChoice == computerSelection) {
        return "tie"
    }

    if (playerChoice == "rock") {
        if (computerSelection == "scissors") {
            return "win"
        }
    }
    else if (playerChoice == "paper") {
        if (computerSelection == "rock") {
            return "win"
        }
    }
    else if (playerChoice == "scissors") {
        if (computerSelection == "paper") {
            return "win"
        }
    }
    return "loss" 
}

function game() {
    let choice = prompt("Make a choice: ")
        if (!['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) {
            console.log("Invalid choice! Try again.")
            return null
        }
    let result = playRound(choice, getComputerChoice())
    console.log(result)
    }

game()
game()
game()
game()
game()
