<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/nav-bar.vue';
// #f7ccff

export default {
  name: 'App',
  components: {
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
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin: 40px;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a {
  text-decoration: none;
  color: #666666;
}
a:hover {
  color: #f0c884;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.yeseva-one-heading {
  color: #faf2fa;
  font-family: 'Yeseva One', cursive;
  line-height: 0.8;
  text-transform: uppercase;
}

.roboto-sub-heading {
    font-size: 2em;
    font-style: italic;
    font-weight: 100;
    margin: 0px;
}

.roboto-italic {
    font-style: italic;
    font-weight: 100;
    margin: 0px;
}
</style>
