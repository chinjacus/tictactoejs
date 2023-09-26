/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
const prompt = require('prompt-sync')({sigint: true});
const assert = require('assert');

function game() {
let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    board[position]=mark;
   }
   
// TODO: print the game board as described at the top of this code skeleton

function printBoard() {
   
   console.log(
         ` ${board[1]} | ${board[2]} | ${board[3]}\n` +
         ' --------- \n' +
         ` ${board[4]} | ${board[5]} | ${board[6]}\n` +
         ' --------- \n' +
          ` ${board[7]} | ${board[8]} | ${board[9]}\n`);
  }
   


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {

    if(board[position] !==' '){
        return false;
    }
    else if(position > 9 || position < 1){
        return false;
    }
    else if(position <= 9 || position >= 1){
        return true;
    }
    else{
         return false;
    }
    
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9],[1, 4, 7],[2, 5, 8],[3, 6, 9],[1, 5, 9],[3, 5, 7]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    var a=[]
    let j =0;
    for (let i = 1; i <=9; i++) {
        if(board[i]===player){
            
            a[j]=i;
            j++;
        }
        else{}
      }
      
      for (let x = 0; x <8; x++) {

        if(a.toString().includes(winCombinations[x].toString())){
            return true
        }

        else{continue;}
      }
      return false;
}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    let j =0;
    for (let i = 1; i <=9; i++) {
        if(board[i]!==' '){
            j+=i;
        }
        else{}
      }
      
      if(j===45){
        return true
      }
      else{
        return false
      }
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {

    const posi = prompt(`${player}\'s turn, input: `);
    if (validateMove(posi)==true){

        markBoard(posi, player);
        printBoard();
        return (checkWin(player));
    }
    else {
        console.log('Invalid input, try again.');
        playTurn(player);
    }

}

// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

let winnerIdentified = false
let currentTurnPlayer = 'X'

while (!winnerIdentified){
    // feel free to add logic here if needed, e.g. announcing winner or tie

    if (checkFull()==false && currentTurnPlayer == 'X'){
        currentTurnPlayer = 'O'
        winnerIdentified = playTurn(currentTurnPlayer);
    }
    else if(checkFull()==false && currentTurnPlayer == 'O'){
        currentTurnPlayer = 'X'
        winnerIdentified = playTurn(currentTurnPlayer);
    }
    else{
        console.log(`Game tied`)
        const tryagain = prompt(`Try again?(y/n): `);

        if(tryagain=="y"){
            game();
        }
        else if(tryagain=="n"){
        return;
        }
        else{
        return;
        }
            }

}
console.log(`Player ${currentTurnPlayer} won!`)
const tryagain = prompt(`Try again?(y/n): `);

if(tryagain=="y"){
    game();
}
else if(tryagain=="n"){
  return;
}
else{
  return;
}

// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
}

game();