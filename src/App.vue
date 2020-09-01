<template>
  <div id="app">
    <display/>
  </div>
</template>

<script>
import Display from './components/Display.vue'

export default {
  name: 'App',
  components: {
    "display": Display
  }
}
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
</style>
