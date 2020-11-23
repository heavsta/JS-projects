class Weather {
    constructor(city, state) {
        this.apiKey = '8d409df75ab1a756b861b595af9fae58';
        this.city = city;
    }

    // Fetch weather from API (using OpenWeatherMap as wunderground api access is now restricted)
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        console.log(`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);


        const responseData = await response.json();

        return responseData;
    } 

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
    }   
}