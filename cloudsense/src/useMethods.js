import state from '/src/state.js'

export function drawChart() {

    let daysTable = []
    let tempTable = []
    state.weeklyWeather.data.forEach(daily => {
        daysTable.push(daily.day.slice(0, 3))
        tempTable.push(daily.temp)
    })

    var data = google.visualization.arrayToDataTable([
        ['Day', 'Temperature'],
        [daysTable[0], tempTable[0]],
        [daysTable[1], tempTable[1]],
        [daysTable[2], tempTable[2]],
        [daysTable[3], tempTable[3]],
        [daysTable[4], tempTable[4]],
        [daysTable[5], tempTable[5]],
        [daysTable[6], tempTable[6]]
    ]);
    var options = {
        fontSize: 18,
        backgroundColor: '#eeeeee',
        hAxis: { textStyle: { color: '#e4750e' } },
        vAxis: { textStyle: { color: '#e4750e' } },
        series: [{ color: '#e4750e', pointSize: 7, visibleInLegend: false }],
        tooltip: { trigger: 'selection', textStyle: { color: '#303345;', bold: false } }
    };
    var chart = new google.visualization.LineChart(document.getElementById('graph'));
    chart.draw(data, options);
}