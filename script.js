const container = document.querySelector('#container');

let input = prompt("Enter square size: ", "4");
let gridSize = input ** 2;

for (i = 0; i < gridSize; i++){
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    console.log("cell" + i);
    container.appendChild(gridCell);
    gridCell.textContent = "cell" + " " + i;

    gridCell.addEventListener('mouseenter', () => {
        gridCell.style.backgroundColor = 'black';
    });
}
