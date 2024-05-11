<template>
    <h1 class="nice">{{ message }}</h1>
    <div id="test">{{ answer }}</div>
</template>

<script setup>
    import { ref } from 'vue'
    const message = ref('Hello Vue!')

</script>

<script>
    import axios from 'axios'

    export default {
        name: "App",
        data() {
            return {
                answer: {},
            };
        },
        methods: {
            async getAnswer() {
                const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=50.0619474&lon=19.9368564&appid=3fe22def2b2541db31e4232b76706783');
                this.answer = data;
            },
        },
        beforeMount() {
            this.getAnswer();
        },
    };

</script>

<style scoped>
    .nice { color: red }
</style>