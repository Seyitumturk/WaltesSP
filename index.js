
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

// Global vars



var clicks = 0; 

let player1_score  = 0; 
let player2_score = 0;  


let player1_oldlady_count = 0;
let player2_oldlady_count = 0;


let player1_oldMan_count = 0;
let player2_oldMan_count = 0;

let player1_Waltes = false;
let player2_Waltes = false;

let remainingSticks = 17;
let remainingLadySticks = 3; 
let oldManStick = 1;



function shake(){



clicks += 1; 

console.log(clicks);

var modulus_val = clicks % 2; 

const dice1 = Math.floor(Math.random() * 2);
const dice2 = Math.floor(Math.random() * 2);
const dice3 = Math.floor(Math.random() * 2);
const dice4 = Math.floor(Math.random() * 2);
const dice5 = Math.floor(Math.random() * 2);
const dice6 = Math.floor(Math.random() * 2);

let dice_sum = dice1 + dice2 + dice3 + dice4 + dice5 + dice6; 


let pointImage = document.createElement("img");
pointImage.id ="point-img"
pointImage.src = "Point.png";

let ladyPointImage = document.createElement("img");
ladyPointImage.id ="ledy-point-img"
ladyPointImage.src = "OldLady.png";

let manPointImage = document.createElement("img");
manPointImage.id ="man-point-img"
manPointImage.src = "OldMan.png";



// Element creation 

const scoreTable1 = document.getElementById("player1-header");
const scoreTable2 = document.getElementById("player2-header");
const turnTracker = document.getElementById("turn-tracker");

const stickContainerOne = document.getElementById("stick-container1")
const stickContainerTwo = document.getElementById("stick-container2")

const pointStickCounter = document.getElementById("pointDivCounter");
const ladyStickCounter = document.getElementById("ladyDivCounter");
const oldManStickCounter = document.getElementById("oldManDivCounter");


const winTextContainer = document.getElementById("winText");

pointStickCounter.innerHTML = remainingSticks;
ladyStickCounter.innerHTML = remainingLadySticks;
oldManStickCounter.innerHTML = oldManStick;



winTextContainer.textContent = "Lorem Ipsum is simply dummy text "   ;


setTimeout(gapDelay, 500)


function gapDelay(){
   winTextContainer.innerText = " ";

}

// Determining the turn with turn tracker. 

if (modulus_val == 0 ) {

   turnTracker.innerHTML = " Player 1's Turn: "

}
else{
      turnTracker.innerHTML = " Player 2's Turn: "

}

// Normal waltes for P2 
if (modulus_val == 0 && (dice_sum == 5 || dice_sum == 1)){


   remainingSticks -= 1;
   player2_score += 3;

   player2_Waltes = true; 
   console.log(player2_Waltes)

   stickContainerTwo.appendChild(pointImage)

   winTextContainer.innerText = " PLAYER 2 WALTES!";

   setTimeout(waitForIt, 1000);

   function waitForIt(){
      winTextContainer.innerText = " ";

   }


}else{
   player2_Waltes = false; 
   console.log(player2_Waltes)


}
//Normal waltes for P1 
 if (modulus_val !== 0 && (dice_sum == 5 || dice_sum == 1)){


   remainingSticks -= 1;
   player1_score += 3;

   player1_Waltes = true;
   console.log(player1_Waltes)


   stickContainerOne.appendChild(pointImage)

   winTextContainer.innerText = "PLAYER 1 WALTES!";

   setTimeout(waitForIt, 1000);

   function waitForIt(){
      winTextContainer.innerText = " ";


   }

} else{
   player1_Waltes = false; 
   console.log(player1_Waltes)


}


//Old lady waltes for P2 
if (modulus_val == 0 && (dice_sum == 6 || dice_sum == 0)){

   player2_score += 5;
   player2_oldlady_count += 1;
   remainingLadySticks -= 1;

   window.alert("PLAYER 2 WALTES -- OLD LADY !!!" )


   player2_Waltes = true; 

   stickContainerTwo.appendChild(ladyPointImage)

}

//Old lady waltes for P1
if (modulus_val !== 0 && (dice_sum == 6 || dice_sum == 0)){


   player1_score += 5;
   player1_oldlady_count += 1;
   remainingLadySticks -= 1;

   window.alert("PLAYER 1 WALTES  -- OLD LADY !!!")

   player1_Waltes = true; 

   stickContainerOne.appendChild(ladyPointImage)

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




scoreTable1.innerHTML = "Score: " + player1_score + " Ladies " + player1_oldlady_count;
scoreTable2.innerHTML = "Score: " + player2_score + " Ladies " + player2_oldlady_count;
return {dice1, dice2, dice3, dice4, dice5, dice6, pointStickCounter, ladyStickCounter, oldManStickCounter};

}



