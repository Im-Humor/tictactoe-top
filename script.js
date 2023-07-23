const playerFactory = (name, symbol, active) => {
    return {name, symbol, active}
}

const player1 = playerFactory("mark", "x", false);
const player2 = playerFactory("stacy", "o", false);

//player array used to help search through players
//helpful to find and flip active status
const playerArray = [player1, player2];

//create gameBoard module
const gameBoard = (() => {
    const gameSpace = document.querySelector(".game-space");

    const initActivePlayer = (player) => {
        player.active = true;
        console.log("Initializing active player");
    }

    //called onclick, flips active status for all players
    const nextTurn = () => {
        for (x = 0; x < playerArray.length; x++) {
            console.log(`${playerArray[x].name} is set from ${playerArray[x].active} to ${!playerArray[x].active}`)
            playerArray[x].active = !playerArray[x].active;
        }
        console.log("Next turn");
    }

    //returns the active player by finding which player has active
    //status set to true
    const whoActive = () => {
        for (x = 0; x < playerArray.length; x++) {
            if (playerArray[x].active === true) {
                console.log(`${playerArray[x].name} is set to active`);
                return playerArray[x];
            }
        }
    }

    //initial array of game items
    let gameItems = ["", "", "", "", "", "", "", "", ""];

    //writes initial array of gameItems to the DOM
    //then, adds event listeners to each item square
    //when each square is clicked, set innertext to whoever is active player
    //and then toggle active status (i.e. next turn)
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