class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.weath = document.getElementById('w-weath');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }

    paint(data) {
        this.location.textContent = data.name;
        this.weath.textContent = data.weather[0].main;
        this.temp.textContent = `${data.main.temp}°C`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
        
        this.humidity.textContent = `Humidity: ${data.main.humidity}%`;
        this.feelsLike.textContent = `Feels like: ${data.main.feels_like}°C`;
        this.pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
        this.wind.textContent = `Wind: ${data.wind.speed} m/s`;
    }
}