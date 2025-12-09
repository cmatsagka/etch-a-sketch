
let size = 16;
let opacity = 100;
let count = 0;

let r = 0;
let g = 0;
let b = 0;
let color = 'rgb(' + r + ',' + g + ',' + b + ', ' + opacity + '% )';
let isRandomClicked = 0;

const container = document.querySelector('.container');
const btn = document.querySelector('.gridBtn');
const randomBtn = document.querySelector('.randomBtn');
const progDark = document.querySelector('.progDark');
createGrid(container, size, color);

btn.addEventListener('click', getGridSize);
randomBtn.addEventListener('click', randomizeColors);
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
    r =  (Math.floor(Math.random() * 256));
    g =  (Math.floor(Math.random() * 256));
    b =  (Math.floor(Math.random() * 256));
    color = 'rgb(' + r + ',' + g + ',' + b + ', ' + opacity + '% )'; 
    removeAllChildNodes(container);
    createGrid(container, size, color);
    isRandomClicked = 1;
}

function getDarkerColor(){

    if (count == 0){
        opacity = 10;
        count++;
    }else if (count < 10) {
        opacity += 10;
        count++;
    }

    if (!isRandomClicked){
        color = 'rgb(0, 0, 0, ' + opacity + '% )';
    }else{
        color = 'rgb(' + r + ',' + g + ',' + b + ', ' + opacity + '% )';
    }

    removeAllChildNodes(container);
    createGrid(container, size, color);
}
