document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value.trim();
    if (!city) {
        alert('Voer een stad in.');
        return;
    }

    const apiKey = '539acc6bd0df6cad18edc1e6ff7a7571';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('Stad niet gevonden.');
                return;
            }
            const weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = `
                <h3>Weer in ${data.name}</h3>
                <p>Temperatuur: ${data.main.temp} °C</p>
                <p>Weer: ${data.weather[0].description}</p>
                <p>Vochtigheid: ${data.main.humidity} %</p>
                <p>Wind snelheid: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Er is een fout opgetreden bij het ophalen van de weergegevens.');
        });
});
