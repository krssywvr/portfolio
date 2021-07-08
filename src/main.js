import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import App from './App.vue';

// Routes
import Home from './components/home.vue';
import ProjectsContainer from './components/pages/projects-container.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/work',
        name: 'work',
        component: ProjectsContainer
    },
    {
        path: '/leisure',
        name: 'leisure',
        component: ProjectsContainer
    }
];

const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
});

// const app = createApp(App);
createApp(App)
    .use(router)
    .use(mdiVue, {
        icons: mdijs
    })
    .mount('#app');