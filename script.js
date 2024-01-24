const container = document.querySelector('#container');
const btn = document.querySelector('#buttonResize');
let gridSize = 16;

createGrid(gridSize);

btn.addEventListener('click', () => {

    do {
        gridSize = prompt("Enter square size: ", "16");
    }while (gridSize > 100);

    createGrid(gridSize);
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
            gridCell.style.backgroundColor = 'black';
            });
    
        // gridCell.addEventListener('mouseleave', () => {
        //     gridCell.style.backgroundColor = 'white';
        // });
    }
}