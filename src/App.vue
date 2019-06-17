<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from './components/Wrapper'

export default {
  components: {
    Wrapper
  }
}
</script>

<style lang="scss">
#app {
  overflow: hidden;
  height: 100vh;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
