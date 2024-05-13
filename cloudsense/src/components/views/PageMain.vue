<template>
    <div id="content">
        <div>
            <div id="searchBar">
				<!--TODO: Link to app endpoint, where location search is triggered.-->
				<a href="https://www.google.com/">
					<div id="searchBarIcon">
						<img src="/src/components/images/navigation/magnifierIcon.svg" width="30" height="30"/>
					</div>
				</a>
				<input id="searchBarInput" type="text" placeholder="Search for location">
			</div>
            <!--TODO: Changing the div content acording to time.-->
            <div id="helloMessage">
                {{ helloMessage }}
            </div>
        </div>
        <div id="weather">
            <div id="dashboardLocation">
                {{ locationName }}
            </div>
            <!--TODO: Changing the div content acording to current date.-->
            <div id="date">
                {{ date }}
            </div>
            <div id="weatherIcon">
                <!--TODO: Changing the 'src' attribute value according to current weather in currently selected location.-->
                <img src="/src/components/images/weather/cloudyIcon.svg" width="188px" height="188px" />
            </div>
            <div style="float: left">
                <!--TODO: Changing the div content according to current weather in currently selected location.-->
                <div id="currentTemperature">
                    <p><span>{{ temperature }}</span> &deg;C</p>
                </div>
                <!--TODO: Changing the div content according to current weather in currently selected location.-->
                <div id="weatherName">
                    {{ description }}
                </div>
            </div>
        </div>
        <!--TODO: Changing the div content according to quote returned by an API.-->
        <div id="quote">
            <p>{{ quoteContent }}</p>
            <p>~<span>{{ qouteAuthor }}</span></p>
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
import { ref, watch } from 'vue'

const startCoordinates = {
    name: "Barcelona",
    country: "ES",
    lat: '41.3828939',
    lon: '2.1774322'
}
const locationName = ref(startCoordinates.name)
const date = ref(new Date(1715543296*1000).toDateString())
const temperature = ref("10")
const description = ref('Cloudy')
const helloMessage = ref(getHelloMessage())

const quoteContent = ref('')
const qouteAuthor = ref('')

function getHelloMessage() {
    let now = new Date()
    let hours = now.getHours()
    let message = "Good morning"
    if(hours >= 18 ) {
        message = 'Good evening'
    } else if(hours >= 12) {
        message =  'Good afternoon'
    }

    return message
}
function getWeather() {
//https://api.openweathermap.org/data/3.0/onecall


axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            lat: startCoordinates.lat,
            lon: startCoordinates.lon,
            units: 'metric',
            appid: '3fe22def2b2541db31e4232b76706783'
        }
    })
        .then(function (response) {
            let weatherData = response.data

            let coordinates = weatherData.coord
            let generalWeather = weatherData.weather[0]
            let mainWeather = weatherData.main
            let wind = weatherData.wind
            let rain = weatherData.rain

            console.log(generalWeather)
            
            let tempDay = new Date(weatherData.dt*1000)
            date.value = tempDay.toDateString()
            temperature.value = Math.round(mainWeather.temp)
            let tempDesc = generalWeather.description
            description.value = tempDesc.charAt(0).toUpperCase() + tempDesc.slice(1)

            locationName.value = startCoordinates.name
        })
        .catch(function (error) {
            console.log(error)
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
            let location = response.data[0]
            startCoordinates.lat = location.lat
            startCoordinates.lon = location.lon
            startCoordinates.name = location.name
            startCoordinates.country = location.country
            // console.log(location)
            getWeather()
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            // always executed
        });
}

function getDailyQuote() {
    axios.get('https://api.quotable.io/quotes/random?limit=1')
        .then(function (response) {
            let quote = response.data[0]
            console.log(quote)
            quoteContent.value = quote.content
            qouteAuthor.value = quote.author
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            // always executed
        });
}

getDailyQuote()

setTimeout(()=>{
    getLocation('Warszawa')
}, 3000)
// watch(locationName)

</script>