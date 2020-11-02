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
        // Game Over - WON
        gameOver(true, `${winningNum} is correct, You Win!`)

    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            //Game Over - LOST
            gameOver(false, `Game Over, You Lost! The correct number was ${winningNum}`)

        } else {
            // Game keeps on - answer wrong

            // Change border color
            UIguessInput.style.borderColor = 'red';

            // Clear Input
            UIguessInput.value = '';

            // Tell user it is the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guess(es) left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    UIguessInput.disabled = true;
    // Change border color
    UIguessInput.style.borderColor = color;
    // Set message
    setMessage(msg, color);
}

// Set message
function setMessage(msg, color){
    UImessage.style.color = color;
    UImessage.textContent = msg;
}