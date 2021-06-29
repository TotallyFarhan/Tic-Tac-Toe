//BOX VARIABLES FROM DOM
const boxOne = document.getElementById('box1');
const boxTwo = document.getElementById('box2');
const boxThree = document.getElementById('box3');
const boxFour = document.getElementById('box4');
const boxFive = document.getElementById('box5');
const boxSix = document.getElementById('box6');
const boxSeven = document.getElementById('box7');
const boxEight = document.getElementById('box8');
const boxNine = document.getElementById('box9');
const winStatement = document.getElementById('winner');
const resetButton = document.getElementById('reset-button');
const xScore = document.getElementById('x-score');
const oScore = document.getElementById('o-score');
const drawScore = document.getElementById('draw');

//GLOBAL VARIABLES
let turn = "X";
let currentlyPlaying = true;
let win = "";
let scoreForX = 0;
let scoreForO = 0;
let draws = 0;

//Function that checks if a box has been clicked or not
const isClicked = (box) => {
    if (box.innerHTML === 'X' || box.innerHTML === "O") {
        return true;
    }
    else {
        return false;
    }
}

const resetGame = () => {
    boxOne.innerHTML = "";
    boxTwo.innerHTML =  "";
    boxThree.innerHTML = "";
    boxFour.innerHTML = "";
    boxFive.innerHTML = "";
    boxSix.innerHTML = "";
    boxSeven.innerHTML = "";
    boxEight.innerHTML = "";
    boxNine.innerHTML = "";
    currentlyPlaying = true;
    win = "";
    turn = "X";
    winStatement.innerHTML = "";
    boxOne.style.color = 'black';
    boxTwo.style.color = 'black';
    boxThree.style.color = 'black';
    boxFour.style.color = 'black';
    boxFive.style.color = 'black';
    boxSix.style.color = 'black';
    boxSeven.style.color = 'black';
    boxEight.style.color = 'black';
    boxNine.style.color = 'black';
}

