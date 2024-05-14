<template>
    <div id="content">
        <div>
            <div id="searchBar">
                <a @click="getLocation">
                    <div id="searchBarIcon">
                        <img src="/src/components/images/navigation/magnifierIcon.svg" width="30" height="30" />
                    </div>
                </a>
                <input id="searchBarInput" type="text" placeholder="Search for location" @keydown.enter="getLocation">
            </div>
            <div id="helloMessage">
                {{ helloMessage }}
            </div>
        </div>
        <div id="weather">
            <div id="dashboardLocation">
                {{ locationName }}
            </div>
            <div id="date">
                {{ date }}
            </div>
            <div id="weatherIcon">
                <img :src="currentMainImage" width="188px" height="188px" />
            </div>
            <div style="float: left">
                <div id="currentTemperature">
                    <p><span>{{ temperature }}</span> &deg;C</p>
                </div>
                <div id="weatherName">
                    {{ description }}
                </div>
            </div>
        </div>
        <div id="quote">
            <p>{{ quoteContent }}</p>
            <p>~<span>{{ qouteAuthor }}</span></p>
        </div>
        <div>
            <template v-for="h, index of hours" :key="h.dt">
                <div class="forecast">

                    <div class="time">
                        {{ h.time }}
                    </div>
                    <div>
                        <img :src="h.icon" width="90px" height="90px" />
                    </div>
                    <div class="predictedTemperature">
                        <p><span>{{ h.temp }}</span>&deg;C</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios'
import state from '/src/state.js'
import { reactive, ref, watch } from 'vue'

const startCoordinates = {
    name: "Barcelona",
    country: "ES",
    lat: '41.3828939',
    lon: '2.1774322'
}

const hourlyCondition = {
    time: '00:00',
    temp: 5,
    description: "sunny",
    icon: 'https://openweathermap.org/img/wn/04n@2x.png'
}

const dailyCondition = {
    time: 'Mon',
    temp: 5,
    description: "sunny",
    icon: 'https://openweathermap.org/img/wn/04n@2x.png'
}
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//reactives
const locationName = ref(startCoordinates.name)
const date = ref(new Date(1715543296 * 1000).toDateString())
const temperature = ref("10")
const description = ref('Cloudy')
const helloMessage = ref(getHelloMessage())
const hours = ref([hourlyCondition, hourlyCondition])

const currentMainImage = ref("/src/components/images/weather/cloudyIcon.svg")
const iconAddressStart = 'https://openweathermap.org/img/wn/'
const iconAddressEnd = '@2x.png'

const quoteContent = ref('')
const qouteAuthor = ref('')

function getHelloMessage() {
    let now = new Date()
    let hours = now.getHours()
    let message = "Good morning"
    if (hours >= 18 || hours <= 4) {
        message = 'Good evening'
    } else if (hours >= 12) {
        message = 'Good afternoon'
    }

    return message
}
function getWeather() {

    axios.get('https://api.openweathermap.org/data/3.0/onecall', {
        params: {
            lat: startCoordinates.lat,
            lon: startCoordinates.lon,
            units: 'metric',
            exclude: 'minutely',
            appid: 'e02eca1e933fe1a76c25135ca7d804c0'
        }
    })
        .then(function (response) {

            let weatherData = response.data
            let currentWeather = weatherData.current

            let hourlyWeather = weatherData.hourly
            let dailyWeather = weatherData.daily

            setCurrentWeather(currentWeather)
            setHourlyWeather(hourlyWeather.slice(1, 11))
            setDailyWeather(dailyWeather.slice(0,7))

            locationName.value = startCoordinates.name
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            // always executed
        });
}

function setCurrentWeather(currentWeather) {
    let tempDay = new Date(currentWeather.dt * 1000)
    date.value = tempDay.toDateString()
    temperature.value = Math.round(currentWeather.temp)
    let tempDesc = currentWeather.weather[0].description
    description.value = tempDesc.charAt(0).toUpperCase() + tempDesc.slice(1)
    currentMainImage.value = iconAddressStart + currentWeather.weather[0].icon + iconAddressEnd
}

function setHourlyWeather(hourlyWeather) {
    let newHourlyWeather = []
    hourlyWeather.forEach(hourW => {
        let hour = new Date(hourW.dt * 1000).toLocaleTimeString().slice(0, 5)
        let temp = Math.round(hourW.temp)
        let description = hourW.weather[0].description
        description = description.charAt(0).toUpperCase() + description.slice(1)
        let icon = iconAddressStart + hourW.weather[0].icon + iconAddressEnd
        let hourWeather = { time: hour, temp: temp, description: description, icon: icon }
        newHourlyWeather.push(hourWeather)

    });
    hours.value = newHourlyWeather
}

function setDailyWeather(dailyWeather) {
    let newDailyWeather = []
    dailyWeather.forEach(dailyW => {
        let day = weekday[new Date(dailyW.dt * 1000).getDay()]
        let temp = Math.round(dailyW.temp.day)
        let description = dailyW.weather[0].description
        description = description.charAt(0).toUpperCase() + description.slice(1)
        let icon = iconAddressStart + dailyW.weather[0].icon + iconAddressEnd
        let dayWeather = { day: day, temp: temp, description: description, icon: icon }
        newDailyWeather.push(dayWeather)
    })
    state.weeklyWeather = newDailyWeather
}

function getLocation() {

    let cityName = document.getElementById("searchBarInput").value

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

</script>