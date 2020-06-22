const   W_PAWN = '\u2659';
const   W_ROCK = '\u2656';
const   W_BISHOP = '\u2657';
const   W_KNIGHT = '\u2658';
const   W_KING = '\u2654';
const   W_QUEEN = '\u2655';

const   B_PAWN = '\u265F';
const   B_ROCK = '\u265C';
const   B_BISHOP = '\u265D';
const   B_KNIGHT = '\u265E';
const   B_KING = '\u265A';
const   B_QUEEN = '\u265B';

const   NOT_CLICKED = '0';

const   WHITE = '0';
const   BLACK = '1';
const   EMPTY = '2';

const   PAWN = '0';
const   ROCK = '1';
const   KNIGHT = '2';
const   BISHOP = '3';
const   KING = '4';
const   QUEEN = '5';

var from = NOT_CLICKED;
var currMove = WHITE;
var cadBlack = 5;
var cadWhite = 5;
var dateBegin;
var pendule;

var takenWhite = "";
var takenBlack = "";