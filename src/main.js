import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

// Routes
import Home from './components/home.vue';
import ProjectsContainer from './components/pages/projects-container.vue';
import Connect from './components/pages/connect.vue';

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
    },
    {
        path: '/connect',
        name: 'connect',
        component: Connect
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// const app = createApp(App);
createApp(App).use(router).mount('#app');