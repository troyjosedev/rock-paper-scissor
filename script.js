const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const SELECTIONS = [    
    {       
     name: 'rock',        
     emoji: '✊',        
     beats: 'scissors'    
    },    
    {        
    name: 'paper',        
    emoji: '✋',        
    beats: 'rock'    
    },    
    {        
    name: 'scissors',        
    emoji: '✌️',       
    beats: 'paper'    
    },
];

let yourScore = 0;
let computerScore = 0;
let matchCount = 0;

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    });
});

function makeSelection(selection) {
    const computerSelection = randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);

    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if (yourWinner) {
        yourScore++;
        yourScoreSpan.innerText = yourScore;
    }

    if (computerWinner) {
        computerScore++;
        computerScoreSpan.innerText = computerScore;
    }

    matchCount++;

    if (matchCount === 10) {
        if (yourScore > computerScore) {
            alert('You win!');
        } else if (yourScore < computerScore) {
            alert('Computer wins!');
        } else {
            alert('It\'s a tie!');
        }

        resetGame();
    }
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div');
    div.innerText = selection.emoji;
    div.classList.add('result-selection');
    if (winner) {
        div.classList.add('winner');
    }
    finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name;
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}