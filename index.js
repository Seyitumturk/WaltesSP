
console.log("Welcome to Waltes");


        // socket.on('connection', data =>{
        // console.log(data)
        // })

        // socket.on('gameCode', handleGameCode);

        // socket.on('chat-message', data => {
        // console.log(data)
        // })
        // // With emit we are sending an event and with socket, with .on we are actually receiving that message. 


// const gameScreen = document.getElementById('plate-flex');
// const initialScreen = document.getElementById('initialScreen');
// const newGameBtn = document.getElementById('newGameButton');
// const joinGameBtn = document.getElementById('joinGameButton');
// const gameCodeInput = document.getElementById('gameCodeInput');
// const gameCodeDisplay = document.getElementById('gameCodeDisplay');

// newGameBtn.addEventListener('click', newGame);
// joinGameBtn.addEventListener('click', joinGame);

// function newGame(){
//    socket.emit('newGame');
//    init();
// }

// function joinGame() {
//    const code = gameCodeInput.value;
//    socket.emit('joinGame', code);
//    init();
// }

// function handleGameCode(gameCode){
//    gameCodeDisplay.innerText = gameCode;

// } 



// function handleUnknownGame(){
//    reset();
//    alert('Unknown game code');
// }

// function handleTooManyPlayers()
// {
//    reset();
//    alert('This game is already in progress');

// }
   

// function reset(){
//    playerNumber = null;
//    gameCodeInput.value = "";
//    gameCodeDisplay.innerText = "";
//    initialScreen.style.display = 'flex';
//    gameScreen.style.display = "none";


// }




// // Game logic 



// function init(){

// initialScreen.style.display = 'none';
// gameScreen.style.display = 'flex';

//  }


var clicks = 0; 

let player1_score  = 0; 
let player2_score = 0;  

let player1_oldlady_count = 0;
let player2_oldlady_count = 0;

let player1_Waltes = false;
let player2_Waltes = false;

let totalNormalStickCount = 17;
let totalOldLadyCount = 3;
let totalOldManCount = 1; 


