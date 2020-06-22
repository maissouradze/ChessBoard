function    initColors(){
    for (var i = 0 ; i < 8 ; i++){
        for (var j = 1 ; j <= 8 ; j++){
            if ((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)){
                document.getElementById(i * 8 + j).style.background = "#F0DAB5";
            }
            else{
                document.getElementById(i * 8 + j).style.background = "#B88562";
            }
        }
    }
}

function    createBoard(){
    var e = document.getElementById("cad");
    var value = e.options[e.selectedIndex].value;

    clearInterval(pendule);

    takenWhite = "";
    takenBlack = "";
    document.getElementById("white-pieces").innerHTML = takenWhite;
    document.getElementById("black-pieces").innerHTML = takenBlack;
    
    document.getElementById("timer-1").style.border = "1px solid #5E5E5E";
    document.getElementById("timer-2").style.border = "1px solid #5E5E5E";
    document.getElementById("timer-1").style.color = "#5E5E5E";
    document.getElementById("timer-2").style.color = "#5E5E5E";

    cadBlack = parseInt(e.options[e.selectedIndex].text) * 60;
    cadWhite = cadBlack;
    document.getElementById("timer-1").innerHTML = (Math.floor(cadWhite / 60)).toFixed(0) + ":" + ((cadWhite) % 60);
    document.getElementById("timer-2").innerHTML = (Math.floor(cadBlack / 60)).toFixed(0) + ":" + ((cadBlack) % 60);

    pendule = setInterval(function(){
        if (currMove == WHITE){
            if (cadWhite <= 0){
                alert("Temps écoulé. Les noirs gagnent !");
                clearInterval(pendule);
            }
            if (cadWhite <= 10){
                document.getElementById("timer-1").style.border = "1px solid red";
                document.getElementById("timer-1").style.color = "red";
            }
            document.getElementById("timer-1").innerHTML = (Math.floor(cadWhite / 60)).toFixed(0) + ":" + ((cadWhite) % 60);
            cadWhite -= 1;
        }
        else{
            if (cadBlack <= 0){
                alert("Temps écoulé. Les blancs gagnent !");
                clearInterval(pendule);
            }
            if (cadBlack <= 10){
                document.getElementById("timer-2").style.border = "1px solid red";
                document.getElementById("timer-2").style.color = "red";
            }
            document.getElementById("timer-2").innerHTML = (Math.floor(cadBlack / 60)).toFixed(0) + ":" + ((cadBlack) % 60);
            cadBlack -= 1;
        }
    }, 1000);

    from = NOT_CLICKED;
    currMove = WHITE;
    initColors();
    for (var i = 9 ; i <= 16 ; i++)
        document.getElementById(i).innerHTML = W_PAWN;
    for (var i = 49 ; i <= 56 ; i++)
        document.getElementById(i).innerHTML = B_PAWN;

    for (var i = 17 ; i <= 48 ; i++)
        document.getElementById(i).innerHTML = " ";

    document.getElementById(1).innerHTML = W_ROCK;
    document.getElementById(2).innerHTML = W_KNIGHT;
    document.getElementById(3).innerHTML = W_BISHOP;
    document.getElementById(4).innerHTML = W_KING;
    document.getElementById(5).innerHTML = W_QUEEN;
    document.getElementById(6).innerHTML = W_BISHOP;
    document.getElementById(7).innerHTML = W_KNIGHT;
    document.getElementById(8).innerHTML = W_ROCK;

    document.getElementById(57).innerHTML = B_ROCK;
    document.getElementById(58).innerHTML = B_KNIGHT;
    document.getElementById(59).innerHTML = B_BISHOP;
    document.getElementById(60).innerHTML = B_KING;
    document.getElementById(61).innerHTML = B_QUEEN;
    document.getElementById(62).innerHTML = B_BISHOP;
    document.getElementById(63).innerHTML = B_KNIGHT;
    document.getElementById(64).innerHTML = B_ROCK;
}

function    initAfterMove(){
    initColors();
    from = NOT_CLICKED;
    to = NOT_CLICKED;
}

function    checkRules(fromCase, toCase){
    if (checkColor(fromCase) != currMove || (currMove == checkColor(toCase)))
        return (0);
    switch(document.getElementById(fromCase).innerHTML){
        case W_PAWN:
            return (checkWhitePawnMoves(parseInt(fromCase), parseInt(toCase)));
        case W_KNIGHT:
            return (checkKnightMoves(parseInt(fromCase), parseInt(toCase)));
        case W_ROCK:
            return (checkRockMoves(parseInt(fromCase), parseInt(toCase)));
        case W_BISHOP:
            return (checkBishopMoves(parseInt(fromCase), parseInt(toCase)));
        case W_KING:
            return (checkKingMoves(parseInt(fromCase), parseInt(toCase)));
        case W_QUEEN:
            return (checkQueenMoves(parseInt(fromCase), parseInt(toCase)));

        case B_PAWN:
            return (checkBlackPawnMoves(parseInt(fromCase), parseInt(toCase)));
        case B_KNIGHT:
           return (checkKnightMoves(parseInt(fromCase), parseInt(toCase)));
        case B_ROCK:
            return (checkRockMoves(parseInt(fromCase), parseInt(toCase)));
        case B_BISHOP:
            return (checkBishopMoves(parseInt(fromCase), parseInt(toCase)));
        case B_KING:
            return (checkKingMoves(parseInt(fromCase), parseInt(toCase)));
        case B_QUEEN:
            return (checkQueenMoves(parseInt(fromCase), parseInt(toCase)));    
    }
    return (1);
}

function    move(idCase){
    if (from == NOT_CLICKED){
        from = idCase;
        document.getElementById(from).style.background = "#7E976D";
    }
    else if (from == idCase){
        initColors();
        from = NOT_CLICKED;
    }
    else{
        document.getElementById(from).style.background = "#7E976D";
        if (checkRules(from, idCase)){
            doMove(from, idCase);
            currMove = (currMove + 1) % 2;
            initAfterMove();
        }
    }
}

function    doMove(fromCase, toCase){
    if (document.getElementById(toCase).innerHTML != EMPTY && currMove == BLACK){
        takenBlack += document.getElementById(toCase).innerHTML;
        document.getElementById("white-pieces").innerHTML = takenBlack;
    }
    else if (document.getElementById(toCase).innerHTML != EMPTY && currMove == WHITE){
        takenWhite += document.getElementById(toCase).innerHTML;
        document.getElementById("black-pieces").innerHTML = takenWhite;
    }
    dateBegin = new Date();
    var     temp = document.getElementById(toCase).innerHTML;
    document.getElementById(toCase).innerHTML = document.getElementById(fromCase).innerHTML;
    if (!temp)
        document.getElementById(fromCase).innerHTML = temp;
    else
        document.getElementById(fromCase).innerHTML = '';
}

function    getBorns(idCase){
    var i = 8;
    while (i >= idCase)
        i += 8;
    return (i);
}