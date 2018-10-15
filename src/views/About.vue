<template>
  <div >
    <h1>This is an about page</h1>
    <ul id="example-1">
      <li v-for="film in allFilms" :key="film.episode_id">
        {{ film.title }}
      </li>
</ul>
  </div>
</template>

<script>
import { films } from '../assets/films'

export default {
  data: function() {
    return {
      allFilms: films
    }
  }
}
</script>

<style>
</style>


