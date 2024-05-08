import knight from '../photos/chess.svg';
import wood from '../photos/wood.jpg';

function addKnight(div) {
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.classList.contains('knight-placed')) {
      const child = container.firstChild;
      container.removeChild(child);
      container.classList.remove('knight-placed');
    }
  });

  const divWidth = div.clientWidth;
  const divHeight = div.clientHeight;
  div.classList.add('knight-placed');

  const svg = document.createElement('img');
  svg.src = knight;
  svg.style.width = divWidth * 0.9 + 'px';
  svg.style.height = divHeight * 0.9 + 'px';
  svg.style.zIndex = '10';
  div.appendChild(svg);
  const mainButton = document.querySelector('.clicked');
  mainButton.classList.remove('clicked');
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
  });
  const mainButton = document.querySelector('.clicked');
  mainButton.classList.remove('clicked');
  mainButton.style.fontSize = '1.3rem';
  mainButton.style.backgroundImage = `url(${wood})`;
}

export { addKnight, placeEnd, clearBoard };
