// const grid = document.querySelector('.grid');
// const startBtn = document.querySelector('.start-btn');


// const width = 10;
// const numCells = width * width;
// let currentSnake = [2,1,0]
// let snakeColor = Math.floor


// grid.style.width = `${width * 10 * 2}px`;
// grid.style.height = `${width * 10 * 2}px`;


// for (let i = 0; i < width * width; i++) {
//     const cell = document.createElement('div');
//     cell.style.width = `${width * 2}px`;
//     cell.style.height = `${width * 2}px`;
//     grid.appendChild(cell);

// }

// const cells = document.querySelector('.grid div');


// new game copy  
const playBoard = document.querySelector('.play-board');



let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;

const changeFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    if (e.key === 'ArrowUp') {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.key === 'ArrowDown') {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.key === 'ArrowLeft') {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.key === 'ArrowRight') {
        velocityX = 1;
        velocityY = 0;
    }
    // initGame();


}


const initGame = () => {
    let htmlMark = `<div class = "food" style = "grid-area: ${foodY} / ${foodX}"></div>`;
    if(snakeX ===foodX && snakeY === foodY){
        changeFoodPosition();
        snakeBody.push([foodX,foodY])
    }
    snakeX += velocityX;
    snakeY += velocityY;
    htmlMark += `<div class = "head" style = "grid-area: ${snakeY} / ${snakeX}"></div>`;
    playBoard.innerHTML = htmlMark;
}
changeFoodPosition();
setInterval(initGame, 125);
 // initGame();


document.addEventListener('keydown', changeDirection)


// new game copy  

