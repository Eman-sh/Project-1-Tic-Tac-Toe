$(document).ready(function () {
    //     let grid = [
    //         [" ", " ", " "],
    //         [" ", " ", " "],
    //        [" ", " ", " "]
    //    ];
    let playerOne = "X";
    let playerTwo = "O";
    let playerOneCount = 1;
    let playerTwoCount = 1;
    let total_moves = 0;
    let players;
    let p1;
    let p2;
    let column = $(".column");


    // 2 players take turns in playing
    const gamePlay = column.one("click", function () {
        // players.push($(this).attr('class'));


        if (playerOneCount <= playerTwoCount) {
            p1 = $(this).text(playerOne)


            // Count player moves
            console.log(("total_moves = " + total_moves++)+" player1 = " + playerOneCount++)
            

        } else {
            p2 = $(this).text(playerTwo)
            // Count player moves
            console.log(("total_moves = " + total_moves++)+ " player2 = " + playerTwoCount++ )

        }
         });

        // Count Total moves and end game if more than 8
        if ($(".column")[0].innerHTML === $(".column")[1].innerHTML || $(".column")[2].innerHTML) {
            return true;
        }
        else if (total_moves == 9) {

            console.log("Game Over")
        }


   
    //innerHTML
    //textContent

    //////////////////////////////////////
    // const winner = function () {
    //     const win = [[0, 1, 2], [4, 5, 6], [7, 8, 9],
    //     [1, 4, 7], [2, 5, 8], [3, 6, 9],
    //     [1, 5, 9], [3, 5, 7],]; // return the winner 

    // }




    // Restart the game 
    const restartGame = $(".restart").on("click", function () {
        location.reload();
    });


});

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




