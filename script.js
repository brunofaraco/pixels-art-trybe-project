// Get consts that will be used
const PIXEL_BOARD = document.getElementById('pixel-board');
const CLEAR_BOARD_BTN = document.getElementById('clear-board');
const COLOR_PALETTE_CHILDREN = document.getElementById('color-palette').children;
const VQV_BTN = document.getElementById('generate-board');
const BOARD_SIZE_INPUT = document.getElementById('board-size');
const PIXELS_DIVS = document.getElementsByClassName('pixel');

// Creation of the functions that will be used
function paintPixel(event) {
  const { target } = event;
  const colorSelected = document.querySelector('.selected').style.backgroundColor;
  target.style.backgroundColor = colorSelected;
}

function fillPixelBoard(boardSide) {
  PIXEL_BOARD.style.width = `${42 * boardSide}px`;
  PIXEL_BOARD.style.height = `${42 * boardSide}px`;

  const boardSize = boardSide ** 2;

  for (let index = 0; index < boardSize; index += 1) {
    const pixelBlank = document.createElement('div');

    pixelBlank.setAttribute('class', 'pixel');
    pixelBlank.addEventListener('click', paintPixel);

    PIXEL_BOARD.appendChild(pixelBlank);
  }
}

function reassignClassSelected(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

function createNewPixelBoard(newSideValue) {
  while (PIXEL_BOARD.firstChild) {
    PIXEL_BOARD.removeChild(PIXEL_BOARD.firstChild);
  }

  fillPixelBoard(newSideValue);
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256); // componente vermelho
  const g = Math.floor(Math.random() * 256); // componente verde
  const b = Math.floor(Math.random() * 256); // componente azul

  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

function randomizePalette() {
  COLOR_PALETTE_CHILDREN[1].style.backgroundColor = generateRandomColor();
  COLOR_PALETTE_CHILDREN[2].style.backgroundColor = generateRandomColor();
  COLOR_PALETTE_CHILDREN[3].style.backgroundColor = generateRandomColor();
}

function addListeners() {
  for (let index = 0; index < COLOR_PALETTE_CHILDREN.length; index += 1) {
    COLOR_PALETTE_CHILDREN[index].addEventListener('click', reassignClassSelected);
  }
}

function handleClearBoardBtn() {
  const pixelBoardArr = [...PIXELS_DIVS];

  pixelBoardArr.forEach((_, index) => {
    pixelBoardArr[index].style.backgroundColor = 'white';
  });
}

function generateNewBoard(event) {
  event.preventDefault();

  const { value } = BOARD_SIZE_INPUT;

  if (!value) return alert('Board inválido!');
  if (value <= 5) return createNewPixelBoard(5);
  if (value >= 50) return createNewPixelBoard(50);

  return createNewPixelBoard(value);
}

// Assign function to buttons onClick
CLEAR_BOARD_BTN.onclick = handleClearBoardBtn;
VQV_BTN.onclick = generateNewBoard;

// Call initial functions
fillPixelBoard(5);
randomizePalette();
addListeners();
