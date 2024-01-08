const gameboard = document.querySelector('.gameboard');
console.log(gameboard);

const gameboardSquares = ["", "", "", "", "X", "", "", "", ""];
console.log(gameboardSquares);

function renderGameboard() {

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
    const upMove = playerSpace - 3;
    const downMove = playerSpace + 3;

    const leftEdge = [0, 3, 6];
    const rightEdge = [2, 5, 8];
    const topEdge = [0, 1, 2];
    const botEdge = [6, 7, 8];


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