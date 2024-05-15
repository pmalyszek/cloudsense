import { reactive } from 'vue'

export default reactive({
    weeklyWeather: {
        data: []
    },
    hourlyWeather: {
        data: []
    },
    currentWeather: {
        temperature: 20,
        date: 'Tue Apr 12 2024',
        description: 'Mostly cloudy',
        icon: '/src/components/icons/slonce.svg'
    },
    currentLocation: {
        name: "",
        country: "ES",
        lat: '41.3828939',
        lon: '2.1774322'
    },
    quoteContent: "",
    quoteAuthor: "",
    toggleView: false,
    updateQuote: true
})