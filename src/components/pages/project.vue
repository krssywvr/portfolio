<template>
    <div class="project-container">
        <section class="project-details">
            <h2 class="project-name roboto-sub-heading">{{ project.name }}</h2>
            <p class="project-desc">{{ project.desc }}</p>
            <div>
                <p class="project-tech-stack-header">Technologies Used: <span class=""><small>{{ techStack }}</small></span></p>
                <div class="project-sources">
                    <a v-if="project.article"
                    class="project-source"
                    target="_blank"
                    title="See release article"
                    :href="project.article">
                        <mdicon name="book-open-page-variant-outline" />
                    </a>
                    <a v-if="project.site"
                        class="project-source"
                        target="_blank"
                        :href="project.site"
                        title="visit site">
                        <mdicon name="open-in-new" />
                    </a>               
                    <a v-if="project.github"
                        class="project-source"
                        target="_blank"
                        :href="project.github"
                        title="source code">
                        <mdicon name="github" />
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
    components: {
    },
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

    .project-sources {
        display: flex;
        justify-content: center;
    }

    .img-preview {
        width: 100% !important;
        object-fit: contain;
        margin: 0 0 10px 0 !important;
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

.project-source {
    padding-right: 10px;
}
</style>