/* 
  Algorithm to follow for Game only: 
  
  -generate random number
  -user will type a number on input and press enter button.
  -take the input value when button is clicked or when enter button is clicked.
  -compare between user entered number and generate the result(HTML) to find result. 
  -modify the you have [chanceCount] number each time button is pressed. 
  -if count goes to 0 after user has entered, then generate an html sayin you lose.
  -if user enters correct number, display you win. you guessed the number in {chanceCount} chances. stop chance count and keep displaying
  -if invalid input is given, display an error message 
*/

function generateNum(){
  let randomNum = Math.round(Math.random() * 100 + 1);
  return randomNum;
}

//generated number
const numberToguess = generateNum();
console.log(numberToguess);


let chanceCount = 10;
function playGame(){
  //element for input
  const inputElement = document.querySelector('.js-number-input');
  let playerGuess = Number(inputElement.value); 
  const messageElement = document.querySelector('.js-result-message');

  //valid input 
  if(playerGuess > 0 && playerGuess <=100 && chanceCount>0){
      //winning case
      if(playerGuess === numberToguess){ 
        messageElement.innerHTML = `<div class ="final-decision">You win.</div>
                                  <div class="guess-message">Guessed in ${10-chanceCount +1} chance${(10-chanceCount+1) === 1 ? '':'s'}. </div>`;
        document.querySelector('.js-chance-message').innerHTML = ``;
      
      }
      else{  //losing case
          chanceCount--; 
          if(chanceCount === 0 ){
            messageElement.innerHTML = `<div class ="final-decision" >You lose.</div> 
                                        <div>Out of Chances</div>`;
                                      
            document.querySelector('.js-chance-message').innerHTML = `Chances: ${chanceCount}`;
          }
          else{
            if(playerGuess > numberToguess){
              messageElement.innerHTML =  `Incorect guess. Try guessing a smaller number.` ;
              document.querySelector('.js-chance-message').innerHTML = `Chances: ${chanceCount}`;
            }
            else{
              messageElement.innerHTML =  `Incorect guess. Try guessing a bigger number.` ;
              document.querySelector('.js-chance-message').innerHTML = `Chances: ${chanceCount}`;
            }  
          }         
      }
  }
  else{  //invalid input
    messageElement.innerHTML = `<div class ="Error-decision">Enter a valid number.</div>`;
  }
  inputElement.value = '';
}

//onclick event for check button
document.querySelector('.js-enter-button').addEventListener('click',playGame);

//key down event for number input
document.querySelector('.js-number-input').addEventListener('keydown',(event) => { 
  if(event.key === 'Enter'){
    playGame();
  }
})

//Render No of chances(intially)
document.querySelector('.js-chance-message').innerHTML = `Chances: ${chanceCount}`;