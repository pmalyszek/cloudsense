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
            <div id="archiveMessage">
                Check the past weather
            </div>
            <div id="archContent">
				<!--TODO: Changing the div content according to current location.-->
				<div id="archLocation">
					Kraków, Poland
				</div>
				<!--TODO: Changing the div content according to selected calendar week.-->
				<div id="archDateRange">
					2024-05-10 - 2024-10-17
				</div>
				<div id="archGraph1" class="archGraph">
				</div>
				<div id="archGraph2" class="archGraph">
				</div>
				<div id="archDetails">
					<div id="archSettings">
						<div class="archDetailsTitle">
							Settings
						</div>
						<!--TODO: Hook up text boxes to year/calendar week choose mechanism.-->
						<input id="yearInput" type="text" placeholder="Year">
						<input id="calendarWeekInput" type="text" placeholder="Calendar Week">
						<!--TODO: Link to app endpoint, where graphs and description update is triggered.-->
						<a href="https://www.google.com/">
							<div id="archSettingsButton">
								<img src="/src/components/images/navigation/magnifierIcon.svg" width="20" height="20"/>
							</div>
						</a>
					</div>
					<div id="archDescription">
						<div class="archDetailsTitle">
							Description
						</div>
						<!--TODO: Update div content accordingly to viewed location and calendar week.-->
						<div id="archDetailsContent">
							Temp, hum etc...
						</div>
					</div>
				</div>
			</div>
        </div>
    </div>
</template>
<script type="text/javascript">
			google.charts.load('current', {'packages':['corechart']});
			google.charts.setOnLoadCallback(drawChart1);
			google.charts.setOnLoadCallback(drawChart2);
			function drawChart1() {
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
				var chart = new google.visualization.LineChart(document.getElementById('archGraph1'));
				chart.draw(data, options);
			}
			function drawChart2() {
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
				var chart = new google.visualization.LineChart(document.getElementById('archGraph2'));
				chart.draw(data, options);
			}
		</script>