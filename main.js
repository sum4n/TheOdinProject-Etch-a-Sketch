const body = document.querySelector('body');

makeGrid(16);
makeDivBlack();

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
function makeDivBlack() {
    const grandChildDivs = document.querySelectorAll('.grandChildDiv');

    grandChildDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.classList.add("blackBg");
        });
    });
}

// reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    resetColor();
    // document.querySelector('.parentDiv').remove();
    makeGrid(promptNumberOfSquares());
    makeDivBlack();
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
        squareNum = Number(prompt("Grid of how many squares: (1-64)"));
        console.log(squareNum);
    } while (squareNum < 1 || squareNum > 64 || isNaN(squareNum));

    document.querySelector('.parentDiv').remove();

    return squareNum;
}