<template>
    <div class="nav-bar-container">
        <router-link to="/work" class="nav-item">Work</router-link>
        <router-link to="/fun" class="nav-item">Just for fun</router-link>
        <router-link to="/" class="nav-item">let's chat</router-link>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.nav-bar-container {
    display: flex;
    justify-content: flex-end;
}

.nav-item {
    margin-left: 20px;
    letter-spacing: 1px;
    text-transform: lowercase;
}
</style>