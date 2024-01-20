const container = document.querySelector('#container');

let input = prompt("Enter square size: ", "4");
let gridSize = input ** 2;

let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;
let cellWidth = containerWidth/input;
let cellHeight = containerHeight/input;

for (i = 0; i < gridSize; i++){
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');

    container.appendChild(gridCell);
    gridCell.textContent = "cell" + " " + i;

    gridCell.addEventListener('mouseenter', () => {
        gridCell.style.backgroundColor = 'black';
    });
    gridCell.addEventListener('mouseleave', () => {
        gridCell.style.backgroundColor = 'white';
    });

    gridCell.style.width = cellWidth;
    gridCell.style.height = cellHeight;

    console.log(cellWidth, cellHeight);
}

