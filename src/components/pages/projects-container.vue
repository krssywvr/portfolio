<template>
    <div class="projects-container">
        <h2 class="page-name yeseva-one-heading">{{ pageName }}</h2>
        <section class="page-content" v-if="isWorkPage">
            <project
                v-for="project in workProjects"
                :key="project.key"
                :project="project" />
        </section>
        <section class="page-content" v-if="isFunPage">
            <p class="roboto-sub-heading">coming soon</p>
            <project
                v-for="project in funProjects"
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
        isFunPage () {
            return this.$route.name === 'fun';
        },
        pageName () {
            switch (this.$route.name) {
            case 'work':
                return 'work';
            case 'fun':
                return 'just for fun';
            default:
                return ''
            }
        },
        workProjects () {
            return projects.default.filter(project => project.category === 'work');
        },
        funProjects () {
            return projects.default.filter(project => project.category === 'fun');
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