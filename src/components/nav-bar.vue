<template>
    <div class="nav-bar-container">
        <router-link to="/" class="nav-item nav-left">kw</router-link>
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
    align-items: center;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 100;
    background-image: linear-gradient(to bottom right, #afaaff, #fcb02b);
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-bottom: 1px solid #f0c884;
}

.nav-bar-container:first-child .nav-item {
    margin-left: 0px;
}

.nav-left {
    font-family: 'Yeseva One', cursive;
    color: white;
}

.nav-item {
    margin-left: 20px;
    letter-spacing: 1px;
    text-transform: lowercase;
}
</style>