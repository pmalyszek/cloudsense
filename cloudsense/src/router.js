import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('./components/views/PageMain.vue')
    },
    {
        path: '/week',
        name: 'Week',
        component: () => import('./components/views/Week.vue')
    },
    {
        path: '/world',
        name: 'World',
        component: () => import('./components/views/World.vue')
    },
    {
        path: '/archive',
        name: 'Archive',
        component: () => import('./components/views/Archive.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('./components/views/Settings.vue')
    }
  ]
})