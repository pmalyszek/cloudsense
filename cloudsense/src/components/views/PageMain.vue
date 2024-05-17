<template>
    <div id="content">
        <search-bar></search-bar>
        <div>
            <div id="helloMessage">
                {{ helloMessage }}
            </div>
        </div>
        <div id="weather" v-show="state.toggleView">
            <div id="dashboardLocation">
                <p v-show="state.toggleView"><span>{{ location.name }}</span>,<span>{{ location.country }}</span></p>
            </div>
            <div id="date">
                {{ currentWeather.date }}
            </div>
            <div id="weatherIcon">
                <img :src="currentWeather.icon" width="140px" height="140px" />
            </div>
            <div style="float: left">
                <div id="currentTemperature">
                    <p><span>{{ currentWeather.temperature }}</span> &deg;C</p>
                </div>
                <div id="weatherName">
                    {{ currentWeather.description }}
                </div>
            </div>
        </div>
        <div id="quote" v-show="state.toggleView">
            <p>{{ state.quoteContent }}</p>
            <p>~<span>{{ state.quoteAuthor }}</span></p>
        </div>
        <div>
            <template v-for="h of hours.data" :key="h.dt">
                <div class="forecast">

                    <div class="time">
                        {{ h.time }}
                    </div>
                    <div>
                        <img :src="h.icon" width="80px" height="90px" style="margin-left: 5px;"/>
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
import SearchBar from '/src/components/SearchBar.vue'
import axios from 'axios'
import state from '/src/state.js'
import { reactive, ref, onBeforeMount } from 'vue'

//reactives
const location = reactive(state.currentLocation)
const hours = reactive(state.hourlyWeather)
const currentWeather = reactive(state.currentWeather)

const helloMessage = ref(getHelloMessage())


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

onBeforeMount(() => {
    if(state.updateQuote == true){
        getDailyQuote()
    }
})

function getDailyQuote() {
    axios.get('https://api.quotable.io/quotes/random?limit=1')
        .then(function (response) {
            let quote = response.data[0]
            state.quoteContent = quote.content
            state.quoteAuthor = quote.author
            state.updateQuote = false
        })
        .catch(function (error) {
            console.log(error)
        })
}
</script>