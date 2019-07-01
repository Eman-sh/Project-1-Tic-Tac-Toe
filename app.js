$(document).ready(function () {

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
            console.log(("total_moves = " + total_moves++) + " player1 = " + playerOneCount++)


        } else {
            p2 = $(this).text(playerTwo)
            // Count player moves
            console.log(("total_moves = " + total_moves++) + " player2 = " + playerTwoCount++)

        }


        // Count Total moves and end game if more than 8
        if (total_moves >= 5) {
            // 0-1-2
            if ($(".column")[0].innerHTML === $(".column")[1].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[2].innerHTML) {
                if ($(".column")[0].innerHTML === "X") {
                    console.log(" The winner is Player one")
                   
                }
                else { console.log(" The winner is Player Two")

                }  $(".column").off('click');
            } 
            //0-3-6
            else if ($(".column")[0].innerHTML === $(".column")[3].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[6].innerHTML) {
                    if ($(".column")[0].innerHTML === "X") {
                        console.log(" The winner is Player one")
                    }
                    else { console.log(" The winner is Player Two")
                    
    
                    } $(".column").off('click');
            } //0-4-8
            else if ($(".column")[0].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[8].innerHTML) {
                    if ($(".column")[0].innerHTML === "X") {
                        console.log(" The winner is Player one")
                    }
                    else { console.log(" The winner is Player Two")
    
                    } $(".column").off('click');
            }//2-4-6
            else if ($(".column")[2].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[2].innerHTML === $(".column")[6].innerHTML) {
                    if ($(".column")[0].innerHTML === "X") {
                        console.log(" The winner is Player one")
                    }
                    else { console.log(" The winner is Player Two")
    
                    } $(".column").off('click');
            } //3-4-5
            else if ($(".column")[3].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[3].innerHTML === $(".column")[5].innerHTML) {
                    if ($(".column")[0].innerHTML === "X") {
                        console.log(" The winner is Player one")
                    }
                    else { console.log(" The winner is Player Two")
    
                    } $(".column").off('click');
            }//6-7-8
            else if ($(".column")[6].innerHTML === $(".column")[7].innerHTML &&
                $(".column")[6].innerHTML === $(".column")[8].innerHTML) {
                    if ($(".column")[0].innerHTML === "X") {
                        console.log(" The winner is Player one")
                    }
                    else { console.log(" The winner is Player Two")
    
                    }
            } //1-4-7
            else if ($(".column")[1].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[1].innerHTML === $(".column")[7].innerHTML) {
                    if ($(".column")[0].innerHTML === "X") {
                        console.log(" The winner is Player one")
                    }
                    else { console.log(" The winner is Player Two")
    
                    } $(".column").off('click');
            } //2-5-8
            else if ($(".column")[2].innerHTML === $(".column")[5].innerHTML &&
                $(".column")[2].innerHTML === $(".column")[8].innerHTML) {
                    if ($(".column")[0].innerHTML === "X") {
                        console.log(" The winner is Player one")
                    }
                    else { console.log(" The winner is Player Two")
    
                    } $(".column").off('click');
            }

            else if (total_moves == 9) {

                console.log("It's a Draw")
            }
        }

    });





    // Restart the game 
    const restartGame = $(".restart").on("click", function () {
        location.reload();
    });


});

    // draw if counter === 9  an !=win





