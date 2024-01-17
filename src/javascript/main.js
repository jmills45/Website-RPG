const gameboard = document.querySelector('.gameboard');

const gameboardSquares = ["", "", "", "", "", "", "", "X", "", "", "", "", "", "", "", ""];

function renderGameboard() {

    const boardSize = Math.ceil(Math.sqrt(gameboardSquares.length));
    document.documentElement.style.setProperty('--board-size', `${boardSize}`)
    
    while(gameboard.firstChild) {
        gameboard.removeChild(gameboard.firstChild);
    }

    gameboardSquares.forEach((value, index) => {
        const square = document.createElement('div');
        square.addEventListener('click', moveToSquare);
        square.classList.add('square');
        square.id = 'square'+ index;
        square.innerText = value;
        gameboard.appendChild(square);
    })
}

function checkIfCanMove(gameBoardArray) {
    const playerSpace = gameBoardArray.findIndex((value) => {
        return value === 'X';
    })

    const leftMove = playerSpace - 1;
    const rightMove = playerSpace + 1;
    const upMove = playerSpace - 4;
    const downMove = playerSpace + 4;

    const leftEdge = [0, 4, 8, 12];
    const rightEdge = [3, 7, 11, 15];
    const topEdge = [0, 1, 2, 3];
    const botEdge = [12, 13, 14, 15];


    if (!leftEdge.includes(playerSpace)) {
        const leftMoveObject = document.querySelector("#square"+`${leftMove}`);
        leftMoveObject.classList.add('validMove');
    }

    if (!rightEdge.includes(playerSpace)) {
        const rightMoveObject = document.querySelector("#square"+`${rightMove}`);
        rightMoveObject.classList.add('validMove');
    }

    if (!topEdge.includes(playerSpace)) {
        const upMoveObject = document.querySelector("#square"+`${upMove}`);
        upMoveObject.classList.add('validMove');
    }

    if (!botEdge.includes(playerSpace)) {
        const downMoveObject = document.querySelector("#square"+`${downMove}`);
        downMoveObject.classList.add('validMove');
    }
}

function moveToSquare(e) {
    const index = e.target.id.replace(/[^0-9]/g, '');
    const classes = e.target.classList;

    classes.forEach((value) => {
        if (value === 'validMove') {
            const currentSquare = gameboardSquares.findIndex((value) => {
                return value === 'X';
            })

            gameboardSquares[currentSquare] = "";

            gameboardSquares[index] = 'X';
        }
    })

    renderGameboard();
    checkIfCanMove(gameboardSquares)
}

renderGameboard();

