import { renderGameboard, getBoardEdges, setGameboardSize, getGameboard, checkIfEmpty, updateGameboard } from './map';
import { checkIfCanMove, moveToSquare } from './move';
import { createTerrain } from './terrain';

setGameboardSize(36);
updateGameboard("player", 9)
updateGameboard(createTerrain('forest', 1, 10), 10);
updateGameboard(createTerrain('rock', 2, 18), 18);
updateGameboard(createTerrain('town', 3, 22), 22);
renderGameboard();

checkIfCanMove();

