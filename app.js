const color = "black";

const grid = document.querySelector(".grid");

const slider = document.querySelector(".slider");
let output = document.querySelector(".slider-value");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    changeGridSize();
}

createGrid(slider.value);

function createGrid(gridSize) {
    grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);`
                        +`grid-template-rows: repeat(${gridSize}, 1fr)`;

    const numberOfCells = gridSize ** 2;
    
    for (let i = 0; i < numberOfCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("cell");
        grid.appendChild(gridCell);

        // Change color of a cell when hovered
        gridCell.addEventListener("mouseover", colorCell);
    }
}

function colorCell() {
    this.style.backgroundColor = color;
}

function changeGridSize() {
    resetGrid();
    createGrid(slider.value);
}

function resetGrid() {
    grid.innerHTML = "";
}
