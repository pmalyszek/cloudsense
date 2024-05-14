<template>
    <div class="wrapper">
        <page-navigation></page-navigation>
        <search-bar></search-bar>
        <page-main>
            <router-view></router-view>
        </page-main>
        <!-- <div id="test">{{ answer }}</div> -->
    </div>

</template>

<script setup>
// import PageMain from './components/views/PageMain.vue'
import PageNavigation from './components/PageNavigation.vue'
import { ref } from 'vue'

</script>

<script>
import axios from 'axios'
import apiResponse from '/src/assets/weatherSample.json'

export default {
    name: "App",
    data() {
        return {
            answer: {},
        };
    },
    methods: {
        async getWeather() {
            const { data } = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=41.3828939&lon=2.1774322&units=metric&appid=e02eca1e933fe1a76c25135ca7d804c0');
            var coordinates = apiResponse.coord;
            var generalWeather = apiResponse.weather;
            var mainWeather = apiResponse.main;
            var wind = apiResponse.wind;
            var rain = apiResponse.rain;
            this.answer = data;

        },
        async getLocation(cityName) {
            let url = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=3fe22def2b2541db31e4232b76706783'
            // console.log(url);
            let location = await axios.get(url);
            console.log(location.data[0]);
            return location.data[0];
        }
    },
    // beforeMount() {
    //     this.getWeather();
    // },
};

</script>