<template>
  <section>
  <div class="home-container">
    <h1 class="name yeseva-one-heading">Kristine <span>Weaver</span></h1>
    <h3 class="title">front-end software engineer</h3>
  </div>
  <div>
    <!-- <connect /> -->
  </div>
  </section>
</template>

<script>
// import Connect from './pages/connect.vue';

export default {
  name: 'Home',
  components: {
    // Connect
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.name {
  display: flex;
  flex-direction: column;
  font-size: 16vw;
  line-height: 0.8;
  margin: 0px;
}

.title {
  font-size: 3vw;
  font-style: italic;
  font-weight: 100;
  margin: 0px;
  padding-left: 25px;
}
</style>
