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


        // when 5 moves are made check for the winner + Stop the Game
        if (total_moves >= 5) {
            // 0-1-2 
            if ($(".column")[0].innerHTML === $(".column")[1].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[2].innerHTML) {
                    // on win stop the game
                    $(".column").off('click');
                    //check if the last move was made by "X" or "O" 
                if ($(".column")[0].innerHTML === "X") {
                    alert(" The winner is Player one") 
                    $(".column").off('click');
                   
                }
                else {alert(" The winner is Player Two")

                } 
            } 
            //0-3-6
            else if ($(".column")[0].innerHTML === $(".column")[3].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[6].innerHTML) {
                    $(".column").off('click');
                    if ($(".column")[0].innerHTML === "X") {
                        alert(" The winner is Player one")
                       
                    }
                    else { alert(" The winner is Player Two")
                   
    
                    } 
            } //0-4-8 + Stop the Game
            else if ($(".column")[0].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[0].innerHTML === $(".column")[8].innerHTML) {
                    $(".column").off('click');
                    if ($(".column")[0].innerHTML === "X") {
                        alert(" The winner is Player one")
                        
                    }
                    else { alert(" The winner is Player Two")
    
                    } 
            }//2-4-6
            else if ($(".column")[2].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[2].innerHTML === $(".column")[6].innerHTML) {
                    $(".column").off('click');
                    if ($(".column")[2].innerHTML === "X") {
                        alert(" The winner is Player one")
                    
                    }
                    else { alert(" The winner is Player Two")
    
                    }
            } //3-4-5
            else if ($(".column")[3].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[3].innerHTML === $(".column")[5].innerHTML) {
                    if ($(".column")[3].innerHTML === "X") {
                        alert(" The winner is Player one")
                        $(".column").off('click');
                    }
                    else { alert(" The winner is Player Two")
    
                    } $(".column").off('click');
            }//6-7-8
            else if ($(".column")[6].innerHTML === $(".column")[7].innerHTML &&
                $(".column")[6].innerHTML === $(".column")[8].innerHTML) {
                    $(".column").off('click');
                    if ($(".column")[6].innerHTML === "X") {
                        alert(" The winner is Player one")
                       
                    }
                    else { alert(" The winner is Player Two")
    
                    } 
            } //1-4-7
            else if ($(".column")[1].innerHTML === $(".column")[4].innerHTML &&
                $(".column")[1].innerHTML === $(".column")[7].innerHTML) {
                    $(".column").off('click');
                    if ($(".column")[1].innerHTML === "X") {
                        alert(" The winner is Player one")
                       
                    }
                    else { alert(" The winner is Player Two")
    
                    } 
            } //2-5-8
            else if ($(".column")[2].innerHTML === $(".column")[5].innerHTML &&
                $(".column")[2].innerHTML === $(".column")[8].innerHTML) {
                    $(".column").off('click');
                    if ($(".column")[2].innerHTML === "X") {
                        alert(" The winner is Player one")
                       
                    }
                    else { alert(" The winner is Player Two")
    
                    } 
            }

            else if (total_moves == 9) {

                alert("It's a Draw")
            }
        }

    });


    // Restart the game 
    const restartGame = $(".restart").on("click", function () {
        location.reload();
    });


});

