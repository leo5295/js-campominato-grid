function createGridSquare(number) {

    const currentElement = document.createElement('div');

    currentElement.classList.add('square');

    if(number % 2 == 0){
        currentElement.classList.add('even')
    }
    else{
        currentElement.classList.add('odd')
    }

    currentElement.innerText = number;

    return currentElement;
    
}

function randomInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function uniqueRandomNumber(numBlackList, min, max){

    let isValid = false;
    let randomNum;

    while(isValid == false){
        randomNum = randomInteger(min, max);

        if(numBlackList.includes(randomNum) == false){
            isValid = true
        }
    }
    return randomNum;
}

const blackList = [];
let grid = document.getElementById('grid')

for(let i=0; i<100; i++){

    let randomNumber = uniqueRandomNumber(blackList, 1,100);
    console.log(randomNumber)

    blackList.push(randomNumber);

    const currentSquare = createGridSquare(randomNumber);
    currentSquare.addEventListener('click', function(){
        this.classList.toggle('clicked')
    })

    grid.appendChild(currentSquare);
}
