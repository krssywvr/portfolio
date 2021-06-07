<template>
    <div class="nav-bar-container">
        <!-- <rouer-link to="/" class="home-logo yeseva-one-heading">kw</rouer-link> -->
        <div>
            <router-link to="/work" class="nav-item">Work</router-link>
            <router-link to="/leisure" class="nav-item">Leisure</router-link>
            <router-link to="/connect" class="nav-item">connect</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
a {
  padding: 10px;
}

.nav-bar-container {
    display: flex;
    justify-content: space-between;
}

.nav-item {
    margin-left: 20px;
    letter-spacing: 1px;
    text-transform: lowercase;
}
</style>