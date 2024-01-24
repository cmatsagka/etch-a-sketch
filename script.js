let gridSize = 32;

const btn = document.querySelector('#buttonResize');
btn.addEventListener('click', () => {
    gridSize = prompt("Enter square size: ", " ");
});

const container = document.querySelector('#container');

for (i = 0; i < gridSize ** 2; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('cell');
    gridCell.style.flexBasis = 100 / gridSize + "%";
    
    console.log(gridCell.style.flexBasis);
    container.appendChild(gridCell);

    gridCell.addEventListener('mouseenter', () => {
        gridCell.style.backgroundColor = 'black';
        });

    gridCell.addEventListener('mouseleave', () => {
        gridCell.style.backgroundColor = 'white';
    });
}

