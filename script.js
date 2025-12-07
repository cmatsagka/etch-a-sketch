function createGrid(container, size){
    
    for (let i = 0; i < size; i++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

        container.appendChild(gridRow);
    }
}

const container = document.querySelector('.container');
let size = 16;

createGrid(container, size);