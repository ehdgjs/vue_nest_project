<template>
  <div id="app">
    <Movie title="Movie Info"/>
  </div>
</template>

<script>
import Movie from './components/movie.vue'

export default {
  name: 'App',
  components: {
    Movie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
