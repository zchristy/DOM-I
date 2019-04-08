let timer = document.querySelectorAll(".digit");

let secondTens = document.querySelector('#secondTens');

let secondOnes = document.querySelector('#secondOnes');

let colon = document.querySelector('#colon');

let msHundreds = document.querySelector('#msHundreds');

let msTens = document.querySelector('#msTens');

let secondTensCounter = 0;
  let sTens = window.setInterval(
    function() {
      secondTensCounter = secondTensCounter + 1;
      if(secondTensCounter > 9){
        secondTensCounter = 0;
        secondTens.innerHTML = secondTensCounter;
      } else {
        secondTens.innerHTML = secondTensCounter;
      }
    }, 10000);

let secondOnesCounter = 0;
  let sOnes = window.setInterval(
    function() {
      secondOnesCounter = secondOnesCounter + 1;
      if(secondOnesCounter > 9){
        secondOnesCounter = 0;
        secondOnes.innerHTML = secondOnesCounter;
        for (var i = 0; i < timer.length; i++) {
          timer[i].classList.add('redDigit');
        }
        clearInterval(tens);
        clearInterval(hundreds);
        clearInterval(blink);
        clearInterval(sOnes);
        clearInterval(sTens);
      } else {
        secondOnes.innerHTML = secondOnesCounter;
      }
    }, 1000);

let blink = setInterval( function() {
  colon.classList.toggle('blink');
}, 500);

let msHundredsCounter = 0;
  let hundreds = window.setInterval(
    function() {
      msHundredsCounter = msHundredsCounter + 1;
      if(msHundredsCounter >= 9){
        msHundredsCounter = 0;
        msHundreds.innerHTML = msHundredsCounter;
      } else {
        msHundreds.innerHTML = msHundredsCounter;
      }
    }, 100);

let msTensCounter = 0;
  let tens = window.setInterval(
    function() {
      msTensCounter = msTensCounter + 1;
      if(msTensCounter >= 9){
        msTensCounter = 0;
        msTens.innerHTML = msTensCounter;
      } else {
        msTens.innerHTML = msTensCounter;
      }
    }, 10);
