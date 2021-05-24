<template>
  <NavBar />
  <Landing msg="Welcome to Your Vue.js App"/>
</template>

<script>
import NavBar from './components/nav-bar.vue';
import Landing from './components/landing.vue';
// #f7ccff

export default {
  name: 'App',
  components: {
    Landing,
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Ultra&family=Yeseva+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Monoton&family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap');

body {
  height: 100vh;
  background-color: #afaaff;
  background-image: linear-gradient(to bottom right, #afaaff, #fcb02b);
  margin: 40px;
}

ul {
  list-style: none;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
