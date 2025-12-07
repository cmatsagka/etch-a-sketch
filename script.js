function createGrid(container, size){
    
    for (let i = 0; i < size; i++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

        for (let j = 0; j < size; j++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add('cell');
        
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);   
    };
}

const container = document.querySelector('.container');
let size = 16;

createGrid(container, size);