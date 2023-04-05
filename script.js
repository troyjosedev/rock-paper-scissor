function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex]
}

function playRound(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice ===  computerChoice) {
        return `It's a tie`
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper") 
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}`
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        let playerSelection;

        do {
            playerSelection = prompt("Choose rock, paper, or scissors")
        } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection && "scissors" && playerSelection === null)

        if (playerSelection === null) {
            console.log("Game Cancelled");
            return;
        }

        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++
        }
    } 


    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game");
    } else {
        console.log("The game is tied");
    }


}

game()