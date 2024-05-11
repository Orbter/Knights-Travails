import wood from '../photos/wood.jpg';
import { addKnight, placeEnd } from './visualization';
export { createBoard };

function buttonsBackground() {
  const buttons = document.querySelectorAll('.main-buttons');
  let lastClicked = null; // Keep track of the last clicked button

  buttons.forEach((button) => {
    button.style.backgroundImage = `url(${wood})`;
    button.addEventListener('click', function () {
      if (lastClicked && lastClicked !== this) {
        lastClicked.style.backgroundImage = `url(${wood})`;
      }
      buttons.forEach((element) => {
        element.style.fontSize = '1.3rem';
        element.classList.remove('clicked');
      });

      // Set the background image and overlay for the currently clicked button
      this.style.backgroundImage = `linear-gradient(rgba(86, 88, 90, 0.282), rgba(86, 88, 90, 0.282)), url(${wood})`;
      this.style.backgroundSize = 'cover';
      this.style.backgroundPosition = 'center';
      this.style.fontSize = '1.5rem';
      this.classList.add('clicked');
      // Update the lastClicked to the current button
      lastClicked = this;
    });
  });
}

function createBoard(mainDiv) {
  let color = true;
  for (let row = 7; row > -1; row--) {
    for (let col = 0; col < 8; col++) {
      const div = document.createElement('div');
      div.addEventListener('click', () => {
        const placeButton = document.getElementById('place-button');
        const selectButton = document.getElementById('select-button');

        if (placeButton.classList.contains('clicked')) {
          addKnight(div);
        }
        if (selectButton.classList.contains('clicked')) {
          placeEnd(div);
        }
      });
      if (color) {
        div.classList.add('white');
      } else {
        div.classList.add('black');
      }
      div.classList.add('tile');
      div.id = `${col},${row}`;
      div.dataset.rowNum = col;
      div.dataset.colNum = row;
      mainDiv.append(div);
      color = !color;
    }
    color = !color;
  }

  buttonsBackground(); // to add a background for the buttons
}