function shake(){




  

console.log(clicks);

var modulus_val = clicks % 2; 

const dice1 = Math.floor(Math.random() * 2);
const dice2 = Math.floor(Math.random() * 2);
const dice3 = Math.floor(Math.random() * 2);
const dice4 = Math.floor(Math.random() * 2);
const dice5 = Math.floor(Math.random() * 2);
const dice6 = Math.floor(Math.random() * 2);

let dice_sum = dice1 + dice2 + dice3 + dice4 + dice5 + dice6; 


const scoreTable1 = document.getElementById("player1-header");
const scoreTable2 = document.getElementById("player2-header");
const turnTracker = document.getElementById("turn-tracker");

const stickContainerOne = document.getElementById("stick-container1")
const stickContainerTwo = document.getElementById("stick-container2")





let pointImage = document.createElement("img");
pointImage.src = "Point.png";

let ladyPointImage = document.createElement("img");
ladyPointImage.src = "OldLady.png";

let manPointImage = document.createElement("img");
manPointImage.src = "OldMan.png";

let leftArrowImage = document.createElement('img')
leftArrowImage.src = "/arrow-left.png"
leftArrowImage.style = "width: 10vw;"

let rightArrowImage = document.createElement('img')
rightArrowImage.src = "/arrow-right.png"
rightArrowImage.style = "width: 10vw;"




// Determining the turn with turn tracker. 

// Trying to append and remove arrow images - pick up/





if (modulus_val == 0 ) {

      turnTracker.innerHTML = " Player 2's Turn";

}
else{

      turnTracker.innerHTML = " Player 1's Turn";

}

//Append the total stick counts 

//Game Rules to implement: once all old ladies are gone, first (all6) get old man
               // Once you get score, you keep going. This applies until you don't get a point and it applies for all the score types.   
               // Old lady: 5 points, 
               // OLd man: 7 points, 

let totalNormalStickCountElm = document.getElementById("tsc-normalStick-counter");
totalNormalStickCountElm.innerHTML = totalNormalStickCount; 


let totaloldLadyCountElm = document.getElementById("tsc-oldLadyStick-counter");
totaloldLadyCountElm.innerHTML = totalOldLadyCount;

let totaloldManCountElm = document.getElementById("tsc-oldManStick-counter");
totaloldManCountElm.innerHTML = totalOldManCount;
            


// FIRST ROUND OF THE GAME -- TO BE WORKED ON.

// Includes 4 different set of rules. 

if(totalOldManCount > 0){
   
      // Normal waltes for P2 
      if (modulus_val == 0 && (dice_sum == 5 || dice_sum == 1)){
         
         turnTracker.innerText = "Player 2 Waltes! ";

         stickContainerTwo.appendChild(pointImage)

         player2_score += 3;
         player2_Waltes = true; 


         setTimeout(clearText, 3000)
         function clearText(){
         turnTracker.innerText = "Player 2's Turn ";}


         totalNormalStickCount = totalNormalStickCount -1;

         
      }else if(!modulus_val !== 0 && (dice_sum == 5 || dice_sum == 1)){
         turnTracker.innerText = "Player 1's Turn ";}
         clicks +=1;
         player2_Waltes = false;
      }
    
      //Normal waltes for P1 
      if (modulus_val !== 0 && (dice_sum == 5 || dice_sum == 1)){

         turnTracker.innerText = "Player 1 Waltes! ";

         stickContainerOne.appendChild(pointImage)

         player1_score += 3;
         player1_Waltes = true;

         setTimeout(clearText, 3000)
         function clearText(){
         turnTracker.innerText = "Player 1's Turn ";}

   

         totalNormalStickCount = totalNormalStickCount -1;

      }
      //If not waltes, its other persons turn. 
      else if(!modulus_val == 0 && (dice_sum == 5 || dice_sum == 1)){

            turnTracker.innerText = "Player 2's Turn ";
            player1_Waltes = false;
            clicks +=1;

         }
      

      //OLD LADY -- 6/6 - 0/0

      //Old lady waltes for P2 
      if (modulus_val == 0 && (dice_sum == 6 || dice_sum == 0)){

  
         player2_score += 5;
         player2_oldlady_count += 1;
         window.alert("PLAYER 2 WALTES -- OLD LADY !!!" )

         player2_Waltes = true; 

         setTimeout(clearText, 2000)

         function clearText(){
            turnTracker.innerText = " ";
         }

         totalOldLadyCount = totalOldLadyCount -1;

         stickContainerTwo.appendChild(ladyPointImage)

      }

      //Old lady waltes for P1
      if (modulus_val !== 0 && (dice_sum == 6 || dice_sum == 0)){

         if(player1_oldlady_count >= 1  ){
            stickContainerOne.appendChild(manPointImage);
            stickContainerOne.removeChild(ladyPointImage)
            player1_oldlady_count == 0;
             
         }

         player1_score += 5;
         player1_oldlady_count += 1;
         window.alert("PLAYER 1 WALTES  -- OLD LADY !!!")

         player1_Waltes = true; 

         stickContainerOne.appendChild(ladyPointImage)
         totalOldLadyCount = totalOldLadyCount -1;
      }
else{
//SECOND PART OF THE GAME - ONCE THE OLD MAN IS GONE.  -- TO BE WORKED ON 


   if (modulus_val == 0 && (dice_sum == 5 || dice_sum == 1)){


         $('img:last-child',stickContainerOne).remove();

         stickContainerTwo.appendChild(pointImage)

         turnTracker.innerText = "Player 2 Waltes! ";

         player2_score += 3;

         setTimeout(clearText, 2000)

         function clearText(){
            turnTracker.innerText = "Player 1's Turn ";
         }

         
         player2_Waltes = true; 



      }
      //Normal waltes for P1 


      if (modulus_val !== 0 && (dice_sum == 5 || dice_sum == 1)){


         $('img:last-child',stickContainerTwo).remove();
         stickContainerOne.appendChild(pointImage)
         
         turnTracker.innerText = "Player 1 Waltes! ";


         setTimeout(clearText, 2000)

         function clearText(){
            turnTracker.innerText = "Player 2's turn";
         }


         player1_score += 3;
         player1_Waltes = true;

      }

      //Old lady waltes for P2 
      if (modulus_val == 0 && (dice_sum == 6 || dice_sum == 0)){

         if(player2_oldlady_count == 2 ){
            stickContainerOne.appendChild(manPointImage);
         }

         player2_score += 5;
         player2_oldlady_count += 1;
         window.alert("PLAYER 2 WALTES -- OLD LADY !!!" )

         player2_Waltes = true; 

         setTimeout(clearText, 2000)

         function clearText(){
            turnTracker.innerText = " ";
         }

         totalOldLadyCount = totalOldLadyCount -1;

         stickContainerTwo.appendChild(ladyPointImage)

      }

      //Old lady waltes for P1
      if (modulus_val !== 0 && (dice_sum == 6 || dice_sum == 0)){

         if(player1_oldlady_count >= 2 ){
            stickContainerOne.appendChild(manPointImage);
            player1_oldlady_count == 0; 
         }



         player1_score += 5;
         player1_oldlady_count += 1;
         window.alert("PLAYER 1 WALTES  -- OLD LADY !!!")

         player1_Waltes = true; 

         stickContainerOne.appendChild(ladyPointImage)
         totalOldLadyCount = totalOldLadyCount -1;
      }


}
console.log("Line");

console.log(dice1);
console.log(dice2);
console.log(dice3);
console.log(dice4);
console.log(dice5);
console.log(dice6);

console.log("Line End");


var dice_numbers  = document.getElementById("dice-numbers");

const dice0_element = document.getElementById("dice0");
const dice1_element = document.getElementById("dice1");
const dice2_element = document.getElementById("dice2");
const dice3_element = document.getElementById("dice3");
const dice4_element = document.getElementById("dice4");

if(dice1 == 1) {
   dice0_element.src = "Flat.png";
}

if(dice1 == 0) {
   dice0_element.src = "Star.png";
}

if(dice2 == 1) {
   dice1_element.src = "Flat.png";
}
if(dice2 == 0) {
   dice1_element.src = "Star.png";
}

if(dice3 == 1) {
  dice2_element.src = "Flat.png";
}

if(dice3 == 0) {
  dice2_element.src = "Star.png";
}

if(dice4 == 1) {
  dice3_element.src  = "Flat.png";
}

if(dice4 == 0) {
  dice3_element.src  = "Star.png";
}

if(dice5 == 1) {
   dice4_element.src = "Flat.png";
}

if(dice5 == 0) {
   dice4_element.src = "Star.png";
}

if(dice6 == 1) {
   star.src = "Flat.png";
}

if(dice6 == 0) {
   star.src = "Star.png";
}


scoreTable1.innerHTML = "Kisika: " + player1_score + " Kisikuwiskak " + player1_oldlady_count;
scoreTable2.innerHTML = "Kisika: " + player2_score + " Kisikuwiskak " + player2_oldlady_count;
return {dice1, dice2, dice3, dice4, dice5, dice6};

}