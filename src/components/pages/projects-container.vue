<template>
    <div class="projects-container">
        <h2 class="page-name yeseva-one-heading">{{ pageName }}</h2>
        <section class="page-content" v-if="isWorkPage">
            <project
                v-for="project in workProjects"
                :key="project.key"
                :project="project" />
        </section>
        <section class="page-content" v-if="isLeisurePage">
            <project
                v-for="project in leisureProjects"
                :key="project.key"
                :project="project" />
        </section>
    </div>
</template>

<script>
import Project from './project.vue';
import * as projects from '../../configs/projects.json';

export default {
    name: 'ProjectsContainer',
    components: {
        Project
    },
    computed: {
        isWorkPage () {
            return this.$route.name === 'work';
        },
        isContactPage () {
            return this.$route.name === 'contact';
        },
        isLeisurePage () {
            return this.$route.name === 'leisure';
        },
        pageName () {
            switch (this.$route.name) {
            case 'work':
                return 'work';
            case 'leisure':
                return 'leisure';
            default:
                return ''
            }
        },
        workProjects () {
            return projects.default.filter(project => project.category === 'work').reverse();
        },
        leisureProjects () {
            return projects.default.filter(project => project.category === 'leisure');
        }
    },
    created () {
        console.log('projects', this.$route, this.workProjects);
    }
}
</script>

<style scoped>
.page-name {
    font-size: 5em;
}
</style>