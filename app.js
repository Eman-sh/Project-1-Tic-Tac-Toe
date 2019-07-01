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




// * {
//     box-sizing: border-box;
// }

// body {
//     text-align: center;
//     margin-top: 10px;
//     background-color:black;
//     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//     overflow: hidden;
// }
// .video container {
//     height: 100vh;
//     display: flex;
//     align-items: center;


// }
// .video {
//     position: absolute;
//     top:0;
//     left: 0;
//     width: 100;
//     height: 100vh;
//     overflow: hidden;
    
// }

// .players {
//     height: 200px;
//     display: flex;
//     justify-content: space-between;
// }

// .videobox {
//     text-align: center;
//     height: 1600;
//     width: 1000;


// }

// .start {
//     font-family: fantasy;
//     font-size: 20px;
//     color:white;
//     background-color:transparent;
//     text-align: center;
//     cursor:pointer;
    
//     /* align-items: center; */
//     border:none;
    

// }
// .round {
//     font-size: 30px;
// } 

// .player1 {
//     border: outset;
//     width: 130px;
//     height: 130px;
//     text-align: left;
//     padding: 10px;
// }

// .player2 {
//     border: outset;
//     width: 130px;
//     height: 130px;
//     text-align: right;
//     padding: 10px;
// }

// .rows {
//     display: flex;
//     justify-content: center;
    
    
// }

// .column {
//     text-align: center;
//     background-color: rgb(235, 202, 207);
//     width: 150px;
//     height: 150px;
//     margin: 2px 2px 2px 0px;
//     padding: 35px;
//     font-size: 60px;
 
// }

// .restart {
//     margin: 50px;
//     padding-left: 20px;
//     padding-top: 10px;
//     padding-right: 20px;
//     padding-bottom: 10px;
//     border-radius: 3px;
//     background-color: rgb(88, 88, 112);
//     color: rgb(235, 202, 207);
//     font-weight: bolder;
// }

// /* @media(max-width:960px) {
//     body{
//         padding: 3rem;
        
//     }
// } */

