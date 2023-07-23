//a module for the gameboard is fine because i only need a single instance
//and modules just create the object and instantly assign it to the variable
const gameBoard = (() => {
    const gameSpace = document.querySelector(".game-space");
    let gameItems = ["x", "x", "o", "x", "o", "x", "o", "x", "x"];
    const writeItems = () => {
        for (x = 0; x < gameItems.length; x++) {
            const gameSquare = document.createElement("div");
            gameSquare.classList.add("square");
            gameSquare.innerText = gameItems[x];
            
            gameSpace.appendChild(gameSquare);
        }
        const itemSelection = gameSpace.querySelectorAll(".square");
        itemSelection.forEach((square) => {
            square.addEventListener("click", () => {
                // need to figure out how game knows whose turn it is
                // and when it's their turn, their symbol is returned as
                // currentPlayer.symbol
                square.innerText = currentPlayer.symbol;
            })
        })
    }
    const clearBoard = () => {
        gameSpace.innerHTML = "";
    }



    return {gameItems, writeItems, clearBoard};
})()

const playerFactory = (name, symbol) => {
    return {name, symbol}
}

const player1 = playerFactory("mark", "x");
const player2 = playerFactory("stacy", "o");

gameBoard.writeItems();