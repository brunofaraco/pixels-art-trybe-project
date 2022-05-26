const body = document.body

function fillPixelBoard(number) {
    for (let index = 0; index < number; index += 1) {
        let pixelBlank = document.createElement('div');
        pixelBlank.setAttribute('class', 'pixel');
        document.getElementById('pixel-board').appendChild(pixelBlank);
    }
}

fillPixelBoard(25);

// let classes = document.querySelectorAll('div')[0].classList;
// console.log(classes);

// // dtl = DomTokenList
// function removeSelectedFromColor(dtl) {
//     if (dtl.contains('selected')) {
//         dtl.remove('selected');
//     };
// }

// removeSelectedFromColor(classes);

// console.log(classes);