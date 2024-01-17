// Declare DOM elements
const gameboardElement = document.querySelector('.gameboard');

// Declare variables
let gameboardSize = 25;
let gameboard = Array(gameboardSize).fill("");

// Render current gameboard
function renderGameboard() {

    const boardSize = Math.ceil(Math.sqrt(gameboard.length));
    document.documentElement.style.setProperty('--board-size', `${boardSize}`)
    
    while(gameboardElement.firstChild) {
        gameboardElement.removeChild(gameboardElement.firstChild);
    }

    gameboard.forEach((value, index) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.id = 'square'+ index;
        square.innerText = value;
        gameboardElement.appendChild(square);
    })
}

// Find board edges to prevent moving off map
function getBoardEdges() {

    const boardSize = Math.ceil(Math.sqrt(gameboard.length));

    const topEdge = [];
    const botEdge = [];
    const leftEdge = [];
    const rightEdge = [];

    // Find top edge
    for (let i = 0; i < (boardSize); i++) {
        topEdge.push(i);
    }

    // Find bot edge
    for (let i = (gameboard.length -1 ); i > (gameboard.length - boardSize - 1); i--) {
        botEdge.push(i);
    }
    
    // Find left edge 
    for (let i = 0; i <= (gameboard.length -1 ); i += boardSize) {
        leftEdge.push(i);
    }

    // Find right edge
    for (let i = (boardSize - 1); i <= (gameboard.length -1 ); i += boardSize) {
        rightEdge.push(i);
    }

    return [ topEdge, botEdge, leftEdge, rightEdge ]
}

// Set the gameboard size
function setGameboardSize(size){
    gameboardSize = size;
    gameboard = Array(gameboardSize).fill("")
}

// Retrieve the current gameboard
function getGameboard() {
    return gameboard;
}

function checkIfEmpty(indexToCheck) {
    if (gameboard[indexToCheck] === "") {
        console.log("space available");
        return true;
    } else {
        console.log("space occupied");
        return gameboard[indexToCheck];
    }
}

// Update the current gameboard
function updateGameboard(newValue, newIndex, oldIndex) {
    if (oldIndex != null) {
        gameboard[oldIndex] = "";
    }

    gameboard[newIndex] = newValue;
}

// Export Functions to main script
export { renderGameboard, getBoardEdges, setGameboardSize, getGameboard, checkIfEmpty, updateGameboard, }