function    checkColor(idCase){
    switch(document.getElementById(idCase).innerHTML){
        case W_PAWN:
            return (WHITE);
        case W_KNIGHT:
            return (WHITE);
        case W_ROCK:
            return (WHITE);
        case W_BISHOP:
            return (WHITE);
        case W_KING:
            return (WHITE);
        case W_QUEEN:
            return (WHITE);
        
        case B_PAWN:
            return (BLACK);
        case B_KNIGHT:
            return (BLACK);
        case B_ROCK:
            return (BLACK);
        case B_BISHOP:
            return (BLACK);
        case B_KING:
            return (BLACK);
        case B_QUEEN:
            return (BLACK);
    }
    return (EMPTY);
}

function    checkWhitePawnMoves(fromCase, toCase){
    if (fromCase >= 8 && fromCase <= 16 && (fromCase + 8 == toCase && checkColor(toCase) == EMPTY || fromCase + 16 == toCase && checkColor(toCase) == EMPTY))
        return (1);
    else if (fromCase + 8 == toCase && checkColor(toCase) == EMPTY)
        return (1);
    else if (toCase == fromCase + 7 && checkColor(toCase) != EMPTY || toCase == fromCase + 9 && checkColor(toCase) != EMPTY)
        return (1);
    return (0);
}

function    checkBlackPawnMoves(fromCase, toCase){
    if (fromCase >= 49 && fromCase <= 56 && (fromCase - 8 == toCase && checkColor(toCase) == EMPTY || fromCase - 16 == toCase && checkColor(toCase) == EMPTY))
        return (1);
    else if (fromCase - 8 == toCase && checkColor(toCase) == EMPTY)
        return (1);
    else if (toCase == fromCase - 7 && checkColor(toCase) != EMPTY || toCase == fromCase - 9 && checkColor(toCase) != EMPTY)
        return (1);
    return (0);
}

function    checkKnightMoves(fromCase, toCase){
    switch(toCase){
        case fromCase + 16 + 1:
            return (1);
        case fromCase + 16 - 1:
            return (1);
        case fromCase - 16 + 1:
            return (1);
        case fromCase - 16 - 1:
            return (1);
        case fromCase + 8 + 2:
            return (1);
        case fromCase + 8 - 2:
            return (1);
        case fromCase - 8 + 2:
            return (1);  
        case fromCase - 8 - 2:
            return (1);            
    }
    return (0);
}

function    checkRockMoves(fromCase, toCase){
    var     res = 0;
    var     depFrom = fromCase;
    var     lim = depFrom + 8;
    
    while (depFrom > 0)
        depFrom -= 8;
    
    while (depFrom <= 64){
        if (depFrom == toCase)
            res = 1;
        depFrom += 8;
    }
    
    if (fromCase % 8 == 0)
        depFrom = fromCase - 8 + 1;
    else
        depFrom = fromCase - (fromCase % 8 + 1);
    
    var     lim = depFrom + 8;

    while (depFrom++ <= lim)
        if (depFrom == toCase)
            res = 1;

    depFrom -= 7;
    lim++;

    if (toCase >= depFrom && toCase <= lim){
        for (var i = fromCase + 1 ; i < toCase ; i++)
            if (checkColor(i) != EMPTY)
                res = 0;
        for (var i = fromCase - 1 ; i > toCase ; i--)
            if (checkColor(i) != EMPTY)
                res = 0;
    }
    else{
        for (var i = fromCase + 8 ; i < toCase ; i += 8)
            if (checkColor(i) != EMPTY)
                res = 0;
        for (var i = fromCase - 8 ; i > toCase ; i -= 8)
            if (checkColor(i) != EMPTY)
                res = 0;
    }
    return (res);
}

function    checkBishopMoves(fromCase, toCase){
    var     res = 0;
    for (var i = 1 ; i <= 8 ; i++)
        if (fromCase + 7 * i == toCase){
            res = 1;
            for (var j = fromCase + 7 ; j < toCase ; j += 7)
                if (checkColor(j) != EMPTY)
                    res = 0;
        }
        else if(fromCase + 9 * i == toCase){
            res = 1;
            for (var j = fromCase + 9 ; j < toCase ; j += 9)
                if (checkColor(j) != EMPTY)
                    res = 0;
        }
        else if(fromCase - 7 * i == toCase){
            res = 1;
            for (var j = fromCase - 7 ; j > toCase ; j -= 7)
                if (checkColor(j) != EMPTY)
                    res = 0;         
        }
        else if(fromCase - 9 * i == toCase){
            res = 1;
            for (var j = fromCase - 9 ; j > toCase ; j -= 9)
                if (checkColor(j) != EMPTY)
                    res = 0;            
        }
    return (res);
}

function    checkKingMoves(fromCase, toCase){
    if (fromCase - 8 == toCase || fromCase + 8 == toCase || fromCase - 1 == toCase || fromCase + 1 == toCase || fromCase + 8 + 1 == toCase || fromCase + 8 - 1 == toCase || fromCase - 8 + 1 == toCase || fromCase - 8 - 1 == toCase)
        return (1);
    return (0);
}

function    checkQueenMoves(fromCase, toCase){
    if (checkBishopMoves(fromCase, toCase) == 1 || checkRockMoves(fromCase, toCase) == 1)
        return (1);
    return (0);
}