// Variables
const results = document.getElementById('results');
const input = document.getElementById('degrees');


// Functions
function convertToCelsius(farenheit) {
    let celsius = ((farenheit - 32) * 5/9).toFixed(2);
    results.value = `${celsius} °C`
    if(input.value.length == 0) {
        results.value = '';
    }
}