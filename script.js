// Requisito 4

const PIXEL_BOARD = document.getElementById('pixel-board');

function fillPixelBoard(boardSide) {
  PIXEL_BOARD.style.width = `${42 * boardSide}px`;
  PIXEL_BOARD.style.height = `${42 * boardSide}px`;

  const boardSize = boardSide ** 2;

  for (let index = 0; index < boardSize; index += 1) {
    const pixelBlank = document.createElement('div');

    pixelBlank.setAttribute('class', 'pixel');

    PIXEL_BOARD.appendChild(pixelBlank);
  }
}

fillPixelBoard(5);

// Requisito 7

const COLOR_PALETTE_CHILDREN = document.getElementById('color-palette').children;

function reassignClassSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < COLOR_PALETTE_CHILDREN.length; index += 1) {
  COLOR_PALETTE_CHILDREN[index].addEventListener('click', reassignClassSelected);
}

// Requisito 8

const PIXEL_BOARD_DIV = PIXEL_BOARD;

function paintPixel(event) {
  const { target } = event;
  const colorSelected = document.querySelector('.selected').id;
  target.style.backgroundColor = colorSelected;
}

for (let index = 0; index < PIXEL_BOARD_DIV.children.length; index += 1) {
  PIXEL_BOARD_DIV.children[index].addEventListener('click', paintPixel);
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

// Requisito 10

