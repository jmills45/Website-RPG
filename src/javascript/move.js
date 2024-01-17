import { renderGameboard, updateGameboard, getGameboard, getBoardEdges, checkIfEmpty } from './map'

function checkIfCanMove() {

    const gameBoardArray = getGameboard();

    const playerSpace = gameBoardArray.findIndex((value) => {
        return value === 'player';
    })

    const boardSize = Math.ceil(Math.sqrt(gameBoardArray.length));

    const leftMove = playerSpace - 1;
    const rightMove = playerSpace + 1;
    const upMove = playerSpace - boardSize;
    const downMove = playerSpace + boardSize;

    const [topEdge, botEdge, leftEdge, rightEdge] = getBoardEdges();

    // Determine if moving left one space is a valid move - yellow for valid - red for invalid
    if (!leftEdge.includes(playerSpace) && checkIfEmpty(leftMove) === true) {
        const leftMoveObject = document.querySelector("#square"+`${leftMove}`);
        leftMoveObject.classList.add('validMove');
        leftMoveObject.addEventListener('click', moveToSquare);

    } else if (!leftEdge.includes(playerSpace) && checkIfEmpty(leftMove) != true) {
        const leftMoveObject = document.querySelector("#square"+`${leftMove}`);
        leftMoveObject.classList.add('invalidMove');
    }

    // Determine if moving right one space is a valid move - yellow for valid - red for invalid
    if (!rightEdge.includes(playerSpace) && checkIfEmpty(rightMove) === true ) {
        const rightMoveObject = document.querySelector("#square"+`${rightMove}`);
        rightMoveObject.classList.add('validMove');
        rightMoveObject.addEventListener('click', moveToSquare);

    } else if (!rightEdge.includes(playerSpace) && checkIfEmpty(rightMove) != true) {
        const rightMoveObject = document.querySelector("#square"+`${rightMove}`);
        rightMoveObject.classList.add('invalidMove');
    }

    // Determine if moving up one space is a valid move - yellow for valid - red for invalid
    if (!topEdge.includes(playerSpace) && checkIfEmpty(upMove) === true) {
        const upMoveObject = document.querySelector("#square"+`${upMove}`);
        upMoveObject.classList.add('validMove');
        upMoveObject.addEventListener('click', moveToSquare);

    } else if (!topEdge.includes(playerSpace) && checkIfEmpty(upMove) != true) {
        const upMoveObject = document.querySelector("#square"+`${upMove}`);
        upMoveObject.classList.add('invalidMove');
    }

    // Determine if moving down one space is a valid move - yellow for valid - red for invalid
    if (!botEdge.includes(playerSpace) && checkIfEmpty(downMove) === true) {
        const downMoveObject = document.querySelector("#square"+`${downMove}`);
        downMoveObject.classList.add('validMove');
        downMoveObject.addEventListener('click', moveToSquare);

    } else if (!botEdge.includes(playerSpace) && checkIfEmpty(downMove) != true) {
        const downMoveObject = document.querySelector("#square"+`${downMove}`);
        downMoveObject.classList.add('invalidMove');
    }
}

function moveToSquare(e) {
    const index = e.target.id.replace(/[^0-9]/g, '');
    const classes = e.target.classList;

    const gameBoardArray = getGameboard();

   classes.forEach((value) => {
       if (value === 'validMove') {
          const currentSquare = gameBoardArray.findIndex((value) => {
               return value === 'player';
        })

        updateGameboard('player', index, currentSquare);
     }
  })

  renderGameboard();
  checkIfCanMove()
}

export { checkIfCanMove, moveToSquare }