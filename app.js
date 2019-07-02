$(document).ready(function () {

    let playerOne = "X";
    let playerTwo = "O";
    let playerOneCount = 1;
    let playerTwoCount = 1;
    let total_moves = 0;
    let column = $(".column");



    // 2 players take turns in playing
    const gamePlay = column.one("click", function () {
        

            //let player1 start and then player2
        if (playerOneCount <= playerTwoCount) {
            p1 = $(this).text(playerOne)


            // Count player1 moves and total moves
            console.log(("total_moves = " + total_moves++) + " player1 = " + playerOneCount++)


        } else {
            p2 = $(this).text(playerTwo)
            // Count player moves and total moves
            console.log(("total_moves = " + total_moves++) + " player2 = " + playerTwoCount++)

        }


        // announce the winner "player1" - blure the loser - change text
        const player1 = function () {
            $(".player1").css("background-color", "rgb(99, 146, 248)"),
                $(".player2").css("filter", "blur(3px)");
            $(".player2").text("defeat");
            $("h1").text("Lord of the Seven Kingdoms")
        }
        // announce the winner "player1" - blure the loser - change text
        const player2 = function () { 
            $(".player2").css("background-color", "rgb(99, 146, 248"),
                $(".player1").css("filter", "blur(3px)");
            $("#p-1").text("defeat");
            $("h1").text("Lord of the Seven Kingdoms")
        }
        // when 5 moves are made check for a winner + Stop the Game
        if (total_moves >= 5) {
            // 0-1-2 
            if ($(".column")[0].innerHTML === $(".column")[1].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[2].innerHTML) {
                //if we have a winner stop the game
                $(".column").off('click');
                //check if the last move was made by player1 or player 2 
                if ($(".column")[0].innerHTML === "X") {
                    player1()
                    //No more clickes
                    $(".column").off('click');

                }
                else {
                    player2()

                }
            }
            //0-3-6
            else if ($(".column")[0].innerHTML === $(".column")[3].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[6].innerHTML) {
                $(".column").off('click');
                if ($(".column")[0].innerHTML === "X") {
                    player1()

                }
                else {
                    player2()


                }
            } //0-4-8 
            else if ($(".column")[0].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[8].innerHTML) {
                $(".column").off('click');
                if ($(".column")[0].innerHTML === "X") {
                    player1()

                }
                else {
                    player2()

                }
            }//2-4-6
            else if ($(".column")[2].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[2].innerHTML === $(".column")[6].innerHTML) {
                $(".column").off('click');
                if ($(".column")[2].innerHTML === "X") {
                    player1()

                }
                else {
                    player2()


                }
            } //3-4-5
            else if ($(".column")[3].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[3].innerHTML === $(".column")[5].innerHTML) {
                if ($(".column")[3].innerHTML === "X") {
                    player1()
                    $(".column").off('click');
                }
                else {
                    player2()

                } $(".column").off('click');
            }//6-7-8
            else if ($(".column")[6].innerHTML === $(".column")[7].innerHTML &&
                $(".column")[6].innerHTML === $(".column")[8].innerHTML) {
                $(".column").off('click');
                if ($(".column")[6].innerHTML === "X") {
                    player1()

                }
                else {
                    player2()

                }
            } //1-4-7
            else if ($(".column")[1].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[1].innerHTML === $(".column")[7].innerHTML) {
                $(".column").off('click');
                if ($(".column")[1].innerHTML === "X") {
                    player1()

                }
                else {
                    player2()

                }
            } //2-5-8
            else if ($(".column")[2].innerHTML === $(".column")[5].innerHTML &&
                $(".column")[2].innerHTML === $(".column")[8].innerHTML) {
                $(".column").off('click');
                if ($(".column")[2].innerHTML === "X") {
                    player1()

                }
                else {
                    player2()

                }
            }
            // End the game - 9 moves are made and no winner 
            else if (total_moves == 9) {

                alert("Draw!.. New Game?")

            }
        }

    });


    // Restart the game 
    const restartGame = $(".restart").on("click", function () {
        location.reload();
    });


});

