<template>
    <div class="wrapper">
        <page-navigation>
        </page-navigation>
        <page-main>
            <router-view></router-view>
        </page-main>
        <div id="test">{{ answer }}</div>
    </div>

</template>

<script setup>
import PageMain from './components/views/PageMain.vue'
import PageNavigation from './components/PageNavigation.vue'
import { ref } from 'vue'

</script>

<script>
import axios from 'axios'
import data from '/src/assets/weatherSample.json'

export default {
    name: "App",
    data() {
        return {
            answer: {},
        };
    },
    methods: {
        async getAnswer() {
            // const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=50.0619474&lon=19.9368564&appid=3fe22def2b2541db31e4232b76706783');

            this.answer = data;
        },
    },
    beforeMount() {
        this.getAnswer();
    },
};

</script>

<style scoped>
.nice {
    color: red
}
</style>