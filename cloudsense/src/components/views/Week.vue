<template>
    <div id="content">
        <search-bar></search-bar>
        <div>
            <div class="emptyBlock"></div>
        </div>
        <div id="week">
            <div id="location" >
                <p v-show="state.toggleView"><span>{{ location.name }}</span>,<span>{{ location.country }}</span></p>
            </div>
            <div id="dateRange">
                <p v-show="state.toggleView"><span>{{ weekStart }}</span> - <span>{{ weekEnd }}</span></p>
            </div>
            <div id="graph">
            </div>
            <template v-for="wd of weekdays.data">
                <div class="weekday">
                    <div class="weekdayName">
                        {{ wd.day }}
                    </div>
                    <div class="temperature">
                        <p><span>{{ wd.temp }}</span>&deg;C</p>
                    </div>
                    <div class="weatherIcon">
                        <img :src="wd.icon" width="90px" height="90px" />
                    </div>
                    <div class="weatherName">
                        {{ wd.description }}
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import SearchBar from '/src/components/SearchBar.vue'
import { ref, reactive } from 'vue'
import state from '/src/state.js'
import { drawChart } from '/src/useMethods.js';

const weekdays = ref(state.weeklyWeather)
const location = reactive(state.currentLocation)

const weekStart = ref(new Date().toLocaleDateString())
let today = new Date()
today.setDate(today.getDate()+6)
const weekEnd = ref(today.toLocaleDateString())

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

</script>
