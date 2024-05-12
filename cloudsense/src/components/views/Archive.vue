<template>
    <div id="content">
        <div>
            <!--TODO: Figure out how to implement search bar.-->
            <div id="archSearchBar">
                searchBar
            </div>
            <div id="archiveMessage">
                Check the past weather
            </div>
            <div id="calendar">
                <!--TODO: Link to app endpoint, where calednar range is changing backward.-->
                <a href="https://www.google.com/">
                    <div class="calendarNavigationButton">
                        <img src="/src/components/images/navigation/leftArrow.svg" width="40px" height="40px" />
                    </div>
                </a>
                <!--TODO: Figure out how to implement a calendar.-->
                <div id="calendarContent">
                    calendar
                </div>
                <!--TODO: Link to app endpoint, where calednar range is changing forward.-->
                <a href="https://www.google.com/">
                <div class="calendarNavigationButton">
                    <img src="/src/components/images/navigation/rightArrow.svg" width="40px" height="40px" />
                </div>
                </a>
            </div>
            <div id="archWeather">
                <!--TODO: Changing the div content acording to currently selected location.-->
                <div id="archLocation">
                    Kraków, Poland
                </div>
                <!--TODO: Changing the div content acording to currently selected date.-->
                <div id="archDate">
                    2024-05-10
                </div>
                <div id="archWeatherIcon">
                    <!--TODO: Changing the 'src' attribute value according to selected date.-->
                    <img src="/src/components/images/weather/cloudyIcon.svg" width="140px" height="140px" />
                </div>
                <div style="float: left">
                    <!--TODO: Changing the div content acording to currently selected date.-->
                    <div id="temperature">
                        10 &deg;C
                    </div>
                    <!--TODO: Changing the div content acording to currently selected date.-->
                    <div id="archWeatherName">
                        Cloudy
                    </div>
                </div>
            </div>
            <div id="description">
                <div id="descriptionTitle">
                    Weather description
                </div>
                <!--TODO: Changing the div content acording to currently selected date.-->
                <div id="descriptionContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam finibus felis at molestie ornare.
                    Vivamus sit amet fringilla tortor, sit amet lacinia dui. Vivamus sit amet fringilla tortor, sit amet
                    lacinia dui.
                </div>
            </div>
        </div>
    </div>
</template>