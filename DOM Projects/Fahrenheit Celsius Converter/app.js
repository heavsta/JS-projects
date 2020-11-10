// Variables
const results = document.getElementById('results');
const input = document.getElementById('degrees');
const inverter = document.getElementById('arrows');

let numberOfClicks = 0;


// Event Listeners
inverter.addEventListener('click', addClick);


/*
 Functions
*/

// Main Function
function convert(degrees) {
    if(isEven(numberOfClicks) === true) {
            let celsius = ((degrees - 32) * 5/9).toFixed(2);
            results.value = `${celsius} °C`;
            if(input.value.length == 0) {
                results.value = '';
            }
    } else {
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
    console.log(numberOfClicks);
}