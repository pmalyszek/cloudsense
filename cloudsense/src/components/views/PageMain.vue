<template>
    <div id="content">
        <div>
            <!--TODO: Figure out how to implement search bar.-->
            <div id="searchBar">
                searchBar
            </div>
            <!--TODO: Changing the div content acording to time.-->
            <div id="message">
                Good Morning !!!
            </div>
        </div>
        <div id="weather">
            <!--TODO: Changing the div content acording to currently selected location.-->
            <div id="location">
                {{ locationName }}
            </div>
            <!--TODO: Changing the div content acording to current date.-->
            <div id="date">
                2024-05-10
            </div>
            <div id="weatherIcon">
                <!--TODO: Changing the 'src' attribute value according to current weather in currently selected location.-->
                <img src="/src/components/images/weather/cloudyIcon.svg" width="188px" height="188px" />
            </div>
            <div style="float: left">
                <!--TODO: Changing the div content according to current weather in currently selected location.-->
                <div id="currentTemperature">
                    10 &deg;C
                </div>
                <!--TODO: Changing the div content according to current weather in currently selected location.-->
                <div id="weatherName">
                    Cloudy
                </div>
            </div>
        </div>
        <!--TODO: Changing the div content according to quote returned by an API.-->
        <div id="quote">
            A change in the weather is sufficient to recreate the world and ourselves. ~ Marcel Proust
        </div>
        <div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    11:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    12:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    13:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    14:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    15:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    16:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    17:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    18:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    19:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
            <div class="forecast">
                <!--TODO: Changing the div content according to information displayed in parent div.-->
                <div class="time">
                    20:00
                </div>
                <div>
                    <!--TODO: Changing the 'src' attribute value according to predicted weather-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="90px" height="90px" />
                </div>
                <!--TODO: Changing the div content according to predicted temperature-->
                <div class="predictedTemperature">
                    10 &deg;C
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
const startCoordinates = {
    name: "Barcelona",
    country: "ES",
    lat: '41.3828939',
    lon: '2.1774322'
}
const locationName = ref(startCoordinates.name);

function getWeather() {

    axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: startCoordinates.lat,
            lon: startCoordinates.lon,
            units: 'metric',
            appid: '3fe22def2b2541db31e4232b76706783'
        }
    })
        .then(function (response) {
 
            var coordinates = response.coord;
            var generalWeather = response.weather;
            var mainWeather = response.main;
            var wind = response.wind;
            var rain = response.rain;

            locationName.value = startCoordinates.name
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

function getLocation(cityName) {

    axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: cityName,
            appid: '3fe22def2b2541db31e4232b76706783'
        }
    })
        .then(function (response) {
            let location = response.data[0];
            startCoordinates.lat = location.lat;
            startCoordinates.lon = location.lon;
            startCoordinates.name = location.name;
            startCoordinates.country = location.country;
            // getWeather();
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}
// getLocation("Warszawa")
// getWeather();


</script>