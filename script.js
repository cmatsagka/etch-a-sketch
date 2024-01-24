const container = document.querySelector('#container');
const btnResize = document.querySelector('.btnResize');
const btnBlackColor = document.querySelector('.btnBlackColor');
const btnRandomColor = document.querySelector('.btnRandomColor');

let gridSize = 16;
let color = 'black';
createGrid(gridSize);

btnResize.addEventListener('click', () => {
    do {
        gridSize = prompt("Enter square size: ", "16");
    }while (gridSize > 100);
    
    createGrid(gridSize);
});

btnBlackColor.addEventListener('click', () => {
    color = 'black';
});

btnRandomColor.addEventListener('click', () => {
    color = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
    console.log(color);
});

function createGrid(gridSize) {
    
    const existingCells = document.querySelectorAll('.cell');
    existingCells.forEach(cell => {
        cell.remove();
    });

    for (i = 0; i < gridSize ** 2; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        gridCell.style.flexBasis = 100 / gridSize + "%";
        
        console.log(gridCell.style.flexBasis);
        container.appendChild(gridCell);
    
        gridCell.addEventListener('mouseenter', () => {
            gridCell.style.backgroundColor = color;
            });
    }
}