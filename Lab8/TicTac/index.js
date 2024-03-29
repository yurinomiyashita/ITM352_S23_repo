//javascript 
//assinging variables 
// . indicates getting element by class, # indictaes getting elements by id 
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
//set conditions for win status, assume 
/*  assume table's number is below 
    0|1|2
    3|4|5
    7|8|9
 */
const winConditions = [
    [0, 1, 2],
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8],
    [2, 4, 6],  
];
let options = ["", "", "", "", "", "", "", "", ""]; 
let currentPlayer = "X";  //set current player with x and game starts with x
let running = false; 

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));  //clicking cell will recall cellClciked function
    restartBtn.addEventListener("click", restartGame); //restart button recalls restartGame function 
    statusText.textContent = `${currentPlayer}'s turn`;  //initial game player set and display
    running = true;
}

function cellClicked(){   //when cells are clicked 
    const cellIndex = this.getAttribute("cellIndex");     //getting cellIndex attribute from index.html

    if(options[cellIndex] != ""|| !running){     
        return; 
    }

    updateCell(this,cellIndex); //recall update cell function when the cellIndex is not empty string 
   // changePlayer();
    checkWinner();
}
function updateCell(cell,index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer; 
}
function changePlayer(){ //chnage current play after every click 
    currentPlayer = (currentPlayer == "X" )? "O":"X";
    statusText.textContent = `${currentPlayer}'s turn`;   //display the current player
}
function checkWinner(){
    let roundWon= false; 
//for loop to check winning condition 
    for(let i = 0; i<winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == ""||cellB ==""|| cellC ==""){   
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true; 
            break; 
        }
    }
    if (roundWon){    //if win condition match, and display winner 
        statusText.textContent = `${currentPlayer} wins!`;
        running = false; 
    }
    else if (!options.includes ("")){    //if above condition didn't meet, then display draw 
        statusText.textContent = `Draw!`;
        running = false; 
    }
    else {
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X"; 
    options = ["", "", "", "", "", "", "", "", ""]; 
    statusText.textContent = `${currentPlayer}'s turn`; 
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
