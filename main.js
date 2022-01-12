const body = document.querySelector('body');

const parentDiv = document.createElement('div');
parentDiv.classList.add("parentDiv");

for (let i = 0; i < 16; i++) {
    const childDiv = addChildDiv();
    for (let j = 0; j < 16; j++) {
        addGrandChildDiv(childDiv, j);
        // grandChildDiv.textContent = j;
    }
}

body.appendChild(parentDiv);

function addChildDiv() {
    const childDiv = document.createElement('div');
    childDiv.classList.add("childDiv")
    // childDiv.textContent = i;
    parentDiv.appendChild(childDiv);
    return childDiv;
}

function addGrandChildDiv(childDiv, j) {
    const grandChildDiv = document.createElement('div');
    grandChildDiv.classList.add("grandChildDiv");
    grandChildDiv.textContent = j + 1;
    childDiv.appendChild(grandChildDiv);
}