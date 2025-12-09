function createGrid(container, size, color){
    
    for (let i = 0; i < size; i++){
        let gridRow = document.createElement('div');
        gridRow.classList.add('row');

        for (let j = 0; j < size; j++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add('cell');
        
            gridRow.appendChild(gridCell);

            gridCell.addEventListener('mouseenter', (e) => {
                gridCell.style.backgroundColor = color;
                // gridCell.setAttribute('style', 'background: color');
            })
        }
        container.appendChild(gridRow);   
    };
}

let size = 16;
const color = 'black';

const container = document.querySelector('.container');
const btn = document.querySelector('button');
const randomBtn = document.querySelector('.randomBtn');

createGrid(container, size, color);

randomBtn.addEventListener('click, randomizeColors');

btn.addEventListener('click', () => {
    
    size = prompt('Type grid size!');
    
    while(size > 100){
        size = prompt('Type grid size! Maximum 100');
    };
    
    removeAllChildNodes(container);
    createGrid(container, size, color);
    
});

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomizeColors(){
    color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; 
}
