// Requisito 4

function fillPixelBoard(number) {
  for (let index = 0; index < number; index += 1) {
    const pixelBlank = document.createElement('div');
    pixelBlank.setAttribute('class', 'pixel');
    document.getElementById('pixel-board').appendChild(pixelBlank);
  }
}

fillPixelBoard(25);

// Requisito 7

const colorPaletteChildren = document.getElementById('color-palette').children;

function reassignClassSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < colorPaletteChildren.length; index += 1) {
  colorPaletteChildren[index].addEventListener('click', reassignClassSelected);
}

// Requisito 8

const pixelBoardSection = document.getElementById('pixel-board');

function paintPixel(event) {
  const { target } = event;
  const colorSelected = document.querySelector('.selected').id;
  target.style.backgroundColor = colorSelected;
}

for (let index = 0; index < pixelBoardSection.children.length; index += 1) {
  pixelBoardSection.children[index].addEventListener('click', paintPixel);
}

// Requisito 9

const button = document.getElementById('clear-board');
const nodeListPixel = document.querySelectorAll('.pixel');

button.onclick = () => {
  for (let index = 0; index < nodeListPixel.length; index += 1) {
    const actualPixel = nodeListPixel[index];
    actualPixel.style.backgroundColor = 'white';
  }
};
