<template>
    <div id="content">
        <div id="searchBar">
            <!--TODO: Link to app endpoint, where location search is triggered.-->
            <a href="https://www.google.com/">
                <div id="searchBarIcon">
                    <img src="/src/components/images/navigation/magnifierIcon.svg" width="30" height="30" />
                </div>
            </a>
            <input id="searchBarInput" type="text" placeholder="Search for location">
        </div>
        <div id="week">
            <!--TODO: Changing the div content acording to currently selected location.-->
            <div id="location">
                Kraków, Poland
            </div>
            <!--TODO: Changing the div content acording to date range of current week.-->
            <div id="dateRange">
                2024-05-06 - 2024-05-12
            </div>
            <!--TODO: Figure out how to implement a graph.-->
            <div id="graph">
                graph
            </div>
            <template v-for="wd of weekdays">
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

import { ref } from 'vue'
import state from '/src/state.js'

const weekdays = ref(state.weeklyWeather)

			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart);
			function drawChart() {
				// TODO: Below table shall be updated with the according temperature values.
				var data = google.visualization.arrayToDataTable([
				['Time', 'Pressure'],
				['MON',  10],
				['TUE',  11],
				['WED',  12],
				['THUR',  13],
				['FRI',  14],
				['SAT',  15],
				['SUN',  16]
				]);
				var options = {
					fontSize: 20,
					backgroundColor: '#eeeeee',
					hAxis: {textStyle: {color: '#e4750e'}},
					vAxis: {textStyle: {color: '#e4750e'}},
					series: [{color: '#e4750e', pointSize: 7, visibleInLegend: false}],
					tooltip: { trigger: 'selection', textStyle: {color: '#303345;', bold: false}}
				};
				var chart = new google.visualization.LineChart(document.getElementById('graph'));
				chart.draw(data, options);
			}
		</script>

