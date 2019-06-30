$(document).ready(function () {

    let playerOne = "X";
    let playerTwo = "O";
    let playerOneCount = 1;
    let playerTwoCount = 1;
    let moves = 0;
    const grid = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ];
    console.log(grid)

    // const gamePlay = function (player1, player2) {

    const gamePlay = $(".column").one("click", function () {
        if (playerOneCount <= playerTwoCount) {
            $(this).text(playerOne)
            playerOneCount++
        } else {
            $(this).text(playerTwo)
            playerTwoCount++

        }
        moves++


    });
    // }
    // gamePlay(p1, p2)


    // let val, h1;
    // //getting the the entered text
    // val = $("input").val();
    // paragraph = $("p")
    // paragraph.text(val); // the value of the entered text is the new value of h1 tag


    // }


    // let players = function() {

    // }
    // players turns 



    // let restartGame = function() {
    if (moves == 8) {
        console.log("Game Over")
    }
    else {
        console.log("Game still on") // place holder
    }
    // go back to the main function

    // }


    // let theWinner = function() {
    // const win = [
    //     [1, 2, 3], [4, 5, 6], [7, 8, 9],
    //     [1, 4, 7], [2, 5, 8], [3, 6, 9],
    //     [1, 5, 9], [3, 5, 7],

    //     // return the winner    
    // ]

    function whoseMove(lastPlayer, win) {
        return lastPlayer == "white" ^ !!win ? "black" : "white";
    }
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