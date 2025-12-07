function createGrid(container, size){
    
    for (let i = 0; i < size; i++){
        let gridCell = document.createElement('div');
        gridCell.classList.add('cell');
        container.appendChild(gridCell);
    }
}

const container = document.querySelector('.container');
let size = 16;

createGrid(container, size);