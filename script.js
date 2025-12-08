function createGrid(container, size){
    
    for (let i = 0; i < size; i++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

        for (let j = 0; j < size; j++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add('cell');
        
            gridRow.appendChild(gridCell);

            gridCell.addEventListener('mouseenter', (e) => {
                gridCell.setAttribute('style', 'background: black');
            })
        }
        container.appendChild(gridRow);   
    };
}

let size = 16;

const container = document.querySelector('.container');
createGrid(container, size);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    
    size = prompt('Type grid size!');
    removeAllChildNodes(container);
    createGrid(container, size);
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}