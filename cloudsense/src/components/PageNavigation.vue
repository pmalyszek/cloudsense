<template>
    <div id="navigationPanel">
        <nav>
            <slot>
                <div id="logo">
                    <img src="/src/components/images/logo.png" width="180px" height="43px" />
                </div>
                <!--TODO: Link to app endpoint, where 'Dashboard' view is available.-->
                <router-link :to="{ name: 'Dashboard' }">
                    <div class="navigationButton">
                        <div class="navigationButtonIcon">
                            <img src="/src/components/images/navigation/dashboardIcon.svg" />
                        </div>
                        <div class="navigationButtonTitle">
                            Dashboard
                        </div>
                    </div>
                </router-link>

                <!--TODO: Link to app endpoint, where 'Week' view is available.-->
                <router-link :to="{ name: 'Week' }">
                    <div class="navigationButton">
                        <div class="navigationButtonIcon">
                            <img src="/src/components/images/navigation/weekIcon.svg" />
                        </div>
                        <div class="navigationButtonTitle">
                            Week
                        </div>
                    </div>
                </router-link>
                <!--TODO: Link to app endpoint, where 'World' view is available.-->
                <router-link :to="{ name: 'World' }">
                    <div class="navigationButton">
                        <div class="navigationButtonIcon">
                            <img src="/src/components/images/navigation/worldIcon.svg" />
                        </div>
                        <div class="navigationButtonTitle">
                            World
                        </div>
                    </div>
                </router-link>
                <!--TODO: Link to app endpoint, where 'Archive' view is available.-->
                <router-link :to="{ name: 'Archive' }">
                    <div class="navigationButton">
                        <div class="navigationButtonIcon">
                            <img src="/src/components/images/navigation/archiveIcon.svg" />
                        </div>
                        <div class="navigationButtonTitle">
                            Archive
                        </div>
                    </div>
                </router-link>
                <!--TODO: Link to app endpoint, where 'Settings' view is available.-->
                <router-link :to="{ name: 'Settings' }">
                    <div class="navigationButton">
                        <div class="navigationButtonIcon">
                            <img src="/src/components/images/navigation/settingsIcon.svg" />
                        </div>
                        <div class="navigationButtonTitle">
                            Settings
                        </div>
                    </div>
                </router-link>
            </slot>
        </nav>
    </div>

</template>