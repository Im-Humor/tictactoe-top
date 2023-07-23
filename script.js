const playerFactory = (name, symbol, active) => {
    return {name, symbol, active}
}

const player1 = playerFactory("mark", "x", false);
const player2 = playerFactory("stacy", "o", false);
const playerArray = [player1, player2];

const gameBoard = (() => {
    const gameSpace = document.querySelector(".game-space");

    const initActivePlayer = (player) => {
        player.active = true;
        console.log("Initializing active player");
    }

    const nextTurn = () => {
        for (x = 0; x < playerArray.length; x++) {
            console.log(`${playerArray[x].name} is set from ${playerArray[x].active} to ${!playerArray[x].active}`)
            playerArray[x].active = !playerArray[x].active;
        }
        console.log("Next turn");
    }

    const whoActive = () => {
        for (x = 0; x < playerArray.length; x++) {
            if (playerArray[x].active === true) {
                console.log(`${playerArray[x].name} is set to active`);
                return playerArray[x];
            }
        }
    }

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
                square.innerText = whoActive().symbol;
                nextTurn();
            })
        })
    }
    const clearBoard = () => {
        gameSpace.innerHTML = "";
    }



    return {initActivePlayer, nextTurn, whoActive, gameItems, writeItems, clearBoard};
})()



gameBoard.initActivePlayer(player1);
gameBoard.writeItems();