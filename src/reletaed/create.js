import wood from '../photos/wood.jpg';
export { createBoard };

function buttonsBackground() {
  const buttons = document.querySelectorAll('.main-buttons');
  let lastClicked = null; // Keep track of the last clicked button

  buttons.forEach((button) => {
    button.style.backgroundImage = `url(${wood})`;
    button.addEventListener('click', function () {
      // Check if there's a previously clicked button and reset its background
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
  let counter = 0;
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const div = document.createElement('div');

      if (color) {
        div.classList.add('white');
      } else {
        div.classList.add('black');
      }
      div.classList.add('tile');
      div.id = counter;
      mainDiv.append(div);
      counter++;
      color = !color;
    }
    color = !color;
  }

  buttonsBackground(); // to add a background for the buttons
}
