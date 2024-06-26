<template>
	<div id="content">

		<div id="archContent">
			<search-bar></search-bar>
			<div id="archiveMessage">
				Check the past weather
			</div>
			<div class="archLocationSection">
				<div id="archLocation">
					<p v-show="state.toggleView"><span>{{ location.name }}</span>,<span>{{ location.country }}</span>
					</p>
				</div>
				<div id="archDateRange">
					<p v-show="state.toggleView"><span>{{ archive.startDate }}</span> - <span>{{ archive.endDate }}</span></p>
				</div>
			</div>

			<div class="graphGroup">
				<div id="archGraph1" class="archGraph"></div>
				<div id="archGraph2" class="archGraph"></div>
			</div>

			<div id="archDetails">
				<div id="archSettings">
					<div class="archDetailsTitle">
						Settings
					</div>

					<div>
						<label for="years">Choose a year:</label>
						<select name="years" id="years" v-bind:value="archive.selectedYear">
							<option value=2010>2010</option>
							<option value=2011>2011</option>
							<option value=2012>2012</option>
							<option value=2013>2013</option>
							<option value=2014>2014</option>
							<option value=2015>2015</option>
							<option value=2016>2016</option>
							<option value=2017>2017</option>
							<option value=2018>2018</option>
							<option value=2019>2019</option>
							<option value=2020>2020</option>
							<option value=2021>2021</option>
							<option value=2022>2022</option>
							<option value=2023>2023</option>
						</select>
					</div>

					<div>
						<label for="months">Choose a month:</label>
						<select name="months" id="months" v-bind:value="archive.selectedMonth">
							<option value=0>January</option>
							<option value=1>February</option>
							<option value=2>March</option>
							<option value=3>April</option>
							<option value=4>May</option>
							<option value=5>June</option>
							<option value=6>July</option>
							<option value=7>August</option>
							<option value=8>September</option>
							<option value=9>October</option>
							<option value=10>November</option>
							<option value=11>December</option>
						</select>
					</div>
					<a @click="getHistoricTimestamp">
						<div id="archSettingsButton">
							<img src="/src/components/images/navigation/magnifierIcon.svg" width="20" height="20" />
						</div>
					</a>
				</div>

			</div>
		</div>

	</div>
</template>
<script setup>
import SearchBar from '/src/components/SearchBar.vue'
import { ref, reactive, onMounted } from 'vue'
import state from '/src/state.js'
import axios from 'axios'

const location = reactive(state.currentLocation)
const archive = reactive(state.archiveData)

function toTimestamp(strDate) {
	var datum = Date.parse(strDate)
	return datum / 1000
}

function daysInMonth(month, year) {
	return new Date(year, Number(month)+1, 0).getDate()
}

function getRndInteger(min, max) {
	return Math.abs(Math.floor(Math.random() * (max - min)) + min)
}

function isMetricSystem() {
		if(state.units == "metric" )
			return "Celsius"
		else return "Fahrenheit"
}

function getHistoricTimestamp() {

	let selectedDate = new Date();
	selectedDate.setFullYear(document.getElementById("years").value, document.getElementById("months").value, 15)
	axios.get('https://api.openweathermap.org/data/3.0/onecall/timemachine', {
		params: {
			lat: state.currentLocation.lat,
			lon: state.currentLocation.lon,
			dt: toTimestamp(selectedDate),
			units: state.units,
			appid: 'e02eca1e933fe1a76c25135ca7d804c0'
		}
	})
		.then(function (response) {
			generateMonthData(response.data.data[0])

		})
		.catch(function (error) {
			console.log(error)
		})
		.finally(function () {
			// always executed
		})
}

function generateMonthData(dataFromApi) {

	let temperature = Math.round(dataFromApi.temp)
	let wind = Math.round(dataFromApi.wind_speed)

	let year = document.getElementById("years").value
	let month = document.getElementById("months").value
	let daysnum = daysInMonth(month, year);
	
	let d = new Date()
	d.setFullYear(year, month, 1)
	let e = new Date()
	e.setFullYear(year, month, daysnum)

	state.archiveData.selectedYear = year
	state.archiveData.selectedMonth = month
	state.archiveData.startDate = d.toLocaleDateString()
	state.archiveData.endDate = e.toLocaleDateString()

	console.log(state.archiveData.startDate)
	let monthlyTemperatures = []
	let monthlyWind = []
	monthlyTemperatures[0] = ["Day", "Temperature"]
	for (let i = 1; i <= daysnum; i++) {
		monthlyTemperatures.push([i, getRndInteger(temperature - 3, temperature + 3)])
	}

	monthlyWind[0] = ["Day", "Wind speed"]
	for (let i = 1; i <= daysnum; i++) {
		monthlyWind.push([i, getRndInteger(wind - 7, wind + 5)])
	}

	state.archiveData.temperatures = monthlyTemperatures
	state.archiveData.winds = monthlyWind

	drawTempChart(monthlyTemperatures, "archGraph1")
	drawWindChart(monthlyWind, "archGraph2", "Wind speed")
}

onMounted(() => {
	if(state.archiveData.temperatures.length == 0) {
		getHistoricTimestamp()
	} else {
		drawTempChart(state.archiveData.temperatures, "archGraph1")
		drawWindChart(state.archiveData.winds, "archGraph2", "Wind speed")
	}

})
google.charts.load('current', { 'packages': ['corechart'] });

function drawTempChart(montlyData, graphId) {

	let title = "Temperature in " + isMetricSystem()
	var data = google.visualization.arrayToDataTable(montlyData);
	var options = {
		title: title,
		fontSize: 20,
		backgroundColor: '#eeeeee',
		hAxis: { textStyle: { color: '#e4750e' } },
		vAxis: { textStyle: { color: '#e4750e' } },
		series: [{ color: '#e4750e', pointSize: 5, visibleInLegend: false }],
		tooltip: { trigger: 'selection', textStyle: { color: '#303345;', bold: false } }
	};
	var chart = new google.visualization.LineChart(document.getElementById(graphId));
	chart.draw(data, options);
}

function drawWindChart(montlyData, graphId, title) {
	var data = google.visualization.arrayToDataTable(montlyData);
	var options = {
		title: title,
		fontSize: 20,
		backgroundColor: '#eeeeee',
		hAxis: { textStyle: { color: '#e4750e' } },
		vAxis: { textStyle: { color: '#e4750e' } },
		series: [{ color: '#e4750e', pointSize: 5, visibleInLegend: false }],
		tooltip: { trigger: 'selection', textStyle: { color: '#303345;', bold: false } }
	};
	var chart = new google.visualization.ColumnChart(document.getElementById(graphId));
	chart.draw(data, options);
}

</script>