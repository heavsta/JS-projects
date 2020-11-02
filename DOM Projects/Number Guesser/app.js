// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessInput = document.querySelector('#guess-input'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UImessage = document.querySelector('.message');

// Assign UI min & max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function() {
    let guess = parseInt(UIguessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum) {
        // Disable input
        UIguessInput.disabled = true;
        // Change border color
        UIguessInput.style.borderColor = 'green';
        // Set message
        setMessage(`${winningNum} is correct, You Win!`, 'green');
    }
});

// Set message
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}