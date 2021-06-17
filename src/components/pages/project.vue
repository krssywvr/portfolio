<template>
    <div class="project-container">
        <section class="project-details">
            <h2 class="project-name roboto-sub-heading">{{ project.name }}</h2>
            <p class="project-desc">{{ project.desc }}</p>
            <div>
                <p class="project-tech-stack-header">Technologies Used: <span class=""><small>{{ techStack }}</small></span></p>
                <a v-if="project.article" target="_blank" :href="project.article">
                    Release Article
                </a>
                <div class="project-sources">
                    <a v-if="project.site" target="_blank" :href="project.site">
                        {{ project.site }}
                    </a>                    
                    <a v-if="project.github" target="_blank" :href="project.github">
                        github logo
                    </a>
                </div>
            </div>
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
@media screen and (max-width: 900px) {
    .project-container {
        display: flex;
        flex-direction: column-reverse;
    }

    .project-details {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-desc {
        text-align: justify;
    }

    .img-preview {
        width: 100% !important;
        object-fit: contain;
        margin: 0 0 10px 0;
    }
}

.project-container {
    display: flex;
    border-bottom: 1px solid #f0c884;
    padding: 20px 0px;
}

.project-details {
    display: flex;
    flex-direction: column;
}

.img-preview {
    margin-left: 10px;
    width: 60%;
    object-fit: contain;
}
</style>