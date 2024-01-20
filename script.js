const container = document.querySelector('#container');

let input = 16;
let gridSize = input ** 2;

for (i = 0; i <= gridSize; i++){
    const gridCell = document.createElement('div');
    container.appendChild(gridCell);
    console.log("cell " + i);
}

