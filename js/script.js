function createGridSquare() {

    const currentElement = document.createElement('div');

    currentElement.classList.add('square');

    return currentElement;
    
}

let grid = document.getElementById('grid')

for(let i=0; i<100; i++){

    const currentSquare = createGridSquare();

    currentSquare.addEventListener('click', function(){
        this.classList.add('clicked')
    })

    grid.appendChild(currentSquare);
}
