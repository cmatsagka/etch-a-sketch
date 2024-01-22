let gridSize = prompt("Enter square size: ", "4");

const container = document.querySelector('#container');
let count = 0;

for (i = 0; i < gridSize; i++){

    const gridRow = document.createElement('div');
    gridRow.classList.add('row');
    container.appendChild(gridRow);

    for (j = 0; j < gridSize; j++){
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('column');
    
        gridRow.appendChild(gridColumn);
        gridColumn.textContent = "cell" + " " + count;
    
        gridColumn.addEventListener('mouseenter', () => {
            gridColumn.style.backgroundColor = 'black';
        });
        gridColumn.addEventListener('mouseleave', () => {
            gridColumn.style.backgroundColor = 'white';
        });
        count++;
    }   
}

