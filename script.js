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
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

// Requisito 8

const pixelBoardSection = document.getElementById('pixel-board');
// console.log(pixelBoardSection.children[2]);
// const colorSelected = 'blue'
// pixelBoardSection.children[2].style.backgroundColor = colorSelected;

for (let index = 0; index < pixelBoardSection.children.length; index += 1) {
    pixelBoardSection.children[index].addEventListener('click', paintPixel);
}

function paintPixel(event) {
    const colorSelected = document.querySelector('.selected').id;
    event.target.style.backgroundColor = colorSelected;
}