import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
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
        path: '/fun',
        name: 'fun',
        component: ProjectsContainer
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// const app = createApp(App);
createApp(App).use(router).mount('#app');