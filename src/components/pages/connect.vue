<template>
    <section class="connect">
        <div class="connect-container">
            <div class="connect-icons">
                <a target="_blank" title="github" href="https://github.com/krssywvr">
                    <mdicon name="github" size="2rem" />
                </a>
                <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/kristineerickson11/">
                    <mdicon name="linkedin" size="2rem" />
                </a> 
                <a target="_blank"
                    title="Download Resume"
                    :href="`${publicPath}kristine-weaver-resume-2021.pdf`"
                    download>
                    <mdicon name="file-download-outline" size="2rem" />
                </a>
            </div>
        </div>
    </section>
</template>

<script>
// import Resume from '../../../public/kristine-weaver-resume-2021.pdf';
export default {
    name: 'Connect',
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 900px) {
    .connect-icons {
        justify-content: center !important;
    }
}

.connect-container {
    max-width: 1000;
}

.connect-icons {
    display: flex;
    justify-content: flex-end;
}

.connect-icons a:not(:first-child) {
    margin-left: 5px;
}
</style>