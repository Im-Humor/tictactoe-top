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
    }

    //called onclick, flips active status for all players
    const nextTurn = () => {
        for (x = 0; x < playerArray.length; x++) {
            console.log(`${playerArray[x].name} is set from ${playerArray[x].active} to ${!playerArray[x].active}`)
            playerArray[x].active = !playerArray[x].active;
        }
    }

    //returns the active player by finding which player has active
    //status set to true
    const whoActive = () => {
        for (x = 0; x < playerArray.length; x++) {
            if (playerArray[x].active === true) {
                return playerArray[x];
            }
        }
    }

    //initial array of game items
    let gameItems = ["", "", "", "", "", "", "", "", ""];

    //writes initial array of gameItems to the DOM
    //then, adds event listeners to each item square
    //when each square is clicked, set innertext to whoever is active player's symbol
    //and then toggle active status (i.e. next turn)
    const writeItems = () => {
        for (x = 0; x < gameItems.length; x++) {
            const gameSquare = document.createElement("div");
            gameSquare.classList.add("square");
            gameSquare.innerText = gameItems[x];
            
            gameSpace.appendChild(gameSquare);
        }
        const itemSelection = gameSpace.querySelectorAll(".square");
        itemSelection.forEach((square, index) => {
            //normally I would use an anon function in place of 'eventHandler'
            //but in order to remove it I had to name it
            square.addEventListener("click", function eventHandler(event) {
                square.innerText = whoActive().symbol;
                gameItems[index] = whoActive().symbol;
                console.log(gameItems)
                nextTurn();
                gameLogic.checkWin(gameItems);
                //make square unchangeable after initial click by removing
                //the event listener
                event.target.removeEventListener("click", eventHandler);
            })
        })
    }
    const clearBoard = () => {
        gameSpace.innerHTML = "";
    }


    //only make the things public that need to be public
    return {initActivePlayer, writeItems, gameItems};
})()

const gameLogic = (() => {
    let winner = "";
    const checkWin = (array) => {
        if (array[0] === "x" && array[1] === "x" && array[2] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[3] === "x" && array[4] === "x" && array[5] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[6] === "x" && array[7] === "x" && array[8] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[0] === "x" && array[3] === "x" && array[6] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[1] === "x" && array[4] === "x" && array[7] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[2] === "x" && array[5] === "x" && array[8] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[0] === "x" && array[4] === "x" && array[8] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[2] === "x" && array[4] === "x" && array[6] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        if (array[0] === "o" && array[1] === "o" && array[2] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[3] === "o" && array[4] === "o" && array[5] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[6] === "o" && array[7] === "o" && array[8] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[0] === "o" && array[3] === "o" && array[6] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[1] === "o" && array[4] === "o" && array[7] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[2] === "o" && array[5] === "o" && array[8] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[0] === "o" && array[4] === "o" && array[8] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
        else if (array[2] === "o" && array[4] === "o" && array[6] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return;
        }
    }
    return {checkWin};
})()


gameBoard.initActivePlayer(player1);
gameBoard.writeItems();