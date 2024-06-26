<template>
    <div id="searchBar" style="float: left;">
        <a @click="getLocationByName">
            <div id="searchBarIcon">
                <img src="/src/components/images/navigation/magnifierIcon.svg" width="24" height="24" />
            </div>
        </a>
        <input id="searchBarInput" type="text" placeholder="Search for location" @keydown.enter="getLocationByName">
    </div>
</template>

<script setup>
import axios from 'axios'
import state from '/src/state.js'
import { useRoute } from 'vue-router'
import { drawChart } from '/src/useMethods.js'
import { onBeforeMount } from 'vue'

const route = useRoute()

const iconAddressStart = '/src/components/icons/'

const iconAddressEnd = '.svg'
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getWeather() {

    axios.get('https://api.openweathermap.org/data/3.0/onecall', {
        params: {
            lat: state.currentLocation.lat,
            lon: state.currentLocation.lon,
            units: state.units,
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

            if (route.path == "/week") {
                drawChart()
            }
            state.toggleView = true

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
    state.currentWeather.icon = iconAddressStart + currentW.weather[0].icon.slice(0,2) + iconAddressEnd
}

function setHourlyWeather(hourlyW) {
    let newHourlyWeather = []
    hourlyW.forEach(hourW => {
        let hour = new Date(hourW.dt * 1000).toLocaleTimeString().slice(0, 5)
        let temp = Math.round(hourW.temp)
        let description = hourW.weather[0].description
        description = description.charAt(0).toUpperCase() + description.slice(1)
        let icon = iconAddressStart + hourW.weather[0].icon.slice(0,2) + iconAddressEnd
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
        let icon = iconAddressStart + dailyW.weather[0].icon.slice(0,2) + iconAddressEnd
        let dayWeather = { day: day, temp: temp, description: description, icon: icon }
        newDailyWeather.push(dayWeather)
    })
    state.weeklyWeather.data = newDailyWeather
}

function getLocationByName() {

    let cityName = document.getElementById("searchBarInput").value
    if (cityName == "") {
        cityName = "London"
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
}

function getLocationByCoordinates(position) {

    axios.get('http://api.openweathermap.org/geo/1.0/reverse', {
        params: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
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
    
}

onBeforeMount(() => {
    getBrowserLocation()
    console.log(state.updateMetric)
    if(state.updateMetric) {
        getWeather()
    }

})


function getBrowserLocation() {
    if (state.currentLocation.name == "") {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocationByCoordinates);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

}
</script>