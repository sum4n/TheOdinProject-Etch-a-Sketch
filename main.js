const body = document.querySelector('body');

makeGrid(16);
let colorName = "black";
makeDivBlack(colorName);

function makeGrid(gridSquares) {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add("parentDiv");
    body.appendChild(parentDiv);

    for (let i = 0; i < gridSquares; i++) {
        const childDiv = addChildDiv(parentDiv);
        for (let j = 0; j < gridSquares; j++) {
            addGrandChildDiv(childDiv);
        }
    }
}

function addChildDiv(parentDiv) {
    const childDiv = document.createElement('div');
    childDiv.classList.add("childDiv");
    parentDiv.appendChild(childDiv);
    return childDiv;
}

function addGrandChildDiv(childDiv) {
    const grandChildDiv = document.createElement('div');
    grandChildDiv.classList.add("grandChildDiv");
    childDiv.appendChild(grandChildDiv);
}

// divs get black bg on mouseover
function makeDivBlack(colorName) {
    const grandChildDivs = document.querySelectorAll('.grandChildDiv');

    grandChildDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            // div.classList.add(colorName);
            if (colorName == "black") {
                div.style.background = colorName;
            } else {
                div.style.background = getRandomColor();
            }
            
        });
    });
}

const getRandomColor = () => {
    let redColor = Math.floor(Math.random() * 256);
    let greenColor = Math.floor(Math.random() * 256);
    let blueColor = Math.floor(Math.random() * 256);
    let randomColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
    return randomColor;
}

// reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    resetColor();
    makeGrid(promptNumberOfSquares());
    makeDivBlack(colorName);
});

const resetColor = () => {
    const grandChildDivs = document.querySelectorAll('.grandChildDiv');
    grandChildDivs.forEach((div) => {
        div.classList.remove("blackBg");
    });
}

const promptNumberOfSquares = () => {
    let squareNum;
    do {
        squareNum = Number(prompt("Grid of how many squares: (1-64)", 16));
    } while (squareNum < 1 || squareNum > 64 || isNaN(squareNum));

    document.querySelector('.parentDiv').remove();

    return squareNum;
}

// RGB button
const rgbButton = document.getElementById("rgb-button");

rgbButton.addEventListener('click', () => {
    makeDivBlack("red");
});