<template>
    <div id="searchBar" style="float: left;">
        <a @click="getLocation">
            <div id="searchBarIcon">
                <img src="/src/components/images/navigation/magnifierIcon.svg" width="30" height="30" />
            </div>
        </a>
        <input id="searchBarInput" type="text" placeholder="Search for location" @keydown.enter="getLocation">
    </div>
</template>

<script setup>
import axios from 'axios'
import state from '/src/state.js'
import { useRoute } from 'vue-router';
import { drawChart } from '/src/useMethods.js';

const route = useRoute()

const iconAddressStart = 'https://openweathermap.org/img/wn/'
const iconAddressEnd = '@2x.png'
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getWeather() {

    axios.get('https://api.openweathermap.org/data/3.0/onecall', {
        params: {
            lat: state.currentLocation.lat,
            lon: state.currentLocation.lon,
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
            setDailyWeather(dailyWeather.slice(0, 7))

            if(route.path == "/week"){
                drawChart()
            }
            

        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            // always executed
        })
}

function setCurrentWeather(currentW) {
    let tempDay = new Date(currentW.dt * 1000)
    state.currentWeather.date = tempDay.toDateString()
    state.currentWeather.temperature = Math.round(currentW.temp)
    let tempDesc = currentW.weather[0].description
    state.currentWeather.description = tempDesc.charAt(0).toUpperCase() + tempDesc.slice(1)
    state.currentWeather.icon = iconAddressStart + currentW.weather[0].icon + iconAddressEnd
}

function setHourlyWeather(hourlyW) {
    let newHourlyWeather = []
    hourlyW.forEach(hourW => {
        let hour = new Date(hourW.dt * 1000).toLocaleTimeString().slice(0, 5)
        let temp = Math.round(hourW.temp)
        let description = hourW.weather[0].description
        description = description.charAt(0).toUpperCase() + description.slice(1)
        let icon = iconAddressStart + hourW.weather[0].icon + iconAddressEnd
        let hourWeather = { time: hour, temp: temp, description: description, icon: icon }
        newHourlyWeather.push(hourWeather)
    })

    state.hourlyWeather.data = newHourlyWeather
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
    state.weeklyWeather.data = newDailyWeather
}

function getLocation() {

    let cityName = document.getElementById("searchBarInput").value
    if(cityName == ""){
        cityName = "Lublin"
    }

    axios.get('http://api.openweathermap.org/geo/1.0/direct', {
        params: {
            q: cityName,
            appid: '3fe22def2b2541db31e4232b76706783'
        }
    })
        .then(function (response) {
            let location = response.data[0]
            state.currentLocation.lat = location.lat
            state.currentLocation.lon = location.lon
            state.currentLocation.name = location.name
            state.currentLocation.country = location.country
            getWeather()
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {
            // always executed
        })
}

// onMounted(() => {
//     getLocation();
// })


</script>