//Function that checks if a player has won
const checkWin = () => {
    if (boxOne.innerHTML === "X" && boxTwo.innerHTML === "X" && boxThree.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxOne.style.color = 'red';
        boxTwo.style.color = 'red';
        boxThree.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    else if (boxOne.innerHTML === "X" && boxFour.innerHTML === "X" && boxSeven.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxOne.style.color = 'red';
        boxFour.style.color = 'red';
        boxSeven.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    else if (boxOne.innerHTML === "X" && boxFive.innerHTML === "X" && boxNine.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxOne.style.color = 'red';
        boxFive.style.color = 'red';
        boxNine.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    else if (boxThree.innerHTML === "X" && boxSix.innerHTML === "X" && boxNine.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxThree.style.color = 'red';
        boxSix.style.color = 'red';
        boxNine.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    else if (boxThree.innerHTML === "X" && boxFive.innerHTML === "X" && boxSeven.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxThree.style.color = 'red';
        boxFive.style.color = 'red';
        boxSeven.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    else if (boxFour.innerHTML === "X" && boxFive.innerHTML === "X" && boxSix.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxFour.style.color = 'red';
        boxFive.style.color = 'red';
        boxSix.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    else if (boxTwo.innerHTML === "X" && boxFive.innerHTML === "X" && boxEight.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxTwo.style.color = 'red';
        boxFive.style.color = 'red';
        boxEight.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    else if (boxSeven.innerHTML === "X" && boxEight.innerHTML === "X" && boxNine.innerHTML === "X") {
        currentlyPlaying = false;
        win = "X";
        winStatement.innerHTML = `${win} Wins!`;
        boxSeven.style.color = 'red';
        boxEight.style.color = 'red';
        boxNine.style.color = 'red';
        scoreForX ++;
        xScore.innerHTML = scoreForX;
    }
    if (boxOne.innerHTML === "O" && boxTwo.innerHTML === "O" && boxThree.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxOne.style.color = 'red';
        boxTwo.style.color = 'red';
        boxThree.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxOne.innerHTML === "O" && boxFour.innerHTML === "O" && boxSeven.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxOne.style.color = 'red';
        boxFour.style.color = 'red';
        boxSeven.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxOne.innerHTML === "O" && boxFive.innerHTML === "O" && boxNine.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxOne.style.color = 'red';
        boxFive.style.color = 'red';
        boxNine.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxThree.innerHTML === "O" && boxSix.innerHTML === "O" && boxNine.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxThree.style.color = 'red';
        boxSix.style.color = 'red';
        boxNine.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxThree.innerHTML === "O" && boxFive.innerHTML === "O" && boxSeven.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxThree.style.color = 'red';
        boxFive.style.color = 'red';
        boxSeven.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxFour.innerHTML === "O" && boxFive.innerHTML === "O" && boxSix.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxFour.style.color = 'red';
        boxFive.style.color = 'red';
        boxSix.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxTwo.innerHTML === "O" && boxFive.innerHTML === "O" && boxEight.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxTwo.style.color = 'red';
        boxFive.style.color = 'red';
        boxEight.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxSeven.innerHTML === "O" && boxEight.innerHTML === "O" && boxNine.innerHTML === "O") {
        currentlyPlaying = false;
        win = "O";
        winStatement.innerHTML = `${win} Wins!`;
        boxSeven.style.color = 'red';
        boxEight.style.color = 'red';
        boxNine.style.color = 'red';
        scoreForO ++;
        oScore.innerHTML = scoreForO;
    }
    else if (boxOne.innerHTML === "X" || boxOne.innerHTML === "O") {
            if (boxTwo.innerHTML === "X" || boxTwo.innerHTML === "O") {
                if (boxThree.innerHTML === "X" || boxThree.innerHTML === "O") {
                    if (boxFour.innerHTML === "X" || boxFour.innerHTML === "O") {
                        if (boxFive.innerHTML === "X" || boxFive.innerHTML === "O") {
                            if (boxSix.innerHTML === "X" || boxSix.innerHTML === "O") {
                                if (boxSeven.innerHTML === "X" || boxSeven.innerHTML === "O") {
                                    if (boxEight.innerHTML === "X" || boxEight.innerHTML === "O") {
                                        if (boxNine.innerHTML === "X" || boxNine.innerHTML === "O") {
                                            if (win != "X" && win != "O") {
                                                winStatement.innerHTML = "Tie!";
                                                draws ++;
                                                drawScore.innerHTML = draws;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }
}

//Box onclick functions
boxOne.onclick = () => {
    if(turn === "X" && !isClicked(boxOne) && currentlyPlaying === true) {
        boxOne.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxOne) && currentlyPlaying === true) {
        boxOne.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxTwo.onclick = () => {
    if(turn === "X" && !isClicked(boxTwo) && currentlyPlaying === true) {
        boxTwo.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxTwo) && currentlyPlaying === true) {
        boxTwo.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxThree.onclick =  () => {
    if(turn === "X" && !isClicked(boxThree) && currentlyPlaying === true) {
        boxThree.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxThree) && currentlyPlaying === true) {
        boxThree.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxFour.onclick = () => {
    if(turn === "X" && !isClicked(boxFour) && currentlyPlaying === true) {
        boxFour.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxFour) && currentlyPlaying === true) {
        boxFour.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxFive.onclick = () => {
    if(turn === "X" && !isClicked(boxFive) && currentlyPlaying === true) {
        boxFive.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxFive) && currentlyPlaying === true) {
        boxFive.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxSix.onclick = () => {
    if(turn === "X" && !isClicked(boxSix) && currentlyPlaying === true) {
        boxSix.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxSix) && currentlyPlaying === true) {
        boxSix.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxSeven.onclick = () => {
    if(turn === "X" && !isClicked(boxSeven) && currentlyPlaying === true) {
        boxSeven.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxSeven) && currentlyPlaying === true) {
        boxSeven.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxEight.onclick = () => {
    if(turn === "X" && !isClicked(boxEight) && currentlyPlaying === true) {
        boxEight.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxEight) && currentlyPlaying === true) {
        boxEight.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

boxNine.onclick = () => {
    if(turn === "X" && !isClicked(boxNine) && currentlyPlaying === true) {
        boxNine.innerHTML = "X";
        turn = "O";
        checkWin();
    }
    else if (turn === "O" && !isClicked(boxNine) && currentlyPlaying === true) {
        boxNine.innerHTML = "O";
        turn = "X";
        checkWin();
    }
}

resetButton.addEventListener('click', resetGame);