import knight from '../photos/chess.svg';

function addKnight(div) {
  const tile = document.querySelectorAll('.tile');
  tile.forEach((container) => {
    if (container.hasChildNodes()) {
      const child = container.firstChild;
      container.removeChild(child);
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
export { addKnight };
