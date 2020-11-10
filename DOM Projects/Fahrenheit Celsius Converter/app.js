// Variables
const results = document.getElementById('results');
const input = document.getElementById('degrees');
const inverter = document.getElementById('arrows');
const toConvert = document.getElementById('toConvert');
const converted = document.getElementById('converted');
const icon = document.querySelector('i');

let numberOfClicks = 0;


// Event Listeners
inverter.addEventListener('click', () => {
    addClick();
    invertParameters();
    animateParameters();
});


/*
 Functions
*/

// Main Function
function convert(degrees) {
    if(isEven(numberOfClicks) === true) {
        // Convert to Celsius
        let celsius = ((degrees - 32) * 5/9).toFixed(2);
        results.value = `${celsius} °C`;
        if(input.value.length == 0) {
            results.value = '';
        }
    } else {
        // Convert to Fahrenheit
        let fahrenheit = ((degrees * 9/5) +32).toFixed(2);
        results.value = `${fahrenheit} °F`;
        if(input.value.length == 0) {
            results.value ='';
        }
    }
}

// Check if value is even or odd
function isEven(value) {
    if (value%2 == 0) {
        return true;
    } else {
        return false;
    }
}

// Add +1 for each click
function addClick() {
    numberOfClicks ++;
}

// Invert the Parameters
function invertParameters() {
    if(isEven(numberOfClicks) === true) {
        toConvert.innerHTML = 'Fahrenheit';
        converted.innerHTML = 'Celsius';
        // Clean input & result
        input.value = '';
        results.value = '';
    } else {
        toConvert.innerHTML = 'Celsius';
        converted.innerHTML = 'Fahrenheit';
        // Clean input & result
        input.value = '';
        results.value = '';
    }
}

// Animate Parameters
function animateParameters() {
    toConvert.classList.remove('animation');
    converted.classList.remove('animation');
    window.requestAnimationFrame(function() {
        toConvert.classList.add('animation');
        converted.classList.add('animation');
      });
}