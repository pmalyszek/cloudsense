<template>
    <div id="content">
        <div id="settingsMessage">
            Customize app for yourself
        </div>
        <div class="setting">
            <div class="settingName">
                Units settings
            </div>

            <div data-value="metric" class="settingValue" v-bind:class="metricSelected" v-on:click="setUnits">
                Metric
            </div>

            <div data-value="imperial" class="settingValue" v-bind:class="imperialSelected" v-on:click="setUnits">
                Imperial
            </div>

        </div>
    </div>
</template>

<script setup>

import state from '/src/state.js'
import { ref } from 'vue'

const metricSelected = ref('')
const imperialSelected = ref('')

markUnits()

function setUnits(event) {

    var unit = event.target.getAttribute('data-value')
    if(unit !== state.units) {
        state.units = unit
        state.updateMetric = true
        markUnits()

    }


}

function markUnits() {
    if (state.units == "metric") {
        metricSelected.value = "selectedSettingValue"
        imperialSelected.value = ""
    } else if (state.units == "imperial") {
        imperialSelected.value = "selectedSettingValue"
        metricSelected.value = ""
    }
}
</script>