$(document).ready(function () {

    let playerOne = "X";
    let playerTwo = "O";
    let playerOneCount = 1;
    let playerTwoCount = 1;
    let moves = 1;
    const grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "],];
    const win = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7],] ; // return the winner 


    // 2 players take turns in playing
    const gamePlay = $(".column").one("click", function () {
        let p1;
        let p2;
        if (playerOneCount <= playerTwoCount) {
            p1 = $(this).text(playerOne)
            // Count player moves
            console.log("player1= " + playerOneCount++)
            if (p1 == win) {
            console.log("playerOne win")}


        } else {
            p2 = $(this).text(playerTwo)
            // Count player moves
            console.log("player2 = " + playerTwoCount++)

        }
        // Count Total moves and end game if more than 8
        if (moves == 9) {
            console.log("Game Over")
        }
        else {
            console.log("moves = " + moves++)
        }

    });


    // let restartGame = function() {



    // go back to the main function

    // }


    // for (let i = 0; i<3; i++) {
    //     if (grid[i][0] !== " " && )
    // }
    // draw if counter === 9  an !=win

    // }

    // grid
    // [
    //    [[0][0],[0][1],[0][2]]
    //    [[1][0],[1][1],[1][2]]
    //    [[2][0],[2][1],[2][2]]
    //   
    // ]




});