const container = document.querySelector('#container');

let input = prompt("Enter square size: ", "4");
let gridSize = input ** 2;

for (i = 0; i < gridSize; i++){
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');

    container.appendChild(gridCell);
    gridCell.textContent = "cell" + " " + i;
}

