<template>
    <div id="content">
        <div id="searchBar">
			<!--TODO: Link to app endpoint, where location search is triggered.-->
			<a href="https://www.google.com/">
				<div id="searchBarIcon">
					<img src="/src/components/images/navigation/magnifierIcon.svg" width="30" height="30"/>
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
            <div class="weekday">
                <!--TODO: Changing the div content acording to name of next week day.-->
                <div class="weekdayName">
                    MON
                </div>
                <!--TODO: Changing the div content acording to predicted temperature for particular week day.-->
                <div class="temperature">
                    10 &deg;C
                </div>
                <div class="weatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to predicted weather for particular week day.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="78" height="78" />
                </div>
                <!--TODO: Changing the div content acording to predicted weather for particular week day.-->
                <div class="weatherName">
                    Cloudy
                </div>
            </div>
            <div class="weekday">
                <!--TODO: Changing the div content acording to name of next week day.-->
                <div class="weekdayName">
                    TUE
                </div>
                <!--TODO: Changing the div content acording to predicted temperature for particular week day.-->
                <div class="temperature">
                    10 &deg;C
                </div>
                <div class="weatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to predicted weather for particular week day.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="78" height="78" />
                </div>
                <!--TODO: Changing the div content acording to predicted weather for particular week day.-->
                <div class="weatherName">
                    Cloudy
                </div>
            </div>
            <div class="weekday">
                <!--TODO: Changing the div content acording to name of next week day.-->
                <div class="weekdayName">
                    WED
                </div>
                <!--TODO: Changing the div content acording to predicted temperature for particular week day.-->
                <div class="temperature">
                    10 &deg;C
                </div>
                <div class="weatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to predicted weather for particular week day.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="78" height="78" />
                </div>
                <!--TODO: Changing the div content acording to predicted weather for particular week day.-->
                <div class="weatherName">
                    Cloudy
                </div>
            </div>
            <div class="weekday">
                <!--TODO: Changing the div content acording to name of next week day.-->
                <div class="weekdayName">
                    THU
                </div>
                <!--TODO: Changing the div content acording to predicted temperature for particular week day.-->
                <div class="temperature">
                    10 &deg;C
                </div>
                <div class="weatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to predicted weather for particular week day.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="78" height="78" />
                </div>
                <!--TODO: Changing the div content acording to predicted weather for particular week day.-->
                <div class="weatherName">
                    Cloudy
                </div>
            </div>
            <div class="weekday">
                <!--TODO: Changing the div content acording to name of next week day.-->
                <div class="weekdayName">
                    FRI
                </div>
                <!--TODO: Changing the div content acording to predicted temperature for particular week day.-->
                <div class="temperature">
                    10 &deg;C
                </div>
                <div class="weatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to predicted weather for particular week day.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="78" height="78" />
                </div>
                <!--TODO: Changing the div content acording to predicted weather for particular week day.-->
                <div class="weatherName">
                    Cloudy
                </div>
            </div>
            <div class="weekday">
                <!--TODO: Changing the div content acording to name of next week day.-->
                <div class="weekdayName">
                    SAT
                </div>
                <!--TODO: Changing the div content acording to predicted temperature for particular week day.-->
                <div class="temperature">
                    10 &deg;C
                </div>
                <div class="weatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to predicted weather for particular week day.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="78" height="78" />
                </div>
                <!--TODO: Changing the div content acording to predicted weather for particular week day.-->
                <div class="weatherName">
                    Cloudy
                </div>
            </div>
            <div class="weekday">
                <!--TODO: Changing the div content acording to name of next week day.-->
                <div class="weekdayName">
                    SUN
                </div>
                <!--TODO: Changing the div content acording to predicted temperature for particular week day.-->
                <div class="temperature">
                    10 &deg;C
                </div>
                <div class="weatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to predicted weather for particular week day.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="78" height="78" />
                </div>
                <!--TODO: Changing the div content acording to predicted weather for particular week day.-->
                <div class="weatherName">
                    Cloudy
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
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