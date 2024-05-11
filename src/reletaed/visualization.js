import knight from '../photos/chess.svg';
import wood from '../photos/wood.jpg';
import { knightTravel } from './knight';

function addKnight(div) {
  let check = false;
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('finished')) {
      check = true;
    }

    if (container.classList.contains('knight-placed')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('knight-placed');
    }
  });
  if (check) {
    clearBoard();
  }
  const divWidth = div.clientWidth;
  const divHeight = div.clientHeight;
  div.classList.add('knight-placed');

  const svg = document.createElement('img');
  svg.src = knight;
  svg.classList.add('knight');
  svg.style.width = divWidth * 0.9 + 'px';
  svg.style.height = divHeight * 0.9 + 'px';
  svg.style.zIndex = '10';
  div.appendChild(svg);
  const mainButton = document.querySelector('.clicked');
  mainButton.classList.remove('clicked');
  mainButton.style.backgroundImage = `url(${wood})`;
  mainButton.style.fontSize = '1.3rem';
}

function placeEnd(div) {
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('end-tile')) {
      container.classList.remove('end-tile');
    }
  });
  if (div.classList.contains('knight-placed')) {
    const child = div.firstChild;
    div.removeChild(child);
    div.classList.remove('knight-placed');
  }
  div.classList.add('end-tile');
  const mainButton = document.querySelector('.clicked');
  mainButton.classList.remove('clicked');
  mainButton.style.backgroundImage = `url(${wood})`;
  mainButton.style.fontSize = '1.3rem';
}

function clearBoard() {
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('end-tile')) {
      container.classList.remove('end-tile');
    }
    if (container.classList.contains('knight-placed')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('knight-placed');
    }
    if (container.classList.contains('end-move')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('end-move');
    }
    if (container.classList.contains('move')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('move');
    }
  });
  const mainButton = document.querySelector('.clicked');
  mainButton.classList.remove('clicked');
  mainButton.style.fontSize = '1.3rem';
  mainButton.style.backgroundImage = `url(${wood})`;
}

function calculateMidTile(currentTile, nextTile) {
  const Xfirst = parseInt(currentTile.dataset.rowNum, 10);
  const Yfirst = parseInt(currentTile.dataset.colNum, 10);
  const Xsecound = parseInt(nextTile.dataset.rowNum, 10);
  const YSecound = parseInt(nextTile.dataset.colNum, 10);
  let midX;
  let midY;
  if (Math.abs(Xsecound - Xfirst === 2)) {
    midX = Xsecound;
    midY = Yfirst;
  } else {
    midX = Xfirst;
    midY = YSecound;
  }
  const answer = [];
  answer.push(midX, midY);
  return answer;
}

function animateKnight(startX, startY, endX, endY) {
  return new Promise((resolve, reject) => {
    const keyframe = `@keyframes Move-${Date.now()} {
        from {
          left: ${startX}px;
          top: ${startY}px;
        }
        to {
          left: ${endX}px;
          top: ${endY}px;
        }
      }`;

    const knightPiece = document.querySelector('.knight');
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframe, styleSheet.cssRules.length);
    const animationName = `Move-${Date.now()}`;
    knightPiece.style.animation = `${animationName} 0.7s ease-in-out forwards`;

    knightPiece.addEventListener(
      'animationend',
      () => {
        knightPiece.style.animation = ''; // Clear the animation
        resolve(); // Resolve the promise when animation ends
      },
      { once: true }
    );
  });
}

async function moveKnight(currentTile, nextTile) {
  const midTile = calculateMidTile(currentTile, nextTile);
  const midDiv = document.getElementById(`${midTile[0]},${midTile[1]}`);

  // Wait for the first animation to complete before starting the second
  await animateKnight(
    currentTile.offsetLeft,
    currentTile.offsetTop,
    midDiv.offsetLeft,
    midDiv.offsetTop
  );
  await animateKnight(
    midDiv.offsetLeft,
    midDiv.offsetTop,
    nextTile.offsetLeft,
    nextTile.offsetTop
  );
}

function getTiles() {
  let startDiv = null;
  let endDiv = null;
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('end-tile')) endDiv = container;
    if (container.classList.contains('knight-placed')) startDiv = container;
  });
  return [startDiv, endDiv];
}
function calculateWay(startDiv, endDiv) {
  const startRow = parseInt(startDiv.dataset.rowNum, 10);
  const starCol = parseInt(startDiv.dataset.colNum, 10);
  const endRow = parseInt(endDiv.dataset.rowNum, 10);
  const endCol = parseInt(endDiv.dataset.colNum, 10);

  const startArray = [];
  const endArray = [];
  startArray.push(startRow, starCol);
  endArray.push(endRow, endCol);
  const answerArray = knightTravel(startArray, endArray);
  return answerArray.totalMoves;
}
function addCount(div, count, endDiv) {
  const H1 = document.createElement('h1');
  H1.textContent = count;
  if (div === endDiv) {
    div.classList.add('end-move');
  } else {
    div.classList.add('move');
  }
  div.appendChild(H1);
}
async function startMove() {
  const [startDiv, endDiv] = getTiles();
  if (startDiv && endDiv) {
    const answerArray = calculateWay(startDiv, endDiv);

    for (let index = 0; index < answerArray.length - 1; index++) {
      const currentTile = document.getElementById(
        `${answerArray[index][0]},${answerArray[index][1]}`
      );
      const nextTile = document.getElementById(
        `${answerArray[index + 1][0]},${answerArray[index + 1][1]}`
      );
      await moveKnight(currentTile, nextTile); // Wait for each move to complete before the next
      addCount(nextTile, index + 1, endDiv);
    }
    endDiv.classList.add('finished');
  } else {
    return;
  }
}

export { addKnight, placeEnd, clearBoard, startMove };
