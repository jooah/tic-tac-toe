console.log("javascript running");
    

/*----- constants -----*/


/*----- app's state (variables) -----*/


/*----- cached element references -----*/

/*----- event listeners -----*/


/*----- functions -----*/

var turn = document.getElementById("turn");
var table = document.querySelectorAll("#table td"), X_or_O = 0;

function selectWinner(t1, t2, t3) {
    t1.classList.add("win");
    t2.classList.add("win");
    t3.classList.add("win");
    turn.innerHTML = t1.innerHTML + " Won";
}

function getWinner() {
    var box1 = document.getElementById("1-1");
    var box2 = document.getElementById("1-2");
    var box3 = document.getElementById("1-3");
    var box4 = document.getElementById("2-1");
    var box5 = document.getElementById("2-2");
    var box6 = document.getElementById("2-3");
    var box7 = document.getElementById("3-1");
    var box8 = document.getElementById("3-2");
    var box9 = document.getElementById("3-3");

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinner(box1, box2, box3);

        if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinner(box4, box5, box6);

        if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinner(box7, box8, box9);

        if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinner(box1, box4, box7);

        if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinner(box2, box5, box8);

        if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinner(box3, box6, box9);

        if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinner(box1, box5, box9);

        if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinner(box3, box5, box7);
}

// set event onclick


for(var i = 0; i < table.length; i++) {
    table[i].onclick = function() {
        // not allow to change the value of the table
        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_or_O%2 === 0) {
                console.log(X_or_O);
                this.classList.remove("box"); //
                this.classList.add("star");  //
                turn.innerHTML = "O Turn Now";
                getWinner();
                X_or_O += 1;

            } else {
                console.log(X_or_O);
                this.classList.remove("box"); //
                this.classList.add("like"); //
                turn.innerHTML = "X Turn Now";
                getWinner();
                X_or_O += 1;
            }
        }
    }
}

function replay() {
    for (var i = 0; i < table.length; i++) {
        table[i].classList.remove("win");
        table[i].innerHTML = "";
        turn.innerHTML = "Play";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
});




//  Init game
//      initialize variables
//      reset the game 
//

//  During gameplay
//      respond to events
//          grid click
//          reset click
//  
//  End the game
//      win: stop the game
//      win: show "YOU WIN!" message
//      lose: stop the game
//      lose: show "YOU LOSE!" message
//      tie: stop the game
//      tie: show "DRAW!" message



// As a user I can start the game.
// As a user I can click on a grid(table)
// As a user I can see O / X displayed on the grid(table)
// As a user I can reset the game.
// As a user I can see when I have won,lost or draw.