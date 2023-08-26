let playerSymbol = "X"
let gameEnded = false
let round = 1

let winPos = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
]

let winBoard = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9],
    [1, 4, 7], 
    [2, 5, 8],
    [3, 6, 9], 
    [1, 5, 9],
    [3, 5, 7]
]

// i = # of available squares until 9 max reached
for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener(
      "click",  function() {
          if (this.innerHTML === "" && !gameEnded) {
            console.log(`Current player is: ${playerSymbol}
They selected box (grid) #: ${i}
Current round is: ${round++}
`);
          this.innerHTML = playerSymbol;
          this.classList.add(playerSymbol.toLowerCase());
       // Check to see if/when a player has won
          checkWin();
      // Swap the symbol to the other one for the next turn
          if (playerSymbol === "X"){
            playerSymbol = "O";
          }
          else {
            playerSymbol = "X";
        };
      }
    });
  }

// Check to see if/when someone wins
function checkWin() {
    for (let i = 1; i < winPos.length; i++) {
      if (
        document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
        document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
        document.getElementById(winPos[i][2]).innerHTML === playerSymbol
      ) {
        document.getElementById(winPos[i][0]).classList.add("win");
        document.getElementById(winPos[i][1]).classList.add("win");
        document.getElementById(winPos[i][2]).classList.add("win"); 
        gameEnded = true;
        console.log(`The winner is: ${playerSymbol}`);
        alert(`Player ${playerSymbol} wins!`);
          /* Last cell isn't marked as selected, before it *does* declare correctly in alert message and console.log.
          Then, displays winning row after clicking out of alert pop-up message. */
      }
    }
  }



// Display when there is a tie (no winner) - after blue {} in checkWin() function?
/*
else {
    let turn = i > 9;
    console.log(alert(`It's a tic-tac-tie!`));
}
*/


// Restart a completed game and clear board

document.getElementById("restart").addEventListener(
  "click", function() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
      gameEnded = false;
      round = 1;
    }
  }
);