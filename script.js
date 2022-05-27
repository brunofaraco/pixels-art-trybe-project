// Requisito 4

function fillPixelBoard(number) {
    for (let index = 0; index < number; index += 1) {
        let pixelBlank = document.createElement('div');
        pixelBlank.setAttribute('class', 'pixel');
        document.getElementById('pixel-board').appendChild(pixelBlank);
    }
}

fillPixelBoard(25);

// Requisito 7

const colorPaletteChildren = document.getElementById('color-palette').children;

for (let index = 0; index < colorPaletteChildren.length; index += 1) {
    colorPaletteChildren[index].addEventListener('click', reassignClassSelected);
}

function reassignClassSelected(event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

// Requisito 8

const pixelBoardSectionChildren = document.getElementById('pixel-board').children

for (let index = 0; index < pixelBoardSectionChildren.length; index += 1) {
    pixelBoardSectionChildren[index].addEventListener('click', paintPixel);
}

function paintPixel(event) {
    event.target.classList.add('blue');
}