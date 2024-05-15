<template>
    <div class="wrapper">
        <page-navigation></page-navigation>
        <page-main>
            <router-view></router-view>
        </page-main>
    </div>

</template>

<script setup>
import PageNavigation from './components/PageNavigation.vue'
import { ref } from 'vue'

</script>

<script>

</script>