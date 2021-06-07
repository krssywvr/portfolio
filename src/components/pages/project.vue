<template>
    <div class="project-container">
        <section class="project-details">
            <h2 class="project-name roboto-sub-heading">{{ project.name }}</h2>
            <p class="project-desc">{{ project.desc }}</p>
            <a v-if="project.article" target="_blank" :href="project.article">Release Article</a>
            <p class="project-tech-stack-header">Technologies Used: <span class="roboto-italic">{{ techStack }}</span></p>
            <!-- <ul v-if="project.techStack" class="project-tech-stack-container">
                <li v-for="tech in project.techStack"
                    :key="tech"
                    class="prject-tech">
                    {{ tech }},
                </li>
            </ul> -->
        </section>
        <img v-if="project.img"
            class="img-preview"
            :src="require(`@/assets/${project.img}`)"/>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['project'],
    computed: {
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
        techStack () {
            return this.project.techStack.join(', ')
        }
    },
    created () {
        console.log('projects', this.$route);
    }
}
</script>

<style scoped>
.project-container {
    display: flex;
    border-bottom: 1px solid #f0c884;
    padding: 20px;
    margin: 0px 40px;
}

.project-details {
    display: flex;
    flex-direction: column;
}

p {
    margin-bottom: 0px;
}

.img-preview {
    margin-left: 10px;
    width: 400px;
    object-fit: contain;
}
</style>