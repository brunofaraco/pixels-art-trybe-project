const body = document.body

function fillPixelBoard(number) {
    for (let index = 0; index < number; index += 1) {
        let pixelBlank = document.createElement('div');
        pixelBlank.setAttribute('class', 'pixel');
        document.getElementById('pixel-board').appendChild(pixelBlank);
    }
}

// let classes = document.querySelectorAll('div')[0].classList;
// console.log(classes);

// function changeColor(array) {
//     if (array.contains('selected')) {
//         array.remove('selected');
//     };
// }

fillPixelBoard(25);
// changeColor(classes);

// console.log(classes);