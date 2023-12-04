document.querySelector('button').addEventListener('click', function updateWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '493ba623ff6b083d1c8b27168384d90e';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('pressure').innerText = `Pressure: ${data.main.pressure} hPa`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s, Direction: ${data.wind.deg}°`;

            const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            document.getElementById('icon').src = iconUrl;

            const currentDate = new Date();
            const lastUpdate = `Last Update: ${currentDate.toLocaleString()}`;
            document.getElementById('last-update').innerText = lastUpdate;
        })
        .catch(error => console.error('Error fetching weather data:', error));

})






