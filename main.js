const body = document.querySelector('body');

const parentDiv = document.createElement('div');
parentDiv.classList.add("parentDiv");

let idCounter = 0;

for (let i = 0; i < 16; i++) {
    const childDiv = addChildDiv();
    for (let j = 0; j < 16; j++) {
        idCounter += 1;
        addGrandChildDiv(childDiv, j, idCounter);
        // grandChildDiv.textContent = j;
    }
}

body.appendChild(parentDiv);

function addChildDiv() {
    const childDiv = document.createElement('div');
    childDiv.classList.add("childDiv");
    // childDiv.textContent = i;
    parentDiv.appendChild(childDiv);
    return childDiv;
}

function addGrandChildDiv(childDiv, j, idCounter) {
    const grandChildDiv = document.createElement('div');
    grandChildDiv.classList.add("grandChildDiv");
    grandChildDiv.textContent = idCounter;
    // created div gets id.
    grandChildDiv.id = idCounter;
    childDiv.appendChild(grandChildDiv);
}


const grandChildDivs = document.querySelectorAll('.grandChildDiv');

grandChildDivs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.classList.add("blackBg");
    });
});