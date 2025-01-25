let boxes = document.querySelectorAll(".box"); //for accessing every button  
let resetBtn = document.querySelector(".reset-btn"); // reset game button access
let newGameBtn = document.querySelector(".new-game"); //new game button access
let msgContainer = document.querySelector(".msgCon"); //winner or draw text prompt and new game button 
let msg = document.querySelector("#msg"); //printing winner 




let turn = true; //for letting know whose turn it is 'X' or 'O'
const winnerPatterns = [  //array containing all possible winning patterns
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


//turning each box value 'X' and 'O' simultaneously and diabling them once clicked
let count= 0; //needed to know if it's a draw or not
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        
        if(turn){
            box.innerText= "0";
            turn=false;
            count++;
            console.log(count);
        }
        else{
            box.innerText= "X";
            turn=true;
            count++;
            console.log(count);
        }
        box.disabled =true;    //for avoiding refilling     
        checkWinner();
        if (count == 9){       //draw checking 
            msg.innerText = `Both played well. It's a Draw!`;
            msgContainer.classList.remove("hide");}
            
    });
});



const showWinner = (winner) => {  //Printing Winner 
    msg.innerText = `Congratulations, Winner is: "${winner}"`
    msgContainer.classList.remove("hide");
};

const disableButtons = () => {  //disabling all buttons at once 
    for (let box of boxes){
        box.disabled = true;
    };
};

const enableButtons = () => { //enabling all buttons at once and reseting texts in each button
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    };
};



const checkWinner = () => { //Constant checking for winner by matching patterns from array 
    
    for(let pattern of winnerPatterns){
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            };
        };
    };
};

const resetGame = () => { //reseting full game 
    turn = true;
    enableButtons();
    msgContainer.classList.add("hide");
    count=0;
};

newGameBtn.addEventListener("click", resetGame); //enabling all buttons and hiding winner msg and new game button 
resetBtn.addEventListener("click", resetGame); //just reseting the game 