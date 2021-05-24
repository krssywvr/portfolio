<template>
  <div class="landing-container">
    <h1 class="landing-name">Kristine <span>Weaver</span></h1>
    <h3 class="landing-title">front-end software engineer</h3>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.landing-container {
}

.landing-name {
  color: #faf2fa;
  display: flex;
  flex-direction: column;
  font-family: 'Yeseva One', cursive;
  font-size: 11em;
  line-height: 0.8;
  margin: 20px 0px 0px 20px;
  text-transform: uppercase;
}

.landing-title {
  font-size: 2em;
  font-style: italic;
  font-weight: 100;
  margin: 0px;
  padding-left: 25px;
}
</style>
