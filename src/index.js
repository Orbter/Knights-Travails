import { createBoard } from './reletaed/create';
import './styles/main.scss';
import { clearBoard, startMove } from './reletaed/visualization';

const mainDiv = document.querySelector('.main-div');

createBoard(mainDiv);
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
  clearBoard();
});
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
  startMove();
});
