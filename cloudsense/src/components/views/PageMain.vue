<template>
    <div id="content">
        <search-bar></search-bar>
        <div>
            <div id="helloMessage">
                {{ helloMessage }}
            </div>
        </div>
        <div id="weather">
            <div id="dashboardLocation">
                {{ location.name }}
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
        <div id="quote">
            <p>{{ quoteContent }}</p>
            <p>~<span>{{ qouteAuthor }}</span></p>
        </div>
        <div>
            <template v-for="h of hours.data" :key="h.dt">
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
import SearchBar from '/src/components/SearchBar.vue'
import axios from 'axios'
import state from '/src/state.js'
import { reactive, ref, onMounted } from 'vue'

//reactives
const location = reactive(state.currentLocation)
const hours = reactive(state.hourlyWeather)
const currentWeather = reactive(state.currentWeather)

const helloMessage = ref(getHelloMessage())

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
        })
}

onMounted(() => {
    getDailyQuote()
})

</script>