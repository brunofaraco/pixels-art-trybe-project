const body = document.body

function fillPixelBoard(number) {
    for (let index = 0; index < number; index += 1) {
        let pixelBlank = document.createElement('div');
        pixelBlank.setAttribute('class', 'pixel');
        document.getElementById('pixel-board').appendChild(pixelBlank);
    }
}

fillPixelBoard(25);

// let selected = document.querySelector('.selected');
const colorPaletteChildren = document.getElementById('color-palette').children;

function reassignClassSelected(event) {
    let selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
}

for (let index = 0; index < colorPaletteChildren.length; index += 1) {
   colorPaletteChildren[index].addEventListener('click', reassignClassSelected)
}