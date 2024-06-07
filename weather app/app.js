// app.js
async function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const cityName = cityInput.value.trim();

  if (!cityName) {
    alert("Please enter a city name");
    return;
  }

  try {
    const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found");
      return;
    }

    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
            <p>City: ${data.name}, ${data.sys.country}</p>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("An error occurred while fetching weather data");
  }
}
