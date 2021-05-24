<template>
    <div class="nav-bar-container">
       <ul class="nav-bar-list">
            <li class="nav-bar-list-item">Work</li>
            <li class="nav-bar-list-item">Just for fun</li>
            <li class="nav-bar-list-item">let's chat</li>
       </ul>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.nav-bar-container,
.nav-bar-list {
    display: flex;
    justify-content: flex-end;
}

.nav-bar-list-item {
    margin-left: 20px;
    letter-spacing: 1px;
    text-transform: lowercase;
}
</style>