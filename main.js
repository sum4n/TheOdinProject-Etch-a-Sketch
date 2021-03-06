const body = document.querySelector('body');

let squareNum = 16;
makeGrid(squareNum);
let colorName = "black";

function makeGrid(number) {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add("parentDiv");
    body.appendChild(parentDiv);

    for (let i = 0; i < number; i++) {
        const childDiv = addChildDiv(parentDiv);
        for (let j = 0; j < number; j++) {
            addGrandChildDiv(childDiv);
        }
    }
    triggerMouseOver();
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

function triggerMouseOver() {
    const grandChildDivs = document.querySelectorAll('.grandChildDiv');

    grandChildDivs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if (!(div.style.backgroundColor) || div.style.backgroundColor == "black") {
                if (colorName == "black") {
                div.style.backgroundColor = colorName;
                // console.log(div.style.backgroundColor);
                } else if (colorName == "random") {
                div.style.backgroundColor = getRandomColor();
                // console.log(div.style.backgroundColor);
                } 
            } else {
                // console.log(div.style.backgroundColor);
                // console.log(darkenRGB(div.style.backgroundColor));
                div.style.backgroundColor = darkenRGB(div.style.backgroundColor);
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

const darkenRGB = (rgbValue) => {
    let rgbValueList = rgbValue.slice(4, -1).split(",");
    let red = rgbValueList[0] ;
    let green = rgbValueList[1];
    let blue = rgbValueList[2];
    
    red = addBlack(red);
    green = addBlack(green);
    blue = addBlack(blue);

    let values = "rgb(" + red + ", " + green + ", " + blue + ")";
    return (values);
}

const addBlack = (color) => {
    // This function keep decreasing colors by 10% of 256 
    // till it becomes completely black. rgb(0, 0, 0).
    // 25.6 is 10% of 256 which is a rgb value's highest number.
    if (color - 25.6 < 0) {
        color = 0;
    } else {
        color = color - 25.6;
    }
    return Math.floor(color);
}

// reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    // makeGrid(promptNumberOfSquares());
    let numGrid = promptNumberOfSquares();
    if (!(numGrid === "cancled")) {
        makeGrid(numGrid);
        document.querySelector('.parentDiv').remove();
        colorName = "black";
    }
    
});

const promptNumberOfSquares = () => {
    do {
        let previousNum = squareNum;
        squareNum = Number(prompt("Grid of square divs: (1-100)", squareNum));
        // console.log(squareNum);
        if (squareNum === 0) {
            // On prompt cancel populates default prompt value with previous value instead of 0.
            squareNum = previousNum;
            
            return "cancled";
        }
    } while (squareNum < 1 || squareNum > 100 || isNaN(squareNum));

    return squareNum;
}

// RGB button
const rgbButton = document.getElementById("rgb-button");

rgbButton.addEventListener('click', () => {
    colorName = "random";
});