const playerFactory = (name, symbol, active) => {
    return {name, symbol, active};
};

// create logic for name input submit buttons/forms

//player array used to help search through players
//helpful to find and flip active status
const playerArray = [];

const name1Button = document.querySelector("#name1-button");
const player1Output = document.querySelector(".player1-output");

const p1Event = () => {
    const name1Content = document.querySelector("#name1");
    player1Output.innerHTML = `<p>Player 1 is ${name1Content.value}</p>`;
    const player1 = playerFactory(`${name1Content.value}`, "x", true);
    playerArray.push(player1);
    document.querySelector(".player1-input").innerHTML = "";
};

name1Button.addEventListener("click", p1Event)

const name2Button = document.querySelector("#name2-button");
const player2Output = document.querySelector(".player2-output");

const p2Event = () => {
    const name2Content = document.querySelector("#name2");
    player2Output.innerHTML = `<p>Player 2 is ${name2Content.value}</p>`;
    const player2 = playerFactory(`${name2Content.value}`, "o", false);
    playerArray.push(player2);
    document.querySelector(".player2-input").innerHTML = "";
};

name2Button.addEventListener("click", p2Event);


//create gameBoard module
const gameBoard = (() => {
    const gameSpace = document.querySelector(".game-space");

    const initActivePlayer = (player) => {
        player.active = true;
    };

    //called onclick, flips active status for all players
    const nextTurn = () => {
        for (x = 0; x < playerArray.length; x++) {
            playerArray[x].active = !playerArray[x].active;
        };
    };

    //returns the active player by finding which player has active
    //status set to true
    const whoActive = () => {
        for (x = 0; x < playerArray.length; x++) {
            if (playerArray[x].active === true) {
                return playerArray[x];
            };
        };
    };

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
        //I only know 'index' is available to call within the forEach method's callback
        //because the documentation states so lol
        itemSelection.forEach((square, index) => {
            //normally I would use an anon function in place of 'eventHandler'
            //but in order to remove it I had to name it
            square.addEventListener("click", function eventHandler(event) {
                console.log(gameLogic.checkWin(gameItems))
                //for some reason if I take out either of these if statements,
                //the game doesn't work as intended
                if (gameLogic.checkWin(gameItems) === 1) {
                    event.target.removeEventListener("click", eventHandler);
                    return;
                }
                square.innerText = whoActive().symbol;
                gameItems[index] = whoActive().symbol;

                if (gameLogic.checkWin(gameItems) === 1) {
                    event.target.removeEventListener("click", eventHandler);
                    gameLogic.finalizeWin();
                    return;
                }
                nextTurn();

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
    return {gameSpace, initActivePlayer, writeItems, gameItems};
})()

const gameLogic = (() => {
    let winner = "";
    const checkWin = (array) => {
        //it took me 10 years to figure out these next to line had to go here
        //why can't they go right under gameLogic's declaration?
        const player1 = playerArray[0];
        const player2 = playerArray[1];
        if (array[0] === "x" && array[1] === "x" && array[2] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[3] === "x" && array[4] === "x" && array[5] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[6] === "x" && array[7] === "x" && array[8] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[0] === "x" && array[3] === "x" && array[6] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[1] === "x" && array[4] === "x" && array[7] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[2] === "x" && array[5] === "x" && array[8] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[0] === "x" && array[4] === "x" && array[8] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[2] === "x" && array[4] === "x" && array[6] === "x"){
            winner = player1.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        if (array[0] === "o" && array[1] === "o" && array[2] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[3] === "o" && array[4] === "o" && array[5] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[6] === "o" && array[7] === "o" && array[8] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[0] === "o" && array[3] === "o" && array[6] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[1] === "o" && array[4] === "o" && array[7] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[2] === "o" && array[5] === "o" && array[8] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[0] === "o" && array[4] === "o" && array[8] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
        else if (array[2] === "o" && array[4] === "o" && array[6] === "o"){
            winner = player2.name;
            console.log(`Winner is ${winner}`);
            return 1;
        }
    }
    const finalizeWin = () => {
        const winnerName = document.querySelector(".winner-name");
        for (x=0; x < playerArray.length; x++) {
            if (playerArray[x].active === true) {
                winnerName.innerText = playerArray[x].name;
            }
        }

    }
    return {checkWin, finalizeWin};
})()


gameBoard.writeItems();