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
let color = 'black';

const container = document.querySelector('.container');
createGrid(container, size, color);

const btn = document.querySelector('.gridBtn');

btn.addEventListener('click', getGridSize4);

function getGridSize() {
    size = prompt('Type grid size!');
    
    while(size > 100){
        size = prompt('Type grid size! Maximum 100');
    };
    
    removeAllChildNodes(container);
    createGrid(container, size, color);
}

const randomBtn = document.querySelector('.randomBtn');
randomBtn.addEventListener('click', randomizeColors);
console.log('Random button clicked');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomizeColors(){
    color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'; 
}
