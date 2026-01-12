# Projects related to DOM


# Solution code


## Project - 01 | JavaScript Background Color Switcher

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (eventListner) {
    switch (eventListner.target.id) {
      case 'grey':
        body.style.backgroundColor = eventListner.target.id;
        break;

      case 'orange':
        body.style.backgroundColor = eventListner.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = eventListner.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = eventListner.target.id;
        break;
    }
  });
});

```


## Project - 02 | BMI Calculator

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (redhood) {
  redhood.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let showMessage = '';

    if (bmi < 18.6) {
      showMessage = 'You are under weight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      showMessage = 'You are in normal range';
    } else {
      showMessage = 'You are over weight';
    }
    result.innerHTML = `<span>${bmi}</span> <br>${showMessage}`;
  }
});


```


## Project - 03 | Local Time Clock

```javascript

const clock = document.querySelector('#clock');

setInterval(function () {
  let time = new Date();

  clock.innerHTML = time.toLocaleTimeString();
}, 1000);

```

## Project - 04 | Guess The Number

```javascript

let randomNumGenerator = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const paragraph = document.createElement('paragraph');

let prevGuess = [];
let numOfGuesses = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(amin){
      amin.preventDefault()
      const guess = parseInt(userInput.value);
      validateGuess(guess)
  })
}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid number');
  } else if(guess < 1){
    alert('Please enter a number more than 1');
  } else if(guess > 100){
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if(numOfGuesses === 11){
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumGenerator}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumGenerator){
    displayMessage(`You guessed it right`);
    endGame();
  } else if(guess < randomNumGenerator){
    displayMessage(`Number is TOOOOO low`);
  } else if(guess > randomNumGenerator){
    displayMessage(`Number is TOOOOO high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},   `;
  numOfGuesses++; 
  remaining.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  paragraph.classList.add('button');
  paragraph.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(paragraph);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(amin){
    randomNumGenerator = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numOfGuesses}`;  
    userInput.removeAttribute('disabled');
    startOver.removeChild(paragraph);
    
    playGame = true;
  })
}


```


## Project 5 | Keyboard Check

```javascript

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```


## Project 6 | Unlimited Colors

```javascript

const randomColor = function () {
  const hexValue = '0123456789ABCDEF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID;

const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);


```