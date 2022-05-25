const body = document.body

function fillPixelBoard(number) {
    for (let index = 0; index < number; index += 1) {
        let pixelBlank = document.createElement('div');
        pixelBlank.setAttribute('class', 'pixel');
        document.getElementById('pixel-board').appendChild(pixelBlank);
    }
}

fillPixelBoard(25);