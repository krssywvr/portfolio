<template>
  <div class="home-container">
    <h1 class="name yeseva-one-heading">Kristine <span>Weaver</span></h1>
    <h3 class="title">front-end software engineer</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
}

.name {
  display: flex;
  flex-direction: column;
  font-size: 11em;
  line-height: 0.8;
  margin: 20px 0px 0px 20px;
}

.title {
  font-size: 2em;
  font-style: italic;
  font-weight: 100;
  margin: 0px;
  padding-left: 25px;
}
</style>
