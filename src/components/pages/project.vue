<template>
    <div class="project-container">
        <section class="project-details">
            <h2 class="project-name roboto-sub-heading">{{ project.name }}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt illum obcaecati fuga cumque a sit impedit natus, est facilis expedita, dolore possimus voluptas dolorum consequuntur assumenda consectetur ut porro quisquam?</p>
        </section>
        <div class="img-preview"></div>
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
            case 'fun':
                return 'just for fun';
            default:
                return ''
            }
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

.img-preview {
    background-color: cornflowerblue;
    margin-left: 10px;
    width: 2000px;
    height: 250px;
}
</style>