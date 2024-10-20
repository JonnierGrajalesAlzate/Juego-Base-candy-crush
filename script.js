// ************************************
// ***Variable Settings Create Board***
// ************************************
const board = document.getElementById("board");
const animals = ['🐶', '🐱', '🐰', '🦊', '🐷', '🐸'];
let boardWidth;
let width;
let item;

// ******************
// ***Create Board***
// ******************
const createBoard = width => {
    if (screen.width < 350){
        board.style.width = "280px";
        boardWidth = 280;
    } else if (screen.width < 510) {
        board.style.width = "350px";
        boardWidth = 350;
    } else {
        board.style.width = "504px";
        boardWidth = 504;
    }
    let itemWidth = boardWidth / width;
    for (let row = 0; row < width; row++) {
        for (let col = 0; col < width; col++) {
            item = document.createElement("div");
            let animalRandom = animals[Math.floor(Math.random() * animals.length)]
            let inItem = document.createTextNode(animalRandom);
            board.appendChild(item);
            item.appendChild(inItem);
            board.classList.add("board")
            item.style.display = "flex";
            item.style.alignItems = "center";
            item.style.justifyContent = "center";
            item.style.width = `${itemWidth}px`;
            item.style.height = `${itemWidth}px`;
            item.style.fontSize = `${itemWidth / 1.5}px`;
            item.classList.add("item");
            item.style.position = 'absolute';
            item.style.left = `${col * itemWidth}px`;
            item.style.top = `${row * itemWidth}px`;
            item.dataset.col = col;
            item.dataset.row = row;
            item.addEventListener("click", select);
        }
        hMatch(width);
        vMatch(width);
        descendItems(width);
        fill(width);
        clearScore();
    }
}
createBoard()


