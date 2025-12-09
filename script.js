
let size = 16;
let opacity = 100;
let color = 'rgb(0, 0, 0, ' + opacity + '% )';
let count = 1;

const container = document.querySelector('.container');
createGrid(container, size, color);

const btn = document.querySelector('.gridBtn');
btn.addEventListener('click', getGridSize);

const randomBtn = document.querySelector('.randomBtn');
randomBtn.addEventListener('click', randomizeColors);

const progDark = document.querySelector('.progDark');
progDark.addEventListener('click', getDarkerColor);

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
            })
        }
        container.appendChild(gridRow);   
    };
}

function getGridSize() {
    size = prompt('Type grid size!');
    
    while(size > 100){
        size = prompt('Type grid size! Maximum 100');
    };
    
    removeAllChildNodes(container);
    createGrid(container, size, color);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomizeColors(){
    color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ', ' + opacity + '% )'; 
    removeAllChildNodes(container);
    createGrid(container, size, color);
}

function getDarkerColor(){

    if (count == 0){
        opacity = 10;
    }else if (count < 10) {
        opacity += 10;
        count++;
    }
}
