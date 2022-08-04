var symbol = "X";
var scoreX=0;
var scoreY=0;
var draw=0;
var moves=0;

function toggleText(button_id) {

    if (document.getElementById(button_id).innerText === ""){

        document.getElementById(button_id).innerText = symbol;
        document.getElementById(button_id).value = symbol;


        if ( symbol === "X" ){
            symbol="Y";
            value=symbol;
            moves++;
            console.log(moves);

        } else{
            symbol="X";
            value=symbol;
            moves++;
            console.log(moves);
        }
    } else{
        alert("Wybierz puste pole");
    }
}



function logicOfGame(){
    if (document.getElementById("buttonOne").value === document.getElementById("buttonTwo").value &&          document.getElementById("buttonTwo").value === document.getElementById("buttonThree").value)
    {
        let winner = document.getElementById("buttonThree").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        reset();
        score(winner);
    }
    else if (document.getElementById("buttonFour").value === document.getElementById("buttonFive").value &&          document.getElementById("buttonFive").value === document.getElementById("buttonSix").value)
    {

        let winner = document.getElementById("buttonSix").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        reset();
        score(winner);
    }
    else if (document.getElementById("buttonSeven").value === document.getElementById("buttonEight").value &&          document.getElementById("buttonEight").value === document.getElementById("buttonNine").value)
    {

        let winner = document.getElementById("buttonNine").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        reset();
        score(winner);
    }

    else if (document.getElementById("buttonOne").value === document.getElementById("buttonFour").value &&          document.getElementById("buttonFour").value === document.getElementById("buttonSeven").value)
    {

        let winner = document.getElementById("buttonSeven").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        reset();
        score(winner);
    }
    else if (document.getElementById("buttonTwo").value === document.getElementById("buttonFive").value &&          document.getElementById("buttonFive").value === document.getElementById("buttonEight").value)
    {

        let winner = document.getElementById("buttonEight").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        reset();
        score(winner);
    }
    else if (document.getElementById("buttonThree").value === document.getElementById("buttonSix").value &&          document.getElementById("buttonSix").value === document.getElementById("buttonNine").value)
    {

        let winner = document.getElementById("buttonNine").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        alert("Wygrał gracz "+winner);
        reset();
        score(winner);
    }

    else if (document.getElementById("buttonOne").value === document.getElementById("buttonFive").value &&          document.getElementById("buttonFive").value === document.getElementById("buttonNine").value)
    {

        let winner = document.getElementById("buttonNine").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        reset();
        score(winner);
    }
    else if (document.getElementById("buttonThree").value === document.getElementById("buttonFive").value &&          document.getElementById("buttonFive").value === document.getElementById("buttonSeven").value)
    {

        let winner = document.getElementById("buttonSeven").value;
        document.getElementById("result").innerText = "Wygrał gracz: "+winner;
        reset();
        score(winner);
    } 
    else if (moves>=9) {
        document.getElementById("result").innerText = "Remis";
        reset();
        draw++;
        document.getElementById("score-draw").innerText = draw;
        moves=0;
    }

}

function reset(){
    var change = document.getElementsByClassName("button");


    for (var i = 0; i < change.length; i++) {
        change[i].innerHTML = " ";
        change[i].value = "button"+i;
    }
}

function score(value){
    if(value==="X"){
        scoreX++;
        document.getElementById("score-x").innerText = scoreX;
        moves = 0;
    } else if (value==="Y"){
        scoreY++;
        document.getElementById("score-y").innerText = scoreY;
        moves = 0;
    } else{
        draw++;
        document.getElementById("score-draw").innerText = draw;
        moves = 0;
    }
